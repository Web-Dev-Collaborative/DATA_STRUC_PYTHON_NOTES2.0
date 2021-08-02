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
if (typeof WeakMap === "undefined") {
  (() => {
    const defineProperty = Object.defineProperty;
    let counter = Date.now() % 1e9;

    class WeakMap {
      constructor() {
        this.name = "__st" + ((Math.random() * 1e9) >>> 0) + (counter++ + "__");
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

(global => {
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
    window.addEventListener("message", e => {
      if (e.data === sentinel) {
        const queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach(func => {
          func();
        });
      }
    });
    setImmediate = func => {
      setImmediateQueue.push(func);
      window.postMessage(sentinel, "*");
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
    observers.forEach(observer => {
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
    observer.nodes_.forEach(node => {
      const registrations = registrationsTable.get(node);
      if (!registrations) return;
      registrations.forEach(registration => {
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
        node.addEventListener("DOMAttrModified", this, true);
      if (options.characterData)
        node.addEventListener("DOMCharacterDataModified", this, true);
      if (options.childList)
        node.addEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree)
        node.addEventListener("DOMNodeRemoved", this, true);
    }

    removeListeners() {
      this.removeListeners_(this.target);
    }

    removeListeners_(node) {
      const options = this.options;
      if (options.attributes)
        node.removeEventListener("DOMAttrModified", this, true);
      if (options.characterData)
        node.removeEventListener("DOMCharacterDataModified", this, true);
      if (options.childList)
        node.removeEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree)
        node.removeEventListener("DOMNodeRemoved", this, true);
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
        case "DOMAttrModified":
          const name = e.attrName;
          const namespace = e.relatedNode.namespaceURI;
          var target = e.target;
          var record = new getRecord("attributes", target);
          record.attributeName = name;
          record.attributeNamespace = namespace;
          var oldValue =
            e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, options => {
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

        case "DOMCharacterDataModified":
          var target = e.target;
          var record = getRecord("characterData", target);
          var oldValue = e.prevValue;
          forEachAncestorAndObserverEnqueueRecord(target, options => {
            if (!options.characterData) return;
            if (options.characterDataOldValue)
              return getRecordWithOldValue(oldValue);
            return record;
          });
          break;

        case "DOMNodeRemoved":
          this.addTransientObserver(e.target);

        case "DOMNodeInserted":
          const changedNode = e.target;
          let addedNodes, removedNodes;
          if (e.type === "DOMNodeInserted") {
            addedNodes = [changedNode];
            removedNodes = [];
          } else {
            addedNodes = [];
            removedNodes = [changedNode];
          }
          const previousSibling = changedNode.previousSibling;
          const nextSibling = changedNode.nextSibling;
          var record = getRecord("childList", e.target.parentNode);
          record.addedNodes = addedNodes;
          record.removedNodes = removedNodes;
          record.previousSibling = previousSibling;
          record.nextSibling = nextSibling;
          forEachAncestorAndObserverEnqueueRecord(
            e.relatedNode,
            options => {
              if (!options.childList) return;
              return record;
            }
          );
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
