/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.24
if (typeof WeakMap === 'undefined') {
  (() => {
    const defineProperty = Object.defineProperty;
    let counter = Date.now() % 1e9;

    class WeakMap {
      constructor() {
        this.name = '__st' + ((Math.random() * 1e9) >>> 0) + (counter++ + '__');
      }

      set(key, value) {
        const entry = key[this.name];
        if (entry && entry[0] === key) entry[1] = value;
        else
          defineProperty(key, this.name, {
            value: [key, value],
            writable: true,
          });
        return this;
      }

      get(key) {
        let entry;
        return (entry = key[this.name]) && entry[0] === key
          ? entry[1]
          : undefined;
      }

      delete(key) {
        const entry = key[this.name];
        if (!entry || entry[0] !== key) return false;
        entry[0] = entry[1] = undefined;
        return true;
      }

      has(key) {
        const entry = key[this.name];
        if (!entry) return false;
        return entry[0] === key;
      }
    }

    window.WeakMap = WeakMap;
  })();
}

((global) => {
  if (global.JsMutationObserver) {
    return;
  }
  const registrationsTable = new WeakMap();
  let setImmediate;
  if (/Trident|Edge/.test(navigator.userAgent)) {
    setImmediate = setTimeout;
  } else if (window.setImmediate) {
    setImmediate = window.setImmediate;
  } else {
    let setImmediateQueue = [];
    const sentinel = String(Math.random());
    window.addEventListener('message', (e) => {
      if (e.data === sentinel) {
        const queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach((func) => {
          func();
        });
      }
    });
    setImmediate = (func) => {
      setImmediateQueue.push(func);
      window.postMessage(sentinel, '*');
    };
  }
  let isScheduled = false;
  let scheduledObservers = [];
  function scheduleCallback(observer) {
    scheduledObservers.push(observer);
    if (!isScheduled) {
      isScheduled = true;
      setImmediate(dispatchCallbacks);
    }
  }
  function wrapIfNeeded(node) {
    return (
      (window.ShadowDOMPolyfill &&
        window.ShadowDOMPolyfill.wrapIfNeeded(node)) ||
      node
    );
  }
  function dispatchCallbacks() {
    isScheduled = false;
    const observers = scheduledObservers;
    scheduledObservers = [];
    observers.sort((o1, o2) => {
      return o1.uid_ - o2.uid_;
    });
    let anyNonEmpty = false;
    observers.forEach((observer) => {
      const queue = observer.takeRecords();
      removeTransientObserversFor(observer);
      if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
      }
    });
    if (anyNonEmpty) dispatchCallbacks();
  }
  function removeTransientObserversFor(observer) {
    observer.nodes_.forEach((node) => {
      const registrations = registrationsTable.get(node);
      if (!registrations) return;
      registrations.forEach((registration) => {
        if (registration.observer === observer)
          registration.removeTransientObservers();
      });
    });
  }
  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
    for (let node = target; node; node = node.parentNode) {
      const registrations = registrationsTable.get(node);
      if (registrations) {
        for (let j = 0; j < registrations.length; j++) {
          const registration = registrations[j];
          const options = registration.options;
          if (node !== target && !options.subtree) continue;
          const record = callback(options);
          if (record) registration.enqueue(record);
        }
      }
    }
  }
  let uidCounter = 0;

  class JsMutationObserver {
    constructor(callback) {
      this.callback_ = callback;
      this.nodes_ = [];
      this.records_ = [];
      this.uid_ = ++uidCounter;
    }

    observe(target, options) {
      target = wrapIfNeeded(target);
      if (
        (!options.childList && !options.attributes && !options.characterData) ||
        (options.attributeOldValue && !options.attributes) ||
        (options.attributeFilter &&
          options.attributeFilter.length &&
          !options.attributes) ||
        (options.characterDataOldValue && !options.characterData)
      ) {
        throw new SyntaxError();
      }
      let registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, (registrations = []));
      let registration;
      for (let i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes_.push(target);
      }
      registration.addListeners();
    }

    disconnect() {
      this.nodes_.forEach(function (node) {
        const registrations = registrationsTable.get(node);
        for (let i = 0; i < registrations.length; i++) {
          const registration = registrations[i];
          if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    }

    takeRecords() {
      const copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  }

  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = [];
    this.removedNodes = [];
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }
  function copyMutationRecord(original) {
    const record = new MutationRecord(original.type, original.target);
    record.addedNodes = original.addedNodes.slice();
    record.removedNodes = original.removedNodes.slice();
    record.previousSibling = original.previousSibling;
    record.nextSibling = original.nextSibling;
    record.attributeName = original.attributeName;
    record.attributeNamespace = original.attributeNamespace;
    record.oldValue = original.oldValue;
    return record;
  }
  let currentRecord, recordWithOldValue;
  function getRecord(type, target) {
    return (currentRecord = new MutationRecord(type, target));
  }
  function getRecordWithOldValue(oldValue) {
    if (recordWithOldValue) return recordWithOldValue;
    recordWithOldValue = copyMutationRecord(currentRecord);
    recordWithOldValue.oldValue = oldValue;
    return recordWithOldValue;
  }
  function clearRecords() {
    currentRecord = recordWithOldValue = undefined;
  }
  function recordRepresentsCurrentMutation(record) {
    return record === recordWithOldValue || record === currentRecord;
  }
  function selectRecord(lastRecord, newRecord) {
    if (lastRecord === newRecord) return lastRecord;
    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord))
      return recordWithOldValue;
    return null;
  }

  class Registration {
    constructor(observer, target, options) {
      this.observer = observer;
      this.target = target;
      this.options = options;
      this.transientObservedNodes = [];
    }

    enqueue(record) {
      const records = this.observer.records_;
      const length = records.length;
      if (records.length > 0) {
        const lastRecord = records[length - 1];
        const recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }
      records[length] = record;
    }

    addListeners() {
      this.addListeners_(this.target);
    }

    addListeners_(node) {
      const options = this.options;
      if (options.attributes)
        node.addEventListener('DOMAttrModified', this, true);
      if (options.characterData)
        node.addEventListener('DOMCharacterDataModified', this, true);
      if (options.childList)
        node.addEventListener('DOMNodeInserted', this, true);
      if (options.childList || options.subtree)
        node.addEventListener('DOMNodeRemoved', this, true);
    }

    removeListeners() {
      this.removeListeners_(this.target);
    }

    removeListeners_(node) {
      const options = this.options;
      if (options.attributes)
        node.removeEventListener('DOMAttrModified', this, true);
      if (options.characterData)
        node.removeEventListener('DOMCharacterDataModified', this, true);
      if (options.childList)
        node.removeEventListener('DOMNodeInserted', this, true);
      if (options.childList || options.subtree)
        node.removeEventListener('DOMNodeRemoved', this, true);
    }

    addTransientObserver(node) {
      if (node === this.target) return;
      this.addListeners_(node);
      this.transientObservedNodes.push(node);
      let registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, (registrations = []));
      registrations.push(this);
    }

    removeTransientObservers() {
      const transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      transientObservedNodes.forEach(function (node) {
        this.removeListeners_(node);
        const registrations = registrationsTable.get(node);
        for (let i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
    }

    handleEvent(e) {
      e.stopImmediatePropagation();
      switch (e.type) {
        case 'DOMAttrModified':
          const name = e.attrName;
          const namespace = e.relatedNode.namespaceURI;
          var target = e.target;
          var record = new getRecord('attributes', target);
          record.attributeName = name;
          record.attributeNamespace = namespace;
          var oldValue =
            e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, (options) => {
            if (!options.attributes) return;
            if (
              options.attributeFilter &&
              options.attributeFilter.length &&
              options.attributeFilter.indexOf(name) === -1 &&
              options.attributeFilter.indexOf(namespace) === -1
            ) {
              return;
            }
            if (options.attributeOldValue)
              return getRecordWithOldValue(oldValue);
            return record;
          });
          break;

        case 'DOMCharacterDataModified':
          var target = e.target;
          var record = getRecord('characterData', target);
          var oldValue = e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, (options) => {
            if (!options.characterData) return;
            if (options.characterDataOldValue)
              return getRecordWithOldValue(oldValue);
            return record;
          });
          break;

        case 'DOMNodeRemoved':
          this.addTransientObserver(e.target);

        case 'DOMNodeInserted':
          const changedNode = e.target;
          let addedNodes, removedNodes;
          if (e.type === 'DOMNodeInserted') {
            addedNodes = [changedNode];
            removedNodes = [];
          } else {
            addedNodes = [];
            removedNodes = [changedNode];
          }
          const previousSibling = changedNode.previousSibling;
          const nextSibling = changedNode.nextSibling;
          var record = getRecord('childList', e.target.parentNode);
          record.addedNodes = addedNodes;
          record.removedNodes = removedNodes;
          record.previousSibling = previousSibling;
          record.nextSibling = nextSibling;
          forEachAncestorAndObserverEnqueueRecord(e.relatedNode, (options) => {
            if (!options.childList) return;
            return record;
          });
      }
      clearRecords();
    }
  }

  global.JsMutationObserver = JsMutationObserver;
  if (!global.MutationObserver) {
    global.MutationObserver = JsMutationObserver;
    JsMutationObserver._isPolyfilled = true;
  }
})(self);

((scope) => {
  'use strict';
  if (!(window.performance && window.performance.now)) {
    const start = Date.now();
    window.performance = {
      now() {
        return Date.now() - start;
      },
    };
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (() => {
      const nativeRaf =
        window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return nativeRaf
        ? (callback) => {
            return nativeRaf(() => {
              callback(performance.now());
            });
          }
        : (callback) => {
            return window.setTimeout(callback, 1e3 / 60);
          };
    })();
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (() => {
      return (
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        ((id) => {
          clearTimeout(id);
        })
      );
    })();
  }
  const workingDefaultPrevented = (() => {
    const e = document.createEvent('Event');
    e.initEvent('foo', true, true);
    e.preventDefault();
    return e.defaultPrevented;
  })();
  if (!workingDefaultPrevented) {
    const origPreventDefault = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function () {
      if (!this.cancelable) {
        return;
      }
      origPreventDefault.call(this);
      Object.defineProperty(this, 'defaultPrevented', {
        get() {
          return true;
        },
        configurable: true,
      });
    };
  }
  const isIE = /Trident/.test(navigator.userAgent);
  if (
    !window.CustomEvent ||
    (isIE && typeof window.CustomEvent !== 'function')
  ) {
    window.CustomEvent = (inType, params) => {
      params = params || {};
      const e = document.createEvent('CustomEvent');
      e.initCustomEvent(
        inType,
        Boolean(params.bubbles),
        Boolean(params.cancelable),
        params.detail
      );
      return e;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }
  if (!window.Event || (isIE && typeof window.Event !== 'function')) {
    const origEvent = window.Event;
    window.Event = (inType, params) => {
      params = params || {};
      const e = document.createEvent('Event');
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      return e;
    };
    window.Event.prototype = origEvent.prototype;
  }
})(window.WebComponents);

window.HTMLImports = window.HTMLImports || {
  flags: {},
};

((scope) => {
  const IMPORT_LINK_TYPE = 'import';
  const useNative = Boolean(IMPORT_LINK_TYPE in document.createElement('link'));
  const hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);
  const wrap = (node) => {
    return hasShadowDOMPolyfill
      ? window.ShadowDOMPolyfill.wrapIfNeeded(node)
      : node;
  };
  const rootDocument = wrap(document);
  const currentScriptDescriptor = {
    get() {
      const script =
        window.HTMLImports.currentScript ||
        document.currentScript ||
        (document.readyState !== 'complete'
          ? document.scripts[document.scripts.length - 1]
          : null);
      return wrap(script);
    },
    configurable: true,
  };
  Object.defineProperty(document, '_currentScript', currentScriptDescriptor);
  Object.defineProperty(
    rootDocument,
    '_currentScript',
    currentScriptDescriptor
  );
  const isIE = /Trident/.test(navigator.userAgent);
  function whenReady(callback, doc) {
    doc = doc || rootDocument;
    whenDocumentReady(() => {
      watchImportsLoad(callback, doc);
    }, doc);
  }
  const requiredReadyState = isIE ? 'complete' : 'interactive';
  const READY_EVENT = 'readystatechange';
  function isDocumentReady(doc) {
    return (
      doc.readyState === 'complete' || doc.readyState === requiredReadyState
    );
  }
  function whenDocumentReady(callback, doc) {
    if (!isDocumentReady(doc)) {
      const checkReady = () => {
        if (
          doc.readyState === 'complete' ||
          doc.readyState === requiredReadyState
        ) {
          doc.removeEventListener(READY_EVENT, checkReady);
          whenDocumentReady(callback, doc);
        }
      };
      doc.addEventListener(READY_EVENT, checkReady);
    } else if (callback) {
      callback();
    }
  }
  function markTargetLoaded(event) {
    event.target.__loaded = true;
  }
  function watchImportsLoad(callback, doc) {
    const imports = doc.querySelectorAll('link[rel=import]');
    let parsedCount = 0;
    const importCount = imports.length;
    const newImports = [];
    const errorImports = [];
    function checkDone() {
      if (parsedCount == importCount && callback) {
        callback({
          allImports: imports,
          loadedImports: newImports,
          errorImports: errorImports,
        });
      }
    }
    function loadedImport(e) {
      markTargetLoaded(e);
      newImports.push(this);
      parsedCount++;
      checkDone();
    }
    function errorLoadingImport(e) {
      errorImports.push(this);
      parsedCount++;
      checkDone();
    }
    if (importCount) {
      for (let i = 0, imp; i < importCount && (imp = imports[i]); i++) {
        if (isImportLoaded(imp)) {
          newImports.push(this);
          parsedCount++;
          checkDone();
        } else {
          imp.addEventListener('load', loadedImport);
          imp.addEventListener('error', errorLoadingImport);
        }
      }
    } else {
      checkDone();
    }
  }
  function isImportLoaded(link) {
    return useNative
      ? link.__loaded || (link.import && link.import.readyState !== 'loading')
      : link.__importParsed;
  }
  if (useNative) {
    new MutationObserver((mxns) => {
      for (let i = 0, l = mxns.length, m; i < l && (m = mxns[i]); i++) {
        if (m.addedNodes) {
          handleImports(m.addedNodes);
        }
      }
    }).observe(document.head, {
      childList: true,
    });
    function handleImports(nodes) {
      for (let i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        if (isImport(n)) {
          handleImport(n);
        }
      }
    }
    function isImport(element) {
      return element.localName === 'link' && element.rel === 'import';
    }
    function handleImport(element) {
      const loaded = element.import;
      if (loaded) {
        markTargetLoaded({
          target: element,
        });
      } else {
        element.addEventListener('load', markTargetLoaded);
        element.addEventListener('error', markTargetLoaded);
      }
    }
    (() => {
      if (document.readyState === 'loading') {
        const imports = document.querySelectorAll('link[rel=import]');
        for (
          let i = 0, l = imports.length, imp;
          i < l && (imp = imports[i]);
          i++
        ) {
          handleImport(imp);
        }
      }
    })();
  }
  whenReady((detail) => {
    window.HTMLImports.ready = true;
    window.HTMLImports.readyTime = new Date().getTime();
    const evt = rootDocument.createEvent('CustomEvent');
    evt.initCustomEvent('HTMLImportsLoaded', true, true, detail);
    rootDocument.dispatchEvent(evt);
  });
  scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
  scope.useNative = useNative;
  scope.rootDocument = rootDocument;
  scope.whenReady = whenReady;
  scope.isIE = isIE;
})(window.HTMLImports);

((scope) => {
  const modules = [];
  const addModule = (module) => {
    modules.push(module);
  };
  const initializeModules = () => {
    modules.forEach((module) => {
      module(scope);
    });
  };
  scope.addModule = addModule;
  scope.initializeModules = initializeModules;
})(window.HTMLImports);

window.HTMLImports.addModule((scope) => {
  const CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
  const CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;
  const path = {
    resolveUrlsInStyle(style, linkUrl) {
      const doc = style.ownerDocument;
      const resolver = doc.createElement('a');
      style.textContent = this.resolveUrlsInCssText(
        style.textContent,
        linkUrl,
        resolver
      );
      return style;
    },
    resolveUrlsInCssText(cssText, linkUrl, urlObj) {
      let r = this.replaceUrls(cssText, urlObj, linkUrl, CSS_URL_REGEXP);
      r = this.replaceUrls(r, urlObj, linkUrl, CSS_IMPORT_REGEXP);
      return r;
    },
    replaceUrls(text, urlObj, linkUrl, regexp) {
      return text.replace(regexp, (m, pre, url, post) => {
        let urlPath = url.replace(/["']/g, '');
        if (linkUrl) {
          urlPath = new URL(urlPath, linkUrl).href;
        }
        urlObj.href = urlPath;
        urlPath = urlObj.href;
        return pre + "'" + urlPath + "'" + post;
      });
    },
  };
  scope.path = path;
});

window.HTMLImports.addModule((scope) => {
  const xhr = {
    async: true,
    ok(request) {
      return (
        (request.status >= 200 && request.status < 300) ||
        request.status === 304 ||
        request.status === 0
      );
    },
    load(url, next, nextContext) {
      const request = new XMLHttpRequest();
      if (scope.flags.debug || scope.flags.bust) {
        url += '?' + Math.random();
      }
      request.open('GET', url, xhr.async);
      request.addEventListener('readystatechange', (e) => {
        if (request.readyState === 4) {
          let redirectedUrl = null;
          try {
            const locationHeader = request.getResponseHeader('Location');
            if (locationHeader) {
              redirectedUrl =
                locationHeader.substr(0, 1) === '/'
                  ? location.origin + locationHeader
                  : locationHeader;
            }
          } catch (e) {
            console.error(e.message);
          }
          next.call(
            nextContext,
            !xhr.ok(request) && request,
            request.response || request.responseText,
            redirectedUrl
          );
        }
      });
      request.send();
      return request;
    },
    loadDocument(url, next, nextContext) {
      this.load(url, next, nextContext).responseType = 'document';
    },
  };
  scope.xhr = xhr;
});

window.HTMLImports.addModule((scope) => {
  const xhr = scope.xhr;
  const flags = scope.flags;

  class Loader {
    constructor(onLoad, onComplete) {
      this.cache = {};
      this.onload = onLoad;
      this.oncomplete = onComplete;
      this.inflight = 0;
      this.pending = {};
    }

    addNodes(nodes) {
      this.inflight += nodes.length;
      for (let i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        this.require(n);
      }
      this.checkDone();
    }

    addNode(node) {
      this.inflight++;
      this.require(node);
      this.checkDone();
    }

    require(elt) {
      const url = elt.src || elt.href;
      elt.__nodeUrl = url;
      if (!this.dedupe(url, elt)) {
        this.fetch(url, elt);
      }
    }

    dedupe(url, elt) {
      if (this.pending[url]) {
        this.pending[url].push(elt);
        return true;
      }
      let resource;
      if (this.cache[url]) {
        this.onload(url, elt, this.cache[url]);
        this.tail();
        return true;
      }
      this.pending[url] = [elt];
      return false;
    }

    fetch(url, elt) {
      flags.load && console.log('fetch', url, elt);
      if (!url) {
        setTimeout(() => {
          this.receive(
            url,
            elt,
            {
              error: 'href must be specified',
            },
            null
          );
        }, 0);
      } else if (url.match(/^data:/)) {
        const pieces = url.split(',');
        const header = pieces[0];
        let body = pieces[1];
        if (header.indexOf(';base64') > -1) {
          body = atob(body);
        } else {
          body = decodeURIComponent(body);
        }
        setTimeout(() => {
          this.receive(url, elt, null, body);
        }, 0);
      } else {
        const receiveXhr = (err, resource, redirectedUrl) => {
          this.receive(url, elt, err, resource, redirectedUrl);
        };
        xhr.load(url, receiveXhr);
      }
    }

    receive(url, elt, err, resource, redirectedUrl) {
      this.cache[url] = resource;
      const $p = this.pending[url];
      for (let i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
        this.onload(url, p, resource, err, redirectedUrl);
        this.tail();
      }
      this.pending[url] = null;
    }

    tail() {
      --this.inflight;
      this.checkDone();
    }

    checkDone() {
      if (!this.inflight) {
        this.oncomplete();
      }
    }
  }

  scope.Loader = Loader;
});

window.HTMLImports.addModule((scope) => {
  class Observer {
    constructor(addCallback) {
      this.addCallback = addCallback;
      this.mo = new MutationObserver(this.handler.bind(this));
    }

    handler(mutations) {
      for (
        let i = 0, l = mutations.length, m;
        i < l && (m = mutations[i]);
        i++
      ) {
        if (m.type === 'childList' && m.addedNodes.length) {
          this.addedNodes(m.addedNodes);
        }
      }
    }

    addedNodes(nodes) {
      if (this.addCallback) {
        this.addCallback(nodes);
      }
      for (
        let i = 0, l = nodes.length, n, loading;
        i < l && (n = nodes[i]);
        i++
      ) {
        if (n.children && n.children.length) {
          this.addedNodes(n.children);
        }
      }
    }

    observe(root) {
      this.mo.observe(root, {
        childList: true,
        subtree: true,
      });
    }
  }

  scope.Observer = Observer;
});

window.HTMLImports.addModule((scope) => {
  const path = scope.path;
  const rootDocument = scope.rootDocument;
  const flags = scope.flags;
  const isIE = scope.isIE;
  const IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
  const IMPORT_SELECTOR = 'link[rel=' + IMPORT_LINK_TYPE + ']';
  const importParser = {
    documentSelectors: IMPORT_SELECTOR,
    importsSelectors: [
      IMPORT_SELECTOR,
      'link[rel=stylesheet]:not([type])',
      'style:not([type])',
      'script:not([type])',
      'script[type="application/javascript"]',
      'script[type="text/javascript"]',
    ].join(','),
    map: {
      link: 'parseLink',
      script: 'parseScript',
      style: 'parseStyle',
    },
    dynamicElements: [],
    parseNext() {
      const next = this.nextToParse();
      if (next) {
        this.parse(next);
      }
    },
    parse(elt) {
      if (this.isParsed(elt)) {
        flags.parse && console.log('[%s] is already parsed', elt.localName);
        return;
      }
      const fn = this[this.map[elt.localName]];
      if (fn) {
        this.markParsing(elt);
        fn.call(this, elt);
      }
    },
    parseDynamic(elt, quiet) {
      this.dynamicElements.push(elt);
      if (!quiet) {
        this.parseNext();
      }
    },
    markParsing(elt) {
      flags.parse && console.log('parsing', elt);
      this.parsingElement = elt;
    },
    markParsingComplete(elt) {
      elt.__importParsed = true;
      this.markDynamicParsingComplete(elt);
      if (elt.__importElement) {
        elt.__importElement.__importParsed = true;
        this.markDynamicParsingComplete(elt.__importElement);
      }
      this.parsingElement = null;
      flags.parse && console.log('completed', elt);
    },
    markDynamicParsingComplete(elt) {
      const i = this.dynamicElements.indexOf(elt);
      if (i >= 0) {
        this.dynamicElements.splice(i, 1);
      }
    },
    parseImport(elt) {
      elt.import = elt.__doc;
      if (window.HTMLImports.__importsParsingHook) {
        window.HTMLImports.__importsParsingHook(elt);
      }
      if (elt.import) {
        elt.import.__importParsed = true;
      }
      this.markParsingComplete(elt);
      if (elt.__resource && !elt.__error) {
        elt.dispatchEvent(
          new CustomEvent('load', {
            bubbles: false,
          })
        );
      } else {
        elt.dispatchEvent(
          new CustomEvent('error', {
            bubbles: false,
          })
        );
      }
      if (elt.__pending) {
        let fn;
        while (elt.__pending.length) {
          fn = elt.__pending.shift();
          if (fn) {
            fn({
              target: elt,
            });
          }
        }
      }
      this.parseNext();
    },
    parseLink(linkElt) {
      if (nodeIsImport(linkElt)) {
        this.parseImport(linkElt);
      } else {
        linkElt.href = linkElt.href;
        this.parseGeneric(linkElt);
      }
    },
    parseStyle(elt) {
      const src = elt;
      elt = cloneStyle(elt);
      src.__appliedElement = elt;
      elt.__importElement = src;
      this.parseGeneric(elt);
    },
    parseGeneric(elt) {
      this.trackElement(elt);
      this.addElementToDocument(elt);
    },
    rootImportForElement(elt) {
      let n = elt;
      while (n.ownerDocument.__importLink) {
        n = n.ownerDocument.__importLink;
      }
      return n;
    },
    addElementToDocument(elt) {
      const port = this.rootImportForElement(elt.__importElement || elt);
      port.parentNode.insertBefore(elt, port);
    },
    trackElement(elt, callback) {
      const self = this;
      const done = (e) => {
        elt.removeEventListener('load', done);
        elt.removeEventListener('error', done);
        if (callback) {
          callback(e);
        }
        self.markParsingComplete(elt);
        self.parseNext();
      };
      elt.addEventListener('load', done);
      elt.addEventListener('error', done);
      if (isIE && elt.localName === 'style') {
        let fakeLoad = false;
        if (elt.textContent.indexOf('@import') == -1) {
          fakeLoad = true;
        } else if (elt.sheet) {
          fakeLoad = true;
          const csr = elt.sheet.cssRules;
          const len = csr ? csr.length : 0;
          for (let i = 0, r; i < len && (r = csr[i]); i++) {
            if (r.type === CSSRule.IMPORT_RULE) {
              fakeLoad = fakeLoad && Boolean(r.styleSheet);
            }
          }
        }
        if (fakeLoad) {
          setTimeout(() => {
            elt.dispatchEvent(
              new CustomEvent('load', {
                bubbles: false,
              })
            );
          });
        }
      }
    },
    parseScript(scriptElt) {
      const script = document.createElement('script');
      script.__importElement = scriptElt;
      script.src = scriptElt.src
        ? scriptElt.src
        : generateScriptDataUrl(scriptElt);
      scope.currentScript = scriptElt;
      this.trackElement(script, (e) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        scope.currentScript = null;
      });
      this.addElementToDocument(script);
    },
    nextToParse() {
      this._mayParse = [];
      return (
        !this.parsingElement &&
        (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic())
      );
    },
    nextToParseInDoc(doc, link) {
      if (doc && this._mayParse.indexOf(doc) < 0) {
        this._mayParse.push(doc);
        const nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));
        for (let i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
          if (!this.isParsed(n)) {
            if (this.hasResource(n)) {
              return nodeIsImport(n) ? this.nextToParseInDoc(n.__doc, n) : n;
            } else {
              return;
            }
          }
        }
      }
      return link;
    },
    nextToParseDynamic() {
      return this.dynamicElements[0];
    },
    parseSelectorsForNode(node) {
      const doc = node.ownerDocument || node;
      return doc === rootDocument
        ? this.documentSelectors
        : this.importsSelectors;
    },
    isParsed(node) {
      return node.__importParsed;
    },
    needsDynamicParsing(elt) {
      return this.dynamicElements.indexOf(elt) >= 0;
    },
    hasResource(node) {
      if (nodeIsImport(node) && node.__doc === undefined) {
        return false;
      }
      return true;
    },
  };
  function nodeIsImport(elt) {
    return elt.localName === 'link' && elt.rel === IMPORT_LINK_TYPE;
  }
  function generateScriptDataUrl(script) {
    const scriptContent = generateScriptContent(script);
    return (
      'data:text/javascript;charset=utf-8,' + encodeURIComponent(scriptContent)
    );
  }
  function generateScriptContent(script) {
    return script.textContent + generateSourceMapHint(script);
  }
  function generateSourceMapHint(script) {
    const owner = script.ownerDocument;
    owner.__importedScripts = owner.__importedScripts || 0;
    const moniker = script.ownerDocument.baseURI;
    const num = owner.__importedScripts ? '-' + owner.__importedScripts : '';
    owner.__importedScripts++;
    return '\n//# sourceURL=' + moniker + num + '.js\n';
  }
  function cloneStyle(style) {
    const clone = style.ownerDocument.createElement('style');
    clone.textContent = style.textContent;
    path.resolveUrlsInStyle(clone);
    return clone;
  }
  scope.parser = importParser;
  scope.IMPORT_SELECTOR = IMPORT_SELECTOR;
});

window.HTMLImports.addModule((scope) => {
  const flags = scope.flags;
  const IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
  const IMPORT_SELECTOR = scope.IMPORT_SELECTOR;
  const rootDocument = scope.rootDocument;
  const Loader = scope.Loader;
  const Observer = scope.Observer;
  const parser = scope.parser;
  const importer = {
    documents: {},
    documentPreloadSelectors: IMPORT_SELECTOR,
    importsPreloadSelectors: [IMPORT_SELECTOR].join(','),
    loadNode(node) {
      importLoader.addNode(node);
    },
    loadSubtree(parent) {
      const nodes = this.marshalNodes(parent);
      importLoader.addNodes(nodes);
    },
    marshalNodes(parent) {
      return parent.querySelectorAll(this.loadSelectorsForNode(parent));
    },
    loadSelectorsForNode(node) {
      const doc = node.ownerDocument || node;
      return doc === rootDocument
        ? this.documentPreloadSelectors
        : this.importsPreloadSelectors;
    },
    loaded(url, elt, resource, err, redirectedUrl) {
      flags.load && console.log('loaded', url, elt);
      elt.__resource = resource;
      elt.__error = err;
      if (isImportLink(elt)) {
        let doc = this.documents[url];
        if (doc === undefined) {
          doc = err ? null : makeDocument(resource, redirectedUrl || url);
          if (doc) {
            doc.__importLink = elt;
            this.bootDocument(doc);
          }
          this.documents[url] = doc;
        }
        elt.__doc = doc;
      }
      parser.parseNext();
    },
    bootDocument(doc) {
      this.loadSubtree(doc);
      this.observer.observe(doc);
      parser.parseNext();
    },
    loadedAll() {
      parser.parseNext();
    },
  };
  var importLoader = new Loader(
    importer.loaded.bind(importer),
    importer.loadedAll.bind(importer)
  );
  importer.observer = new Observer();
  function isImportLink(elt) {
    return isLinkRel(elt, IMPORT_LINK_TYPE);
  }
  function isLinkRel(elt, rel) {
    return elt.localName === 'link' && elt.getAttribute('rel') === rel;
  }
  function hasBaseURIAccessor(doc) {
    return !!Object.getOwnPropertyDescriptor(doc, 'baseURI');
  }
  function makeDocument(resource, url) {
    const doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
    doc._URL = url;
    const base = doc.createElement('base');
    base.setAttribute('href', url);
    if (!doc.baseURI && !hasBaseURIAccessor(doc)) {
      Object.defineProperty(doc, 'baseURI', {
        value: url,
      });
    }
    const meta = doc.createElement('meta');
    meta.setAttribute('charset', 'utf-8');
    doc.head.appendChild(meta);
    doc.head.appendChild(base);
    doc.body.innerHTML = resource;
    if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
      HTMLTemplateElement.bootstrap(doc);
    }
    return doc;
  }
  if (!document.baseURI) {
    const baseURIDescriptor = {
      get() {
        const base = document.querySelector('base');
        return base ? base.href : window.location.href;
      },
      configurable: true,
    };
    Object.defineProperty(document, 'baseURI', baseURIDescriptor);
    Object.defineProperty(rootDocument, 'baseURI', baseURIDescriptor);
  }
  scope.importer = importer;
  scope.importLoader = importLoader;
});

window.HTMLImports.addModule((scope) => {
  const parser = scope.parser;
  const importer = scope.importer;
  const dynamic = {
    added(nodes) {
      let owner, parsed, loading;
      for (let i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        if (!owner) {
          owner = n.ownerDocument;
          parsed = parser.isParsed(owner);
        }
        loading = this.shouldLoadNode(n);
        if (loading) {
          importer.loadNode(n);
        }
        if (this.shouldParseNode(n) && parsed) {
          parser.parseDynamic(n, loading);
        }
      }
    },
    shouldLoadNode(node) {
      return (
        node.nodeType === 1 &&
        matches.call(node, importer.loadSelectorsForNode(node))
      );
    },
    shouldParseNode(node) {
      return (
        node.nodeType === 1 &&
        matches.call(node, parser.parseSelectorsForNode(node))
      );
    },
  };
  importer.observer.addCallback = dynamic.added.bind(dynamic);
  var matches =
    HTMLElement.prototype.matches ||
    HTMLElement.prototype.matchesSelector ||
    HTMLElement.prototype.webkitMatchesSelector ||
    HTMLElement.prototype.mozMatchesSelector ||
    HTMLElement.prototype.msMatchesSelector;
});

((scope) => {
  const initializeModules = scope.initializeModules;
  const isIE = scope.isIE;
  if (scope.useNative) {
    return;
  }
  initializeModules();
  const rootDocument = scope.rootDocument;
  function bootstrap() {
    window.HTMLImports.importer.bootDocument(rootDocument);
  }
  if (
    document.readyState === 'complete' ||
    (document.readyState === 'interactive' && !window.attachEvent)
  ) {
    bootstrap();
  } else {
    document.addEventListener('DOMContentLoaded', bootstrap);
  }
})(window.HTMLImports);
