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

window.ShadowDOMPolyfill = {};

((scope) => {
  'use strict';
  const constructorTable = new WeakMap();
  const nativePrototypeTable = new WeakMap();
  const wrappers = Object.create(null);
  function detectEval() {
    if (typeof chrome !== 'undefined' && chrome.app && chrome.app.runtime) {
      return false;
    }
    if (navigator.getDeviceStorage) {
      return false;
    }
    try {
      const f = new Function('return true;');
      return f();
    } catch (ex) {
      return false;
    }
  }
  const hasEval = detectEval();
  function assert(b) {
    if (!b) throw new Error('Assertion failed');
  }
  const defineProperty = Object.defineProperty;
  const getOwnPropertyNames = Object.getOwnPropertyNames;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  function mixin(to, from) {
    const names = getOwnPropertyNames(from);
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      defineProperty(to, name, getOwnPropertyDescriptor(from, name));
    }
    return to;
  }
  function mixinStatics(to, from) {
    const names = getOwnPropertyNames(from);
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      switch (name) {
        case 'arguments':
        case 'caller':
        case 'length':
        case 'name':
        case 'prototype':
        case 'toString':
          continue;
      }
      defineProperty(to, name, getOwnPropertyDescriptor(from, name));
    }
    return to;
  }
  function oneOf(object, propertyNames) {
    for (let i = 0; i < propertyNames.length; i++) {
      if (propertyNames[i] in object) return propertyNames[i];
    }
  }
  const nonEnumerableDataDescriptor = {
    value: undefined,
    configurable: true,
    enumerable: false,
    writable: true,
  };
  function defineNonEnumerableDataProperty(object, name, value) {
    nonEnumerableDataDescriptor.value = value;
    defineProperty(object, name, nonEnumerableDataDescriptor);
  }
  getOwnPropertyNames(window);
  function getWrapperConstructor(node, opt_instance) {
    let nativePrototype = node.__proto__ || Object.getPrototypeOf(node);
    if (isFirefox) {
      try {
        getOwnPropertyNames(nativePrototype);
      } catch (error) {
        nativePrototype = nativePrototype.__proto__;
      }
    }
    const wrapperConstructor = constructorTable.get(nativePrototype);
    if (wrapperConstructor) return wrapperConstructor;
    const parentWrapperConstructor = getWrapperConstructor(nativePrototype);
    const GeneratedWrapper = createWrapperConstructor(parentWrapperConstructor);
    registerInternal(nativePrototype, GeneratedWrapper, opt_instance);
    return GeneratedWrapper;
  }
  function addForwardingProperties(nativePrototype, wrapperPrototype) {
    installProperty(nativePrototype, wrapperPrototype, true);
  }
  function registerInstanceProperties(wrapperPrototype, instanceObject) {
    installProperty(instanceObject, wrapperPrototype, false);
  }
  var isFirefox = /Firefox/.test(navigator.userAgent);
  const dummyDescriptor = {
    get() {},
    set(v) {},
    configurable: true,
    enumerable: true,
  };
  function isEventHandlerName(name) {
    return /^on[a-z]+$/.test(name);
  }
  function isIdentifierName(name) {
    return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(name);
  }
  function getGetter(name) {
    return hasEval && isIdentifierName(name)
      ? new Function('return this.__impl4cf1e782hg__.' + name)
      : function () {
          return this.__impl4cf1e782hg__[name];
        };
  }
  function getSetter(name) {
    return hasEval && isIdentifierName(name)
      ? new Function('v', 'this.__impl4cf1e782hg__.' + name + ' = v')
      : function (v) {
          this.__impl4cf1e782hg__[name] = v;
        };
  }
  function getMethod(name) {
    return hasEval && isIdentifierName(name)
      ? new Function(
          'return this.__impl4cf1e782hg__.' +
            name +
            '.apply(this.__impl4cf1e782hg__, arguments)'
        )
      : function () {
          return this.__impl4cf1e782hg__[name].apply(
            this.__impl4cf1e782hg__,
            arguments
          );
        };
  }
  function getDescriptor(source, name) {
    try {
      if (source === window && name === 'showModalDialog') {
        return dummyDescriptor;
      }
      return Object.getOwnPropertyDescriptor(source, name);
    } catch (ex) {
      return dummyDescriptor;
    }
  }
  const isBrokenSafari = (() => {
    const descr = Object.getOwnPropertyDescriptor(Node.prototype, 'nodeType');
    return descr && !descr.get && !descr.set;
  })();
  function installProperty(source, target, allowMethod, opt_blacklist) {
    const names = getOwnPropertyNames(source);
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (name === 'polymerBlackList_') continue;
      if (name in target) continue;
      if (source.polymerBlackList_ && source.polymerBlackList_[name]) continue;
      if (isFirefox) {
        source.__lookupGetter__(name);
      }
      const descriptor = getDescriptor(source, name);
      let getter, setter;
      if (typeof descriptor.value === 'function') {
        if (allowMethod) {
          target[name] = getMethod(name);
        }
        continue;
      }
      const isEvent = isEventHandlerName(name);
      if (isEvent) getter = scope.getEventHandlerGetter(name);
      else getter = getGetter(name);
      if (descriptor.writable || descriptor.set || isBrokenSafari) {
        if (isEvent) setter = scope.getEventHandlerSetter(name);
        else setter = getSetter(name);
      }
      const configurable = isBrokenSafari || descriptor.configurable;
      defineProperty(target, name, {
        get: getter,
        set: setter,
        configurable: configurable,
        enumerable: descriptor.enumerable,
      });
    }
  }
  function register(nativeConstructor, wrapperConstructor, opt_instance) {
    if (nativeConstructor == null) {
      return;
    }
    const nativePrototype = nativeConstructor.prototype;
    registerInternal(nativePrototype, wrapperConstructor, opt_instance);
    mixinStatics(wrapperConstructor, nativeConstructor);
  }
  function registerInternal(nativePrototype, wrapperConstructor, opt_instance) {
    const wrapperPrototype = wrapperConstructor.prototype;
    assert(constructorTable.get(nativePrototype) === undefined);
    constructorTable.set(nativePrototype, wrapperConstructor);
    nativePrototypeTable.set(wrapperPrototype, nativePrototype);
    addForwardingProperties(nativePrototype, wrapperPrototype);
    if (opt_instance)
      registerInstanceProperties(wrapperPrototype, opt_instance);
    defineNonEnumerableDataProperty(
      wrapperPrototype,
      'constructor',
      wrapperConstructor
    );
    wrapperConstructor.prototype = wrapperPrototype;
  }
  function isWrapperFor(wrapperConstructor, nativeConstructor) {
    return (
      constructorTable.get(nativeConstructor.prototype) === wrapperConstructor
    );
  }
  function registerObject(object) {
    const nativePrototype = Object.getPrototypeOf(object);
    const superWrapperConstructor = getWrapperConstructor(nativePrototype);
    const GeneratedWrapper = createWrapperConstructor(superWrapperConstructor);
    registerInternal(nativePrototype, GeneratedWrapper, object);
    return GeneratedWrapper;
  }
  function createWrapperConstructor(superWrapperConstructor) {
    function GeneratedWrapper(node) {
      superWrapperConstructor.call(this, node);
    }
    const p = Object.create(superWrapperConstructor.prototype);
    p.constructor = GeneratedWrapper;
    GeneratedWrapper.prototype = p;
    return GeneratedWrapper;
  }
  function isWrapper(object) {
    return object && object.__impl4cf1e782hg__;
  }
  function isNative(object) {
    return !isWrapper(object);
  }
  function wrap(impl) {
    if (impl === null) return null;
    assert(isNative(impl));
    const wrapper = impl.__wrapper8e3dd93a60__;
    if (wrapper != null) {
      return wrapper;
    }
    return (impl.__wrapper8e3dd93a60__ = new (getWrapperConstructor(
      impl,
      impl
    ))(impl));
  }
  function unwrap(wrapper) {
    if (wrapper === null) return null;
    assert(isWrapper(wrapper));
    return wrapper.__impl4cf1e782hg__;
  }
  function unsafeUnwrap(wrapper) {
    return wrapper.__impl4cf1e782hg__;
  }
  function setWrapper(impl, wrapper) {
    wrapper.__impl4cf1e782hg__ = impl;
    impl.__wrapper8e3dd93a60__ = wrapper;
  }
  function unwrapIfNeeded(object) {
    return object && isWrapper(object) ? unwrap(object) : object;
  }
  function wrapIfNeeded(object) {
    return object && !isWrapper(object) ? wrap(object) : object;
  }
  function rewrap(node, wrapper) {
    if (wrapper === null) return;
    assert(isNative(node));
    assert(wrapper === undefined || isWrapper(wrapper));
    node.__wrapper8e3dd93a60__ = wrapper;
  }
  const getterDescriptor = {
    get: undefined,
    configurable: true,
    enumerable: true,
  };
  function defineGetter(constructor, name, getter) {
    getterDescriptor.get = getter;
    defineProperty(constructor.prototype, name, getterDescriptor);
  }
  function defineWrapGetter(constructor, name) {
    defineGetter(constructor, name, function () {
      return wrap(this.__impl4cf1e782hg__[name]);
    });
  }
  function forwardMethodsToWrapper(constructors, names) {
    constructors.forEach((constructor) => {
      names.forEach((name) => {
        constructor.prototype[name] = function () {
          const w = wrapIfNeeded(this);
          return w[name].apply(w, arguments);
        };
      });
    });
  }
  scope.addForwardingProperties = addForwardingProperties;
  scope.assert = assert;
  scope.constructorTable = constructorTable;
  scope.defineGetter = defineGetter;
  scope.defineWrapGetter = defineWrapGetter;
  scope.forwardMethodsToWrapper = forwardMethodsToWrapper;
  scope.isIdentifierName = isIdentifierName;
  scope.isWrapper = isWrapper;
  scope.isWrapperFor = isWrapperFor;
  scope.mixin = mixin;
  scope.nativePrototypeTable = nativePrototypeTable;
  scope.oneOf = oneOf;
  scope.registerObject = registerObject;
  scope.registerWrapper = register;
  scope.rewrap = rewrap;
  scope.setWrapper = setWrapper;
  scope.unsafeUnwrap = unsafeUnwrap;
  scope.unwrap = unwrap;
  scope.unwrapIfNeeded = unwrapIfNeeded;
  scope.wrap = wrap;
  scope.wrapIfNeeded = wrapIfNeeded;
  scope.wrappers = wrappers;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount,
    };
  }
  const EDIT_LEAVE = 0;
  const EDIT_UPDATE = 1;
  const EDIT_ADD = 2;
  const EDIT_DELETE = 3;

  class ArraySplice {
    calcEditDistances(
      current,
      currentStart,
      currentEnd,
      old,
      oldStart,
      oldEnd
    ) {
      const rowCount = oldEnd - oldStart + 1;
      const columnCount = currentEnd - currentStart + 1;
      const distances = new Array(rowCount);
      for (var i = 0; i < rowCount; i++) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
      }
      for (var j = 0; j < columnCount; j++) distances[0][j] = j;
      for (var i = 1; i < rowCount; i++) {
        for (var j = 1; j < columnCount; j++) {
          if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
            distances[i][j] = distances[i - 1][j - 1];
          else {
            const north = distances[i - 1][j] + 1;
            const west = distances[i][j - 1] + 1;
            distances[i][j] = north < west ? north : west;
          }
        }
      }
      return distances;
    }

    spliceOperationsFromEditDistances(distances) {
      let i = distances.length - 1;
      let j = distances[0].length - 1;
      let current = distances[i][j];
      const edits = [];
      while (i > 0 || j > 0) {
        if (i == 0) {
          edits.push(EDIT_ADD);
          j--;
          continue;
        }
        if (j == 0) {
          edits.push(EDIT_DELETE);
          i--;
          continue;
        }
        const northWest = distances[i - 1][j - 1];
        const west = distances[i - 1][j];
        const north = distances[i][j - 1];
        let min;
        if (west < north) min = west < northWest ? west : northWest;
        else min = north < northWest ? north : northWest;
        if (min == northWest) {
          if (northWest == current) {
            edits.push(EDIT_LEAVE);
          } else {
            edits.push(EDIT_UPDATE);
            current = northWest;
          }
          i--;
          j--;
        } else if (min == west) {
          edits.push(EDIT_DELETE);
          i--;
          current = west;
        } else {
          edits.push(EDIT_ADD);
          j--;
          current = north;
        }
      }
      edits.reverse();
      return edits;
    }

    calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
      let prefixCount = 0;
      let suffixCount = 0;
      const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
      if (currentStart == 0 && oldStart == 0)
        prefixCount = this.sharedPrefix(current, old, minLength);
      if (currentEnd == current.length && oldEnd == old.length)
        suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
      currentStart += prefixCount;
      oldStart += prefixCount;
      currentEnd -= suffixCount;
      oldEnd -= suffixCount;
      if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];
      if (currentStart == currentEnd) {
        var splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd) splice.removed.push(old[oldStart++]);
        return [splice];
      } else if (oldStart == oldEnd)
        return [newSplice(currentStart, [], currentEnd - currentStart)];
      const ops = this.spliceOperationsFromEditDistances(
        this.calcEditDistances(
          current,
          currentStart,
          currentEnd,
          old,
          oldStart,
          oldEnd
        )
      );
      var splice = undefined;
      const splices = [];
      let index = currentStart;
      let oldIndex = oldStart;
      for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
          case EDIT_LEAVE:
            if (splice) {
              splices.push(splice);
              splice = undefined;
            }
            index++;
            oldIndex++;
            break;

          case EDIT_UPDATE:
            if (!splice) splice = newSplice(index, [], 0);
            splice.addedCount++;
            index++;
            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;

          case EDIT_ADD:
            if (!splice) splice = newSplice(index, [], 0);
            splice.addedCount++;
            index++;
            break;

          case EDIT_DELETE:
            if (!splice) splice = newSplice(index, [], 0);
            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
        }
      }
      if (splice) {
        splices.push(splice);
      }
      return splices;
    }

    sharedPrefix(current, old, searchLength) {
      for (let i = 0; i < searchLength; i++)
        if (!this.equals(current[i], old[i])) return i;
      return searchLength;
    }

    sharedSuffix(current, old, searchLength) {
      let index1 = current.length;
      let index2 = old.length;
      let count = 0;
      while (
        count < searchLength &&
        this.equals(current[--index1], old[--index2])
      )
        count++;
      return count;
    }

    calculateSplices(current, previous) {
      return this.calcSplices(
        current,
        0,
        current.length,
        previous,
        0,
        previous.length
      );
    }

    equals(currentValue, previousValue) {
      return currentValue === previousValue;
    }
  }

  scope.ArraySplice = ArraySplice;
})(window.ShadowDOMPolyfill);

((context) => {
  'use strict';
  const OriginalMutationObserver = window.MutationObserver;
  let callbacks = [];
  let pending = false;
  let timerFunc;
  function handle() {
    pending = false;
    const copies = callbacks.slice(0);
    callbacks = [];
    for (let i = 0; i < copies.length; i++) {
      (0, copies[i])();
    }
  }
  if (OriginalMutationObserver) {
    let counter = 1;
    const observer = new OriginalMutationObserver(handle);
    const textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true,
    });
    timerFunc = () => {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    timerFunc = window.setTimeout;
  }
  function setEndOfMicrotask(func) {
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(handle, 0);
  }
  context.setEndOfMicrotask = setEndOfMicrotask;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const setEndOfMicrotask = scope.setEndOfMicrotask;
  const wrapIfNeeded = scope.wrapIfNeeded;
  const wrappers = scope.wrappers;
  const registrationsTable = new WeakMap();
  let globalMutationObservers = [];
  let isScheduled = false;
  function scheduleCallback(observer) {
    if (observer.scheduled_) return;
    observer.scheduled_ = true;
    globalMutationObservers.push(observer);
    if (isScheduled) return;
    setEndOfMicrotask(notifyObservers);
    isScheduled = true;
  }
  function notifyObservers() {
    isScheduled = false;
    while (globalMutationObservers.length) {
      const notifyList = globalMutationObservers;
      globalMutationObservers = [];
      notifyList.sort((x, y) => {
        return x.uid_ - y.uid_;
      });
      for (let i = 0; i < notifyList.length; i++) {
        const mo = notifyList[i];
        mo.scheduled_ = false;
        const queue = mo.takeRecords();
        removeTransientObserversFor(mo);
        if (queue.length) {
          mo.callback_(queue, mo);
        }
      }
    }
  }
  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = new wrappers.NodeList();
    this.removedNodes = new wrappers.NodeList();
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }
  function registerTransientObservers(ancestor, node) {
    for (; ancestor; ancestor = ancestor.parentNode) {
      const registrations = registrationsTable.get(ancestor);
      if (!registrations) continue;
      for (let i = 0; i < registrations.length; i++) {
        const registration = registrations[i];
        if (registration.options.subtree)
          registration.addTransientObserver(node);
      }
    }
  }
  function removeTransientObserversFor(observer) {
    for (let i = 0; i < observer.nodes_.length; i++) {
      const node = observer.nodes_[i];
      const registrations = registrationsTable.get(node);
      if (!registrations) return;
      for (let j = 0; j < registrations.length; j++) {
        const registration = registrations[j];
        if (registration.observer === observer)
          registration.removeTransientObservers();
      }
    }
  }
  function enqueueMutation(target, type, data) {
    const interestedObservers = Object.create(null);
    const associatedStrings = Object.create(null);
    for (let node = target; node; node = node.parentNode) {
      const registrations = registrationsTable.get(node);
      if (!registrations) continue;
      for (let j = 0; j < registrations.length; j++) {
        const registration = registrations[j];
        const options = registration.options;
        if (node !== target && !options.subtree) continue;
        if (type === 'attributes' && !options.attributes) continue;
        if (
          type === 'attributes' &&
          options.attributeFilter &&
          (data.namespace !== null ||
            options.attributeFilter.indexOf(data.name) === -1)
        ) {
          continue;
        }
        if (type === 'characterData' && !options.characterData) continue;
        if (type === 'childList' && !options.childList) continue;
        var observer = registration.observer;
        interestedObservers[observer.uid_] = observer;
        if (
          (type === 'attributes' && options.attributeOldValue) ||
          (type === 'characterData' && options.characterDataOldValue)
        ) {
          associatedStrings[observer.uid_] = data.oldValue;
        }
      }
    }
    for (const uid in interestedObservers) {
      var observer = interestedObservers[uid];
      const record = new MutationRecord(type, target);
      if ('name' in data && 'namespace' in data) {
        record.attributeName = data.name;
        record.attributeNamespace = data.namespace;
      }
      if (data.addedNodes) record.addedNodes = data.addedNodes;
      if (data.removedNodes) record.removedNodes = data.removedNodes;
      if (data.previousSibling) record.previousSibling = data.previousSibling;
      if (data.nextSibling) record.nextSibling = data.nextSibling;
      if (associatedStrings[uid] !== undefined)
        record.oldValue = associatedStrings[uid];
      scheduleCallback(observer);
      observer.records_.push(record);
    }
  }
  const slice = Array.prototype.slice;
  function MutationObserverOptions(options) {
    this.childList = !!options.childList;
    this.subtree = !!options.subtree;
    if (
      !('attributes' in options) &&
      ('attributeOldValue' in options || 'attributeFilter' in options)
    ) {
      this.attributes = true;
    } else {
      this.attributes = !!options.attributes;
    }
    if ('characterDataOldValue' in options && !('characterData' in options))
      this.characterData = true;
    else this.characterData = !!options.characterData;
    if (
      (!this.attributes &&
        (options.attributeOldValue || 'attributeFilter' in options)) ||
      (!this.characterData && options.characterDataOldValue)
    ) {
      throw new TypeError();
    }
    this.characterData = !!options.characterData;
    this.attributeOldValue = !!options.attributeOldValue;
    this.characterDataOldValue = !!options.characterDataOldValue;
    if ('attributeFilter' in options) {
      if (
        options.attributeFilter == null ||
        typeof options.attributeFilter !== 'object'
      ) {
        throw new TypeError();
      }
      this.attributeFilter = slice.call(options.attributeFilter);
    } else {
      this.attributeFilter = null;
    }
  }
  let uidCounter = 0;
  function MutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
    this.scheduled_ = false;
  }
  MutationObserver.prototype = {
    constructor: MutationObserver,
    observe(target, options) {
      target = wrapIfNeeded(target);
      const newOptions = new MutationObserverOptions(options);
      let registration;
      let registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, (registrations = []));
      for (let i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeTransientObservers();
          registration.options = newOptions;
        }
      }
      if (!registration) {
        registration = new Registration(this, target, newOptions);
        registrations.push(registration);
        this.nodes_.push(target);
      }
    },
    disconnect() {
      this.nodes_.forEach(function (node) {
        const registrations = registrationsTable.get(node);
        for (let i = 0; i < registrations.length; i++) {
          const registration = registrations[i];
          if (registration.observer === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    },
    takeRecords() {
      const copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    },
  };

  class Registration {
    constructor(observer, target, options) {
      this.observer = observer;
      this.target = target;
      this.options = options;
      this.transientObservedNodes = [];
    }

    addTransientObserver(node) {
      if (node === this.target) return;
      scheduleCallback(this.observer);
      this.transientObservedNodes.push(node);
      let registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, (registrations = []));
      registrations.push(this);
    }

    removeTransientObservers() {
      const transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      for (let i = 0; i < transientObservedNodes.length; i++) {
        const node = transientObservedNodes[i];
        const registrations = registrationsTable.get(node);
        for (let j = 0; j < registrations.length; j++) {
          if (registrations[j] === this) {
            registrations.splice(j, 1);
            break;
          }
        }
      }
    }
  }

  scope.enqueueMutation = enqueueMutation;
  scope.registerTransientObservers = registerTransientObservers;
  scope.wrappers.MutationObserver = MutationObserver;
  scope.wrappers.MutationRecord = MutationRecord;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';

  class TreeScope {
    constructor(root, parent) {
      this.root = root;
      this.parent = parent;
    }

    get renderer() {
      if (this.root instanceof scope.wrappers.ShadowRoot) {
        return scope.getRendererForHost(this.root.host);
      }
      return null;
    }

    contains(treeScope) {
      for (; treeScope; treeScope = treeScope.parent) {
        if (treeScope === this) return true;
      }
      return false;
    }
  }

  function setTreeScope(node, treeScope) {
    if (node.treeScope_ !== treeScope) {
      node.treeScope_ = treeScope;
      for (let sr = node.shadowRoot; sr; sr = sr.olderShadowRoot) {
        sr.treeScope_.parent = treeScope;
      }
      for (let child = node.firstChild; child; child = child.nextSibling) {
        setTreeScope(child, treeScope);
      }
    }
  }
  function getTreeScope(node) {
    if (node instanceof scope.wrappers.Window) {
      debugger;
    }
    if (node.treeScope_) return node.treeScope_;
    const parent = node.parentNode;
    let treeScope;
    if (parent) treeScope = getTreeScope(parent);
    else treeScope = new TreeScope(node, null);
    return (node.treeScope_ = treeScope);
  }
  scope.TreeScope = TreeScope;
  scope.getTreeScope = getTreeScope;
  scope.setTreeScope = setTreeScope;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
  const getTreeScope = scope.getTreeScope;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const wrappers = scope.wrappers;
  const wrappedFuns = new WeakMap();
  const listenersTable = new WeakMap();
  const handledEventsTable = new WeakMap();
  const currentlyDispatchingEvents = new WeakMap();
  const targetTable = new WeakMap();
  const currentTargetTable = new WeakMap();
  const relatedTargetTable = new WeakMap();
  const eventPhaseTable = new WeakMap();
  const stopPropagationTable = new WeakMap();
  const stopImmediatePropagationTable = new WeakMap();
  const eventHandlersTable = new WeakMap();
  const eventPathTable = new WeakMap();
  function isShadowRoot(node) {
    return node instanceof wrappers.ShadowRoot;
  }
  function rootOfNode(node) {
    return getTreeScope(node).root;
  }
  function getEventPath(node, event) {
    const path = [];
    let current = node;
    path.push(current);
    while (current) {
      const destinationInsertionPoints = getDestinationInsertionPoints(current);
      if (destinationInsertionPoints && destinationInsertionPoints.length > 0) {
        for (let i = 0; i < destinationInsertionPoints.length; i++) {
          const insertionPoint = destinationInsertionPoints[i];
          if (isShadowInsertionPoint(insertionPoint)) {
            const shadowRoot = rootOfNode(insertionPoint);
            const olderShadowRoot = shadowRoot.olderShadowRoot;
            if (olderShadowRoot) path.push(olderShadowRoot);
          }
          path.push(insertionPoint);
        }
        current =
          destinationInsertionPoints[destinationInsertionPoints.length - 1];
      } else {
        if (isShadowRoot(current)) {
          if (inSameTree(node, current) && eventMustBeStopped(event)) {
            break;
          }
          current = current.host;
          path.push(current);
        } else {
          current = current.parentNode;
          if (current) path.push(current);
        }
      }
    }
    return path;
  }
  function eventMustBeStopped(event) {
    if (!event) return false;
    switch (event.type) {
      case 'abort':
      case 'error':
      case 'select':
      case 'change':
      case 'load':
      case 'reset':
      case 'resize':
      case 'scroll':
      case 'selectstart':
        return true;
    }
    return false;
  }
  function isShadowInsertionPoint(node) {
    return node instanceof HTMLShadowElement;
  }
  function getDestinationInsertionPoints(node) {
    return scope.getDestinationInsertionPoints(node);
  }
  function eventRetargetting(path, currentTarget) {
    if (path.length === 0) return currentTarget;
    if (currentTarget instanceof wrappers.Window)
      currentTarget = currentTarget.document;
    const currentTargetTree = getTreeScope(currentTarget);
    const originalTarget = path[0];
    const originalTargetTree = getTreeScope(originalTarget);
    const relativeTargetTree = lowestCommonInclusiveAncestor(
      currentTargetTree,
      originalTargetTree
    );
    for (let i = 0; i < path.length; i++) {
      const node = path[i];
      if (getTreeScope(node) === relativeTargetTree) return node;
    }
    return path[path.length - 1];
  }
  function getTreeScopeAncestors(treeScope) {
    const ancestors = [];
    for (; treeScope; treeScope = treeScope.parent) {
      ancestors.push(treeScope);
    }
    return ancestors;
  }
  function lowestCommonInclusiveAncestor(tsA, tsB) {
    const ancestorsA = getTreeScopeAncestors(tsA);
    const ancestorsB = getTreeScopeAncestors(tsB);
    let result = null;
    while (ancestorsA.length > 0 && ancestorsB.length > 0) {
      const a = ancestorsA.pop();
      const b = ancestorsB.pop();
      if (a === b) result = a;
      else break;
    }
    return result;
  }
  function getTreeScopeRoot(ts) {
    if (!ts.parent) return ts;
    return getTreeScopeRoot(ts.parent);
  }
  function relatedTargetResolution(event, currentTarget, relatedTarget) {
    if (currentTarget instanceof wrappers.Window)
      currentTarget = currentTarget.document;
    const currentTargetTree = getTreeScope(currentTarget);
    const relatedTargetTree = getTreeScope(relatedTarget);
    const relatedTargetEventPath = getEventPath(relatedTarget, event);
    var lowestCommonAncestorTree;
    var lowestCommonAncestorTree = lowestCommonInclusiveAncestor(
      currentTargetTree,
      relatedTargetTree
    );
    if (!lowestCommonAncestorTree)
      lowestCommonAncestorTree = relatedTargetTree.root;
    for (
      let commonAncestorTree = lowestCommonAncestorTree;
      commonAncestorTree;
      commonAncestorTree = commonAncestorTree.parent
    ) {
      let adjustedRelatedTarget;
      for (let i = 0; i < relatedTargetEventPath.length; i++) {
        const node = relatedTargetEventPath[i];
        if (getTreeScope(node) === commonAncestorTree) return node;
      }
    }
    return null;
  }
  function inSameTree(a, b) {
    return getTreeScope(a) === getTreeScope(b);
  }
  const NONE = 0;
  const CAPTURING_PHASE = 1;
  const AT_TARGET = 2;
  const BUBBLING_PHASE = 3;
  let pendingError;
  function dispatchOriginalEvent(originalEvent) {
    if (handledEventsTable.get(originalEvent)) return;
    handledEventsTable.set(originalEvent, true);
    dispatchEvent(wrap(originalEvent), wrap(originalEvent.target));
    if (pendingError) {
      const err = pendingError;
      pendingError = null;
      throw err;
    }
  }
  function isLoadLikeEvent(event) {
    switch (event.type) {
      case 'load':
      case 'beforeunload':
      case 'unload':
        return true;
    }
    return false;
  }
  function dispatchEvent(event, originalWrapperTarget) {
    if (currentlyDispatchingEvents.get(event))
      throw new Error('InvalidStateError');
    currentlyDispatchingEvents.set(event, true);
    scope.renderAllPending();
    let eventPath;
    let overrideTarget;
    let win;
    if (isLoadLikeEvent(event) && !event.bubbles) {
      var doc = originalWrapperTarget;
      if (doc instanceof wrappers.Document && (win = doc.defaultView)) {
        overrideTarget = doc;
        eventPath = [];
      }
    }
    if (!eventPath) {
      if (originalWrapperTarget instanceof wrappers.Window) {
        win = originalWrapperTarget;
        eventPath = [];
      } else {
        eventPath = getEventPath(originalWrapperTarget, event);
        if (!isLoadLikeEvent(event)) {
          var doc = eventPath[eventPath.length - 1];
          if (doc instanceof wrappers.Document) win = doc.defaultView;
        }
      }
    }
    eventPathTable.set(event, eventPath);
    if (dispatchCapturing(event, eventPath, win, overrideTarget)) {
      if (dispatchAtTarget(event, eventPath, win, overrideTarget)) {
        dispatchBubbling(event, eventPath, win, overrideTarget);
      }
    }
    eventPhaseTable.set(event, NONE);
    currentTargetTable.delete(event, null);
    currentlyDispatchingEvents.delete(event);
    return event.defaultPrevented;
  }
  function dispatchCapturing(event, eventPath, win, overrideTarget) {
    const phase = CAPTURING_PHASE;
    if (win) {
      if (!invoke(win, event, phase, eventPath, overrideTarget)) return false;
    }
    for (let i = eventPath.length - 1; i > 0; i--) {
      if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget))
        return false;
    }
    return true;
  }
  function dispatchAtTarget(event, eventPath, win, overrideTarget) {
    const phase = AT_TARGET;
    const currentTarget = eventPath[0] || win;
    return invoke(currentTarget, event, phase, eventPath, overrideTarget);
  }
  function dispatchBubbling(event, eventPath, win, overrideTarget) {
    const phase = BUBBLING_PHASE;
    for (let i = 1; i < eventPath.length; i++) {
      if (!invoke(eventPath[i], event, phase, eventPath, overrideTarget))
        return;
    }
    if (win && eventPath.length > 0) {
      invoke(win, event, phase, eventPath, overrideTarget);
    }
  }
  function invoke(currentTarget, event, phase, eventPath, overrideTarget) {
    const listeners = listenersTable.get(currentTarget);
    if (!listeners) return true;
    const target =
      overrideTarget || eventRetargetting(eventPath, currentTarget);
    if (target === currentTarget) {
      if (phase === CAPTURING_PHASE) return true;
      if (phase === BUBBLING_PHASE) phase = AT_TARGET;
    } else if (phase === BUBBLING_PHASE && !event.bubbles) {
      return true;
    }
    if ('relatedTarget' in event) {
      const originalEvent = unwrap(event);
      const unwrappedRelatedTarget = originalEvent.relatedTarget;
      if (unwrappedRelatedTarget) {
        if (
          unwrappedRelatedTarget instanceof Object &&
          unwrappedRelatedTarget.addEventListener
        ) {
          const relatedTarget = wrap(unwrappedRelatedTarget);
          var adjusted = relatedTargetResolution(
            event,
            currentTarget,
            relatedTarget
          );
          if (adjusted === target) return true;
        } else {
          adjusted = null;
        }
        relatedTargetTable.set(event, adjusted);
      }
    }
    eventPhaseTable.set(event, phase);
    const type = event.type;
    let anyRemoved = false;
    targetTable.set(event, target);
    currentTargetTable.set(event, currentTarget);
    listeners.depth++;
    for (var i = 0, len = listeners.length; i < len; i++) {
      const listener = listeners[i];
      if (listener.removed) {
        anyRemoved = true;
        continue;
      }
      if (
        listener.type !== type ||
        (!listener.capture && phase === CAPTURING_PHASE) ||
        (listener.capture && phase === BUBBLING_PHASE)
      ) {
        continue;
      }
      try {
        if (typeof listener.handler === 'function')
          listener.handler.call(currentTarget, event);
        else listener.handler.handleEvent(event);
        if (stopImmediatePropagationTable.get(event)) return false;
      } catch (ex) {
        if (!pendingError) pendingError = ex;
      }
    }
    listeners.depth--;
    if (anyRemoved && listeners.depth === 0) {
      const copy = listeners.slice();
      listeners.length = 0;
      for (var i = 0; i < copy.length; i++) {
        if (!copy[i].removed) listeners.push(copy[i]);
      }
    }
    return !stopPropagationTable.get(event);
  }

  class Listener {
    constructor(type, handler, capture) {
      this.type = type;
      this.handler = handler;
      this.capture = Boolean(capture);
    }

    equals(that) {
      return (
        this.handler === that.handler &&
        this.type === that.type &&
        this.capture === that.capture
      );
    }

    get removed() {
      return this.handler === null;
    }

    remove() {
      this.handler = null;
    }
  }

  const OriginalEvent = window.Event;
  OriginalEvent.prototype.polymerBlackList_ = {
    returnValue: true,
    keyLocation: true,
  };

  class Event {
    constructor(type, options) {
      if (type instanceof OriginalEvent) {
        const impl = type;
        if (
          !OriginalBeforeUnloadEvent &&
          impl.type === 'beforeunload' &&
          !(this instanceof BeforeUnloadEvent)
        ) {
          return new BeforeUnloadEvent(impl);
        }
        setWrapper(impl, this);
      } else {
        return wrap(constructEvent(OriginalEvent, 'Event', type, options));
      }
    }

    get target() {
      return targetTable.get(this);
    }

    get currentTarget() {
      return currentTargetTable.get(this);
    }

    get eventPhase() {
      return eventPhaseTable.get(this);
    }

    get path() {
      const eventPath = eventPathTable.get(this);
      if (!eventPath) return [];
      return eventPath.slice();
    }

    stopPropagation() {
      stopPropagationTable.set(this, true);
    }

    stopImmediatePropagation() {
      stopPropagationTable.set(this, true);
      stopImmediatePropagationTable.set(this, true);
    }

    preventDefault() {
      if (!this.cancelable) return;
      unsafeUnwrap(this).preventDefault();
      Object.defineProperty(this, 'defaultPrevented', {
        get() {
          return true;
        },
        configurable: true,
      });
    }
  }

  const supportsDefaultPrevented = (() => {
    const e = document.createEvent('Event');
    e.initEvent('test', true, true);
    e.preventDefault();
    return e.defaultPrevented;
  })();
  if (!supportsDefaultPrevented) {
  }
  registerWrapper(OriginalEvent, Event, document.createEvent('Event'));
  function unwrapOptions(options) {
    if (!options || !options.relatedTarget) return options;
    return Object.create(options, {
      relatedTarget: {
        value: unwrap(options.relatedTarget),
      },
    });
  }
  function registerGenericEvent(name, SuperEvent, prototype) {
    const OriginalEvent = window[name];

    class GenericEvent extends SuperEvent {
      constructor(type, options) {
        if (type instanceof OriginalEvent) setWrapper(type, this);
        else return wrap(constructEvent(OriginalEvent, name, type, options));
      }
    }

    if (prototype) mixin(GenericEvent.prototype, prototype);
    if (OriginalEvent) {
      try {
        registerWrapper(OriginalEvent, GenericEvent, new OriginalEvent('temp'));
      } catch (ex) {
        registerWrapper(
          OriginalEvent,
          GenericEvent,
          document.createEvent(name)
        );
      }
    }
    return GenericEvent;
  }
  const UIEvent = registerGenericEvent('UIEvent', Event);
  const CustomEvent = registerGenericEvent('CustomEvent', Event);
  const relatedTargetProto = {
    get relatedTarget() {
      const relatedTarget = relatedTargetTable.get(this);
      if (relatedTarget !== undefined) return relatedTarget;
      return wrap(unwrap(this).relatedTarget);
    },
  };
  function getInitFunction(name, relatedTargetIndex) {
    return function () {
      arguments[relatedTargetIndex] = unwrap(arguments[relatedTargetIndex]);
      const impl = unwrap(this);
      impl[name].apply(impl, arguments);
    };
  }
  const mouseEventProto = mixin(
    {
      initMouseEvent: getInitFunction('initMouseEvent', 14),
    },
    relatedTargetProto
  );
  const focusEventProto = mixin(
    {
      initFocusEvent: getInitFunction('initFocusEvent', 5),
    },
    relatedTargetProto
  );
  const MouseEvent = registerGenericEvent(
    'MouseEvent',
    UIEvent,
    mouseEventProto
  );
  const FocusEvent = registerGenericEvent(
    'FocusEvent',
    UIEvent,
    focusEventProto
  );
  const defaultInitDicts = Object.create(null);
  const supportsEventConstructors = (() => {
    try {
      new window.FocusEvent('focus');
    } catch (ex) {
      return false;
    }
    return true;
  })();
  function constructEvent(OriginalEvent, name, type, options) {
    if (supportsEventConstructors)
      return new OriginalEvent(type, unwrapOptions(options));
    const event = unwrap(document.createEvent(name));
    const defaultDict = defaultInitDicts[name];
    const args = [type];
    Object.keys(defaultDict).forEach((key) => {
      let v =
        options != null && key in options ? options[key] : defaultDict[key];
      if (key === 'relatedTarget') v = unwrap(v);
      args.push(v);
    });
    event['init' + name].apply(event, args);
    return event;
  }
  if (!supportsEventConstructors) {
    const configureEventConstructor = (name, initDict, superName) => {
      if (superName) {
        const superDict = defaultInitDicts[superName];
        initDict = mixin(mixin({}, superDict), initDict);
      }
      defaultInitDicts[name] = initDict;
    };
    configureEventConstructor('Event', {
      bubbles: false,
      cancelable: false,
    });
    configureEventConstructor(
      'CustomEvent',
      {
        detail: null,
      },
      'Event'
    );
    configureEventConstructor(
      'UIEvent',
      {
        view: null,
        detail: 0,
      },
      'Event'
    );
    configureEventConstructor(
      'MouseEvent',
      {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        button: 0,
        relatedTarget: null,
      },
      'UIEvent'
    );
    configureEventConstructor(
      'FocusEvent',
      {
        relatedTarget: null,
      },
      'UIEvent'
    );
  }
  var OriginalBeforeUnloadEvent = window.BeforeUnloadEvent;

  class BeforeUnloadEvent extends Event {
    constructor(impl) {
      super(impl);
    }
  }

  mixin(BeforeUnloadEvent.prototype, {
    get returnValue() {
      return unsafeUnwrap(this).returnValue;
    },
    set returnValue(v) {
      unsafeUnwrap(this).returnValue = v;
    },
  });
  if (OriginalBeforeUnloadEvent)
    registerWrapper(OriginalBeforeUnloadEvent, BeforeUnloadEvent);
  function isValidListener(fun) {
    if (typeof fun === 'function') return true;
    return fun && fun.handleEvent;
  }
  function isMutationEvent(type) {
    switch (type) {
      case 'DOMAttrModified':
      case 'DOMAttributeNameChanged':
      case 'DOMCharacterDataModified':
      case 'DOMElementNameChanged':
      case 'DOMNodeInserted':
      case 'DOMNodeInsertedIntoDocument':
      case 'DOMNodeRemoved':
      case 'DOMNodeRemovedFromDocument':
      case 'DOMSubtreeModified':
        return true;
    }
    return false;
  }
  const OriginalEventTarget = window.EventTarget;

  class EventTarget {
    constructor(impl) {
      setWrapper(impl, this);
    }

    addEventListener(type, fun, capture) {
      if (!isValidListener(fun) || isMutationEvent(type)) return;
      const listener = new Listener(type, fun, capture);
      let listeners = listenersTable.get(this);
      if (!listeners) {
        listeners = [];
        listeners.depth = 0;
        listenersTable.set(this, listeners);
      } else {
        for (let i = 0; i < listeners.length; i++) {
          if (listener.equals(listeners[i])) return;
        }
      }
      listeners.push(listener);
      const target = getTargetToListenAt(this);
      target.addEventListener_(type, dispatchOriginalEvent, true);
    }

    removeEventListener(type, fun, capture) {
      capture = Boolean(capture);
      const listeners = listenersTable.get(this);
      if (!listeners) return;
      let count = 0,
        found = false;
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i].type === type && listeners[i].capture === capture) {
          count++;
          if (listeners[i].handler === fun) {
            found = true;
            listeners[i].remove();
          }
        }
      }
      if (found && count === 1) {
        const target = getTargetToListenAt(this);
        target.removeEventListener_(type, dispatchOriginalEvent, true);
      }
    }

    dispatchEvent(event) {
      const nativeEvent = unwrap(event);
      const eventType = nativeEvent.type;
      handledEventsTable.set(nativeEvent, false);
      scope.renderAllPending();
      let tempListener;
      if (!hasListenerInAncestors(this, eventType)) {
        tempListener = () => {};
        this.addEventListener(eventType, tempListener, true);
      }
      try {
        return unwrap(this).dispatchEvent_(nativeEvent);
      } finally {
        if (tempListener)
          this.removeEventListener(eventType, tempListener, true);
      }
    }
  }

  const methodNames = [
    'addEventListener',
    'removeEventListener',
    'dispatchEvent',
  ];
  [Node, Window].forEach((constructor) => {
    const p = constructor.prototype;
    methodNames.forEach((name) => {
      Object.defineProperty(p, name + '_', {
        value: p[name],
      });
    });
  });
  function getTargetToListenAt(wrapper) {
    if (wrapper instanceof wrappers.ShadowRoot) wrapper = wrapper.host;
    return unwrap(wrapper);
  }
  function hasListener(node, type) {
    const listeners = listenersTable.get(node);
    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        if (!listeners[i].removed && listeners[i].type === type) return true;
      }
    }
    return false;
  }
  function hasListenerInAncestors(target, type) {
    for (let node = unwrap(target); node; node = node.parentNode) {
      if (hasListener(wrap(node), type)) return true;
    }
    return false;
  }
  if (OriginalEventTarget) registerWrapper(OriginalEventTarget, EventTarget);
  function wrapEventTargetMethods(constructors) {
    forwardMethodsToWrapper(constructors, methodNames);
  }
  const originalElementFromPoint = document.elementFromPoint;
  function elementFromPoint(self, document, x, y) {
    scope.renderAllPending();
    const element = wrap(
      originalElementFromPoint.call(unsafeUnwrap(document), x, y)
    );
    if (!element) return null;
    let path = getEventPath(element, null);
    const idx = path.lastIndexOf(self);
    if (idx == -1) return null;
    else path = path.slice(0, idx);
    return eventRetargetting(path, self);
  }
  function getEventHandlerGetter(name) {
    return function () {
      const inlineEventHandlers = eventHandlersTable.get(this);
      return (
        (inlineEventHandlers &&
          inlineEventHandlers[name] &&
          inlineEventHandlers[name].value) ||
        null
      );
    };
  }
  function getEventHandlerSetter(name) {
    const eventType = name.slice(2);
    return function (value) {
      let inlineEventHandlers = eventHandlersTable.get(this);
      if (!inlineEventHandlers) {
        inlineEventHandlers = Object.create(null);
        eventHandlersTable.set(this, inlineEventHandlers);
      }
      const old = inlineEventHandlers[name];
      if (old) this.removeEventListener(eventType, old.wrapped, false);
      if (typeof value === 'function') {
        const wrapped = function (e) {
          const rv = value.call(this, e);
          if (rv === false) e.preventDefault();
          else if (name === 'onbeforeunload' && typeof rv === 'string')
            e.returnValue = rv;
        };
        this.addEventListener(eventType, wrapped, false);
        inlineEventHandlers[name] = {
          value: value,
          wrapped: wrapped,
        };
      }
    };
  }
  scope.elementFromPoint = elementFromPoint;
  scope.getEventHandlerGetter = getEventHandlerGetter;
  scope.getEventHandlerSetter = getEventHandlerSetter;
  scope.wrapEventTargetMethods = wrapEventTargetMethods;
  scope.wrappers.BeforeUnloadEvent = BeforeUnloadEvent;
  scope.wrappers.CustomEvent = CustomEvent;
  scope.wrappers.Event = Event;
  scope.wrappers.EventTarget = EventTarget;
  scope.wrappers.FocusEvent = FocusEvent;
  scope.wrappers.MouseEvent = MouseEvent;
  scope.wrappers.UIEvent = UIEvent;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const UIEvent = scope.wrappers.UIEvent;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrap = scope.wrap;
  const OriginalTouchEvent = window.TouchEvent;
  if (!OriginalTouchEvent) return;
  let nativeEvent;
  try {
    nativeEvent = document.createEvent('TouchEvent');
  } catch (ex) {
    return;
  }
  const nonEnumDescriptor = {
    enumerable: false,
  };
  function nonEnum(obj, prop) {
    Object.defineProperty(obj, prop, nonEnumDescriptor);
  }

  class Touch {
    constructor(impl) {
      setWrapper(impl, this);
    }

    get target() {
      return wrap(unsafeUnwrap(this).target);
    }
  }

  const descr = {
    configurable: true,
    enumerable: true,
    get: null,
  };
  [
    'clientX',
    'clientY',
    'screenX',
    'screenY',
    'pageX',
    'pageY',
    'identifier',
    'webkitRadiusX',
    'webkitRadiusY',
    'webkitRotationAngle',
    'webkitForce',
  ].forEach((name) => {
    descr.get = function () {
      return unsafeUnwrap(this)[name];
    };
    Object.defineProperty(Touch.prototype, name, descr);
  });

  class TouchList {
    constructor() {
      this.length = 0;
      nonEnum(this, 'length');
    }

    item(index) {
      return this[index];
    }
  }

  function wrapTouchList(nativeTouchList) {
    const list = new TouchList();
    for (var i = 0; i < nativeTouchList.length; i++) {
      list[i] = new Touch(nativeTouchList[i]);
    }
    list.length = i;
    return list;
  }

  class TouchEvent extends UIEvent {
    constructor(impl) {
      super(impl);
    }
  }

  mixin(TouchEvent.prototype, {
    get touches() {
      return wrapTouchList(unsafeUnwrap(this).touches);
    },
    get targetTouches() {
      return wrapTouchList(unsafeUnwrap(this).targetTouches);
    },
    get changedTouches() {
      return wrapTouchList(unsafeUnwrap(this).changedTouches);
    },
    initTouchEvent() {
      throw new Error('Not implemented');
    },
  });
  registerWrapper(OriginalTouchEvent, TouchEvent, nativeEvent);
  scope.wrappers.Touch = Touch;
  scope.wrappers.TouchEvent = TouchEvent;
  scope.wrappers.TouchList = TouchList;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrap = scope.wrap;
  const nonEnumDescriptor = {
    enumerable: false,
  };
  function nonEnum(obj, prop) {
    Object.defineProperty(obj, prop, nonEnumDescriptor);
  }

  class NodeList {
    constructor() {
      this.length = 0;
      nonEnum(this, 'length');
    }

    item(index) {
      return this[index];
    }
  }

  nonEnum(NodeList.prototype, 'item');
  function wrapNodeList(list) {
    if (list == null) return list;
    const wrapperList = new NodeList();
    for (var i = 0, length = list.length; i < length; i++) {
      wrapperList[i] = wrap(list[i]);
    }
    wrapperList.length = length;
    return wrapperList;
  }
  function addWrapNodeListMethod(wrapperConstructor, name) {
    wrapperConstructor.prototype[name] = function () {
      return wrapNodeList(
        unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments)
      );
    };
  }
  scope.wrappers.NodeList = NodeList;
  scope.addWrapNodeListMethod = addWrapNodeListMethod;
  scope.wrapNodeList = wrapNodeList;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  scope.wrapHTMLCollection = scope.wrapNodeList;
  scope.wrappers.HTMLCollection = scope.wrappers.NodeList;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const EventTarget = scope.wrappers.EventTarget;
  const NodeList = scope.wrappers.NodeList;
  const TreeScope = scope.TreeScope;
  const assert = scope.assert;
  const defineWrapGetter = scope.defineWrapGetter;
  const enqueueMutation = scope.enqueueMutation;
  const getTreeScope = scope.getTreeScope;
  const isWrapper = scope.isWrapper;
  const mixin = scope.mixin;
  const registerTransientObservers = scope.registerTransientObservers;
  const registerWrapper = scope.registerWrapper;
  const setTreeScope = scope.setTreeScope;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const wrapIfNeeded = scope.wrapIfNeeded;
  const wrappers = scope.wrappers;
  function assertIsNodeWrapper(node) {
    assert(node instanceof Node);
  }
  function createOneElementNodeList(node) {
    const nodes = new NodeList();
    nodes[0] = node;
    nodes.length = 1;
    return nodes;
  }
  let surpressMutations = false;
  function enqueueRemovalForInsertedNodes(node, parent, nodes) {
    enqueueMutation(parent, 'childList', {
      removedNodes: nodes,
      previousSibling: node.previousSibling,
      nextSibling: node.nextSibling,
    });
  }
  function enqueueRemovalForInsertedDocumentFragment(df, nodes) {
    enqueueMutation(df, 'childList', {
      removedNodes: nodes,
    });
  }
  function collectNodes(node, parentNode, previousNode, nextNode) {
    if (node instanceof DocumentFragment) {
      var nodes = collectNodesForDocumentFragment(node);
      surpressMutations = true;
      for (var i = nodes.length - 1; i >= 0; i--) {
        node.removeChild(nodes[i]);
        nodes[i].parentNode_ = parentNode;
      }
      surpressMutations = false;
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].previousSibling_ = nodes[i - 1] || previousNode;
        nodes[i].nextSibling_ = nodes[i + 1] || nextNode;
      }
      if (previousNode) previousNode.nextSibling_ = nodes[0];
      if (nextNode) nextNode.previousSibling_ = nodes[nodes.length - 1];
      return nodes;
    }
    var nodes = createOneElementNodeList(node);
    const oldParent = node.parentNode;
    if (oldParent) {
      oldParent.removeChild(node);
    }
    node.parentNode_ = parentNode;
    node.previousSibling_ = previousNode;
    node.nextSibling_ = nextNode;
    if (previousNode) previousNode.nextSibling_ = node;
    if (nextNode) nextNode.previousSibling_ = node;
    return nodes;
  }
  function collectNodesNative(node) {
    if (node instanceof DocumentFragment)
      return collectNodesForDocumentFragment(node);
    const nodes = createOneElementNodeList(node);
    const oldParent = node.parentNode;
    if (oldParent) enqueueRemovalForInsertedNodes(node, oldParent, nodes);
    return nodes;
  }
  function collectNodesForDocumentFragment(node) {
    const nodes = new NodeList();
    let i = 0;
    for (let child = node.firstChild; child; child = child.nextSibling) {
      nodes[i++] = child;
    }
    nodes.length = i;
    enqueueRemovalForInsertedDocumentFragment(node, nodes);
    return nodes;
  }
  function snapshotNodeList(nodeList) {
    return nodeList;
  }
  function nodeWasAdded(node, treeScope) {
    setTreeScope(node, treeScope);
    node.nodeIsInserted_();
  }
  function nodesWereAdded(nodes, parent) {
    const treeScope = getTreeScope(parent);
    for (let i = 0; i < nodes.length; i++) {
      nodeWasAdded(nodes[i], treeScope);
    }
  }
  function nodeWasRemoved(node) {
    setTreeScope(node, new TreeScope(node, null));
  }
  function nodesWereRemoved(nodes) {
    for (let i = 0; i < nodes.length; i++) {
      nodeWasRemoved(nodes[i]);
    }
  }
  function ensureSameOwnerDocument(parent, child) {
    const ownerDoc =
      parent.nodeType === Node.DOCUMENT_NODE ? parent : parent.ownerDocument;
    if (ownerDoc !== child.ownerDocument) ownerDoc.adoptNode(child);
  }
  function adoptNodesIfNeeded(owner, nodes) {
    if (!nodes.length) return;
    const ownerDoc = owner.ownerDocument;
    if (ownerDoc === nodes[0].ownerDocument) return;
    for (let i = 0; i < nodes.length; i++) {
      scope.adoptNodeNoRemove(nodes[i], ownerDoc);
    }
  }
  function unwrapNodesForInsertion(owner, nodes) {
    adoptNodesIfNeeded(owner, nodes);
    const length = nodes.length;
    if (length === 1) return unwrap(nodes[0]);
    const df = unwrap(owner.ownerDocument.createDocumentFragment());
    for (let i = 0; i < length; i++) {
      df.appendChild(unwrap(nodes[i]));
    }
    return df;
  }
  function clearChildNodes(wrapper) {
    if (wrapper.firstChild_ !== undefined) {
      let child = wrapper.firstChild_;
      while (child) {
        const tmp = child;
        child = child.nextSibling_;
        tmp.parentNode_ = tmp.previousSibling_ = tmp.nextSibling_ = undefined;
      }
    }
    wrapper.firstChild_ = wrapper.lastChild_ = undefined;
  }
  function removeAllChildNodes(wrapper) {
    if (wrapper.invalidateShadowRenderer()) {
      let childWrapper = wrapper.firstChild;
      while (childWrapper) {
        assert(childWrapper.parentNode === wrapper);
        var nextSibling = childWrapper.nextSibling;
        const childNode = unwrap(childWrapper);
        const parentNode = childNode.parentNode;
        if (parentNode) originalRemoveChild.call(parentNode, childNode);
        childWrapper.previousSibling_ =
          childWrapper.nextSibling_ =
          childWrapper.parentNode_ =
            null;
        childWrapper = nextSibling;
      }
      wrapper.firstChild_ = wrapper.lastChild_ = null;
    } else {
      const node = unwrap(wrapper);
      let child = node.firstChild;
      var nextSibling;
      while (child) {
        nextSibling = child.nextSibling;
        originalRemoveChild.call(node, child);
        child = nextSibling;
      }
    }
  }
  function invalidateParent(node) {
    const p = node.parentNode;
    return p && p.invalidateShadowRenderer();
  }
  function cleanupNodes(nodes) {
    for (let i = 0, n; i < nodes.length; i++) {
      n = nodes[i];
      n.parentNode.removeChild(n);
    }
  }
  const originalImportNode = document.importNode;
  const originalCloneNode = window.Node.prototype.cloneNode;
  function cloneNode(node, deep, opt_doc) {
    let clone;
    if (opt_doc)
      clone = wrap(originalImportNode.call(opt_doc, unsafeUnwrap(node), false));
    else clone = wrap(originalCloneNode.call(unsafeUnwrap(node), false));
    if (deep) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        clone.appendChild(cloneNode(child, true, opt_doc));
      }
      if (node instanceof wrappers.HTMLTemplateElement) {
        const cloneContent = clone.content;
        for (
          var child = node.content.firstChild;
          child;
          child = child.nextSibling
        ) {
          cloneContent.appendChild(cloneNode(child, true, opt_doc));
        }
      }
    }
    return clone;
  }
  function contains(self, child) {
    if (!child || getTreeScope(self) !== getTreeScope(child)) return false;
    for (let node = child; node; node = node.parentNode) {
      if (node === self) return true;
    }
    return false;
  }
  const OriginalNode = window.Node;

  class Node extends EventTarget {
    constructor(original) {
      assert(original instanceof OriginalNode);
      super(original);
      this.parentNode_ = undefined;
      this.firstChild_ = undefined;
      this.lastChild_ = undefined;
      this.nextSibling_ = undefined;
      this.previousSibling_ = undefined;
      this.treeScope_ = undefined;
    }

    invalidateShadowRenderer(force) {
      const renderer = unsafeUnwrap(this).polymerShadowRenderer_;
      if (renderer) {
        renderer.invalidate();
        return true;
      }
      return false;
    }
  }

  const OriginalDocumentFragment = window.DocumentFragment;
  const originalAppendChild = OriginalNode.prototype.appendChild;
  const originalCompareDocumentPosition =
    OriginalNode.prototype.compareDocumentPosition;
  const originalIsEqualNode = OriginalNode.prototype.isEqualNode;
  const originalInsertBefore = OriginalNode.prototype.insertBefore;
  var originalRemoveChild = OriginalNode.prototype.removeChild;
  const originalReplaceChild = OriginalNode.prototype.replaceChild;
  const isIEOrEdge = /Trident|Edge/.test(navigator.userAgent);
  const removeChildOriginalHelper = isIEOrEdge
    ? (parent, child) => {
        try {
          originalRemoveChild.call(parent, child);
        } catch (ex) {
          if (!(parent instanceof OriginalDocumentFragment)) throw ex;
        }
      }
    : (parent, child) => {
        originalRemoveChild.call(parent, child);
      };
  mixin(Node.prototype, {
    appendChild(childWrapper) {
      return this.insertBefore(childWrapper, null);
    },
    insertBefore(childWrapper, refWrapper) {
      assertIsNodeWrapper(childWrapper);
      let refNode;
      if (refWrapper) {
        if (isWrapper(refWrapper)) {
          refNode = unwrap(refWrapper);
        } else {
          refNode = refWrapper;
          refWrapper = wrap(refNode);
        }
      } else {
        refWrapper = null;
        refNode = null;
      }
      refWrapper && assert(refWrapper.parentNode === this);
      let nodes;
      const previousNode = refWrapper
        ? refWrapper.previousSibling
        : this.lastChild;
      const useNative =
        !this.invalidateShadowRenderer() && !invalidateParent(childWrapper);
      if (useNative) nodes = collectNodesNative(childWrapper);
      else nodes = collectNodes(childWrapper, this, previousNode, refWrapper);
      if (useNative) {
        ensureSameOwnerDocument(this, childWrapper);
        clearChildNodes(this);
        originalInsertBefore.call(
          unsafeUnwrap(this),
          unwrap(childWrapper),
          refNode
        );
      } else {
        if (!previousNode) this.firstChild_ = nodes[0];
        if (!refWrapper) {
          this.lastChild_ = nodes[nodes.length - 1];
          if (this.firstChild_ === undefined)
            this.firstChild_ = this.firstChild;
        }
        const parentNode = refNode ? refNode.parentNode : unsafeUnwrap(this);
        if (parentNode) {
          originalInsertBefore.call(
            parentNode,
            unwrapNodesForInsertion(this, nodes),
            refNode
          );
        } else {
          adoptNodesIfNeeded(this, nodes);
        }
      }
      enqueueMutation(this, 'childList', {
        addedNodes: nodes,
        nextSibling: refWrapper,
        previousSibling: previousNode,
      });
      nodesWereAdded(nodes, this);
      return childWrapper;
    },
    removeChild(childWrapper) {
      assertIsNodeWrapper(childWrapper);
      if (childWrapper.parentNode !== this) {
        let found = false;
        const childNodes = this.childNodes;
        for (
          let ieChild = this.firstChild;
          ieChild;
          ieChild = ieChild.nextSibling
        ) {
          if (ieChild === childWrapper) {
            found = true;
            break;
          }
        }
        if (!found) {
          throw new Error('NotFoundError');
        }
      }
      const childNode = unwrap(childWrapper);
      const childWrapperNextSibling = childWrapper.nextSibling;
      const childWrapperPreviousSibling = childWrapper.previousSibling;
      if (this.invalidateShadowRenderer()) {
        const thisFirstChild = this.firstChild;
        const thisLastChild = this.lastChild;
        const parentNode = childNode.parentNode;
        if (parentNode) removeChildOriginalHelper(parentNode, childNode);
        if (thisFirstChild === childWrapper)
          this.firstChild_ = childWrapperNextSibling;
        if (thisLastChild === childWrapper)
          this.lastChild_ = childWrapperPreviousSibling;
        if (childWrapperPreviousSibling)
          childWrapperPreviousSibling.nextSibling_ = childWrapperNextSibling;
        if (childWrapperNextSibling) {
          childWrapperNextSibling.previousSibling_ =
            childWrapperPreviousSibling;
        }
        childWrapper.previousSibling_ =
          childWrapper.nextSibling_ =
          childWrapper.parentNode_ =
            undefined;
      } else {
        clearChildNodes(this);
        removeChildOriginalHelper(unsafeUnwrap(this), childNode);
      }
      if (!surpressMutations) {
        enqueueMutation(this, 'childList', {
          removedNodes: createOneElementNodeList(childWrapper),
          nextSibling: childWrapperNextSibling,
          previousSibling: childWrapperPreviousSibling,
        });
      }
      registerTransientObservers(this, childWrapper);
      return childWrapper;
    },
    replaceChild(newChildWrapper, oldChildWrapper) {
      assertIsNodeWrapper(newChildWrapper);
      let oldChildNode;
      if (isWrapper(oldChildWrapper)) {
        oldChildNode = unwrap(oldChildWrapper);
      } else {
        oldChildNode = oldChildWrapper;
        oldChildWrapper = wrap(oldChildNode);
      }
      if (oldChildWrapper.parentNode !== this) {
        throw new Error('NotFoundError');
      }
      let nextNode = oldChildWrapper.nextSibling;
      const previousNode = oldChildWrapper.previousSibling;
      let nodes;
      const useNative =
        !this.invalidateShadowRenderer() && !invalidateParent(newChildWrapper);
      if (useNative) {
        nodes = collectNodesNative(newChildWrapper);
      } else {
        if (nextNode === newChildWrapper)
          nextNode = newChildWrapper.nextSibling;
        nodes = collectNodes(newChildWrapper, this, previousNode, nextNode);
      }
      if (!useNative) {
        if (this.firstChild === oldChildWrapper) this.firstChild_ = nodes[0];
        if (this.lastChild === oldChildWrapper)
          this.lastChild_ = nodes[nodes.length - 1];
        oldChildWrapper.previousSibling_ =
          oldChildWrapper.nextSibling_ =
          oldChildWrapper.parentNode_ =
            undefined;
        if (oldChildNode.parentNode) {
          originalReplaceChild.call(
            oldChildNode.parentNode,
            unwrapNodesForInsertion(this, nodes),
            oldChildNode
          );
        }
      } else {
        ensureSameOwnerDocument(this, newChildWrapper);
        clearChildNodes(this);
        originalReplaceChild.call(
          unsafeUnwrap(this),
          unwrap(newChildWrapper),
          oldChildNode
        );
      }
      enqueueMutation(this, 'childList', {
        addedNodes: nodes,
        removedNodes: createOneElementNodeList(oldChildWrapper),
        nextSibling: nextNode,
        previousSibling: previousNode,
      });
      nodeWasRemoved(oldChildWrapper);
      nodesWereAdded(nodes, this);
      return oldChildWrapper;
    },
    nodeIsInserted_() {
      for (let child = this.firstChild; child; child = child.nextSibling) {
        child.nodeIsInserted_();
      }
    },
    hasChildNodes() {
      return this.firstChild !== null;
    },
    get parentNode() {
      return this.parentNode_ !== undefined
        ? this.parentNode_
        : wrap(unsafeUnwrap(this).parentNode);
    },
    get firstChild() {
      return this.firstChild_ !== undefined
        ? this.firstChild_
        : wrap(unsafeUnwrap(this).firstChild);
    },
    get lastChild() {
      return this.lastChild_ !== undefined
        ? this.lastChild_
        : wrap(unsafeUnwrap(this).lastChild);
    },
    get nextSibling() {
      return this.nextSibling_ !== undefined
        ? this.nextSibling_
        : wrap(unsafeUnwrap(this).nextSibling);
    },
    get previousSibling() {
      return this.previousSibling_ !== undefined
        ? this.previousSibling_
        : wrap(unsafeUnwrap(this).previousSibling);
    },
    get parentElement() {
      let p = this.parentNode;
      while (p && p.nodeType !== Node.ELEMENT_NODE) {
        p = p.parentNode;
      }
      return p;
    },
    get textContent() {
      let s = '';
      for (let child = this.firstChild; child; child = child.nextSibling) {
        if (child.nodeType != Node.COMMENT_NODE) {
          s += child.textContent;
        }
      }
      return s;
    },
    set textContent(textContent) {
      if (textContent == null) textContent = '';
      const removedNodes = snapshotNodeList(this.childNodes);
      if (this.invalidateShadowRenderer()) {
        removeAllChildNodes(this);
        if (textContent !== '') {
          const textNode =
            unsafeUnwrap(this).ownerDocument.createTextNode(textContent);
          this.appendChild(textNode);
        }
      } else {
        clearChildNodes(this);
        unsafeUnwrap(this).textContent = textContent;
      }
      const addedNodes = snapshotNodeList(this.childNodes);
      enqueueMutation(this, 'childList', {
        addedNodes: addedNodes,
        removedNodes: removedNodes,
      });
      nodesWereRemoved(removedNodes);
      nodesWereAdded(addedNodes, this);
    },
    get childNodes() {
      const wrapperList = new NodeList();
      let i = 0;
      for (let child = this.firstChild; child; child = child.nextSibling) {
        wrapperList[i++] = child;
      }
      wrapperList.length = i;
      return wrapperList;
    },
    cloneNode(deep) {
      return cloneNode(this, deep);
    },
    contains(child) {
      return contains(this, wrapIfNeeded(child));
    },
    compareDocumentPosition(otherNode) {
      return originalCompareDocumentPosition.call(
        unsafeUnwrap(this),
        unwrapIfNeeded(otherNode)
      );
    },
    isEqualNode(otherNode) {
      return originalIsEqualNode.call(
        unsafeUnwrap(this),
        unwrapIfNeeded(otherNode)
      );
    },
    normalize() {
      const nodes = snapshotNodeList(this.childNodes);
      let remNodes = [];
      let s = '';
      let modNode;
      for (let i = 0, n; i < nodes.length; i++) {
        n = nodes[i];
        if (n.nodeType === Node.TEXT_NODE) {
          if (!modNode && !n.data.length) this.removeChild(n);
          else if (!modNode) modNode = n;
          else {
            s += n.data;
            remNodes.push(n);
          }
        } else {
          if (modNode && remNodes.length) {
            modNode.data += s;
            cleanupNodes(remNodes);
          }
          remNodes = [];
          s = '';
          modNode = null;
          if (n.childNodes.length) n.normalize();
        }
      }
      if (modNode && remNodes.length) {
        modNode.data += s;
        cleanupNodes(remNodes);
      }
    },
  });
  defineWrapGetter(Node, 'ownerDocument');
  registerWrapper(OriginalNode, Node, document.createDocumentFragment());
  delete Node.prototype.querySelector;
  delete Node.prototype.querySelectorAll;
  Node.prototype = mixin(Object.create(EventTarget.prototype), Node.prototype);
  scope.cloneNode = cloneNode;
  scope.nodeWasAdded = nodeWasAdded;
  scope.nodeWasRemoved = nodeWasRemoved;
  scope.nodesWereAdded = nodesWereAdded;
  scope.nodesWereRemoved = nodesWereRemoved;
  scope.originalInsertBefore = originalInsertBefore;
  scope.originalRemoveChild = originalRemoveChild;
  scope.snapshotNodeList = snapshotNodeList;
  scope.wrappers.Node = Node;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLCollection = scope.wrappers.HTMLCollection;
  const NodeList = scope.wrappers.NodeList;
  const getTreeScope = scope.getTreeScope;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrap = scope.wrap;
  const originalDocumentQuerySelector = document.querySelector;
  const originalElementQuerySelector = document.documentElement.querySelector;
  const originalDocumentQuerySelectorAll = document.querySelectorAll;
  const originalElementQuerySelectorAll =
    document.documentElement.querySelectorAll;
  const originalDocumentGetElementsByTagName = document.getElementsByTagName;
  const originalElementGetElementsByTagName =
    document.documentElement.getElementsByTagName;
  const originalDocumentGetElementsByTagNameNS =
    document.getElementsByTagNameNS;
  const originalElementGetElementsByTagNameNS =
    document.documentElement.getElementsByTagNameNS;
  const OriginalElement = window.Element;
  const OriginalDocument = window.HTMLDocument || window.Document;
  function filterNodeList(list, index, result, deep) {
    let wrappedItem = null;
    let root = null;
    for (let i = 0, length = list.length; i < length; i++) {
      wrappedItem = wrap(list[i]);
      if (!deep && (root = getTreeScope(wrappedItem).root)) {
        if (root instanceof scope.wrappers.ShadowRoot) {
          continue;
        }
      }
      result[index++] = wrappedItem;
    }
    return index;
  }
  function shimSelector(selector) {
    return String(selector).replace(/\/deep\/|::shadow|>>>/g, ' ');
  }
  function shimMatchesSelector(selector) {
    return String(selector)
      .replace(/:host\(([^\s]+)\)/g, '$1')
      .replace(/([^\s]):host/g, '$1')
      .replace(':host', '*')
      .replace(
        /\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g,
        ' '
      );
  }
  function findOne(node, selector) {
    let m,
      el = node.firstElementChild;
    while (el) {
      if (el.matches(selector)) return el;
      m = findOne(el, selector);
      if (m) return m;
      el = el.nextElementSibling;
    }
    return null;
  }
  function matchesSelector(el, selector) {
    return el.matches(selector);
  }
  const XHTML_NS = 'http://www.w3.org/1999/xhtml';
  function matchesTagName(el, localName, localNameLowerCase) {
    const ln = el.localName;
    return (
      ln === localName ||
      (ln === localNameLowerCase && el.namespaceURI === XHTML_NS)
    );
  }
  function matchesEveryThing() {
    return true;
  }
  function matchesLocalNameOnly(el, ns, localName) {
    return el.localName === localName;
  }
  function matchesNameSpace(el, ns) {
    return el.namespaceURI === ns;
  }
  function matchesLocalNameNS(el, ns, localName) {
    return el.namespaceURI === ns && el.localName === localName;
  }
  function findElements(node, index, result, p, arg0, arg1) {
    let el = node.firstElementChild;
    while (el) {
      if (p(el, arg0, arg1)) result[index++] = el;
      index = findElements(el, index, result, p, arg0, arg1);
      el = el.nextElementSibling;
    }
    return index;
  }
  function querySelectorAllFiltered(p, index, result, selector, deep) {
    const target = unsafeUnwrap(this);
    let list;
    const root = getTreeScope(this).root;
    if (root instanceof scope.wrappers.ShadowRoot) {
      return findElements(this, index, result, p, selector, null);
    } else if (target instanceof OriginalElement) {
      list = originalElementQuerySelectorAll.call(target, selector);
    } else if (target instanceof OriginalDocument) {
      list = originalDocumentQuerySelectorAll.call(target, selector);
    } else {
      return findElements(this, index, result, p, selector, null);
    }
    return filterNodeList(list, index, result, deep);
  }
  const SelectorsInterface = {
    querySelector(selector) {
      const shimmed = shimSelector(selector);
      const deep = shimmed !== selector;
      selector = shimmed;
      const target = unsafeUnwrap(this);
      let wrappedItem;
      let root = getTreeScope(this).root;
      if (root instanceof scope.wrappers.ShadowRoot) {
        return findOne(this, selector);
      } else if (target instanceof OriginalElement) {
        wrappedItem = wrap(originalElementQuerySelector.call(target, selector));
      } else if (target instanceof OriginalDocument) {
        wrappedItem = wrap(
          originalDocumentQuerySelector.call(target, selector)
        );
      } else {
        return findOne(this, selector);
      }
      if (!wrappedItem) {
        return wrappedItem;
      } else if (!deep && (root = getTreeScope(wrappedItem).root)) {
        if (root instanceof scope.wrappers.ShadowRoot) {
          return findOne(this, selector);
        }
      }
      return wrappedItem;
    },
    querySelectorAll(selector) {
      const shimmed = shimSelector(selector);
      const deep = shimmed !== selector;
      selector = shimmed;
      const result = new NodeList();
      result.length = querySelectorAllFiltered.call(
        this,
        matchesSelector,
        0,
        result,
        selector,
        deep
      );
      return result;
    },
  };
  const MatchesInterface = {
    matches(selector) {
      selector = shimMatchesSelector(selector);
      return scope.originalMatches.call(unsafeUnwrap(this), selector);
    },
  };
  function getElementsByTagNameFiltered(
    p,
    index,
    result,
    localName,
    lowercase
  ) {
    const target = unsafeUnwrap(this);
    let list;
    const root = getTreeScope(this).root;
    if (root instanceof scope.wrappers.ShadowRoot) {
      return findElements(this, index, result, p, localName, lowercase);
    } else if (target instanceof OriginalElement) {
      list = originalElementGetElementsByTagName.call(
        target,
        localName,
        lowercase
      );
    } else if (target instanceof OriginalDocument) {
      list = originalDocumentGetElementsByTagName.call(
        target,
        localName,
        lowercase
      );
    } else {
      return findElements(this, index, result, p, localName, lowercase);
    }
    return filterNodeList(list, index, result, false);
  }
  function getElementsByTagNameNSFiltered(p, index, result, ns, localName) {
    const target = unsafeUnwrap(this);
    let list;
    const root = getTreeScope(this).root;
    if (root instanceof scope.wrappers.ShadowRoot) {
      return findElements(this, index, result, p, ns, localName);
    } else if (target instanceof OriginalElement) {
      list = originalElementGetElementsByTagNameNS.call(target, ns, localName);
    } else if (target instanceof OriginalDocument) {
      list = originalDocumentGetElementsByTagNameNS.call(target, ns, localName);
    } else {
      return findElements(this, index, result, p, ns, localName);
    }
    return filterNodeList(list, index, result, false);
  }
  const GetElementsByInterface = {
    getElementsByTagName(localName) {
      const result = new HTMLCollection();
      const match = localName === '*' ? matchesEveryThing : matchesTagName;
      result.length = getElementsByTagNameFiltered.call(
        this,
        match,
        0,
        result,
        localName,
        localName.toLowerCase()
      );
      return result;
    },
    getElementsByClassName(className) {
      return this.querySelectorAll('.' + className);
    },
    getElementsByTagNameNS(ns, localName) {
      const result = new HTMLCollection();
      let match = null;
      if (ns === '*') {
        match = localName === '*' ? matchesEveryThing : matchesLocalNameOnly;
      } else {
        match = localName === '*' ? matchesNameSpace : matchesLocalNameNS;
      }
      result.length = getElementsByTagNameNSFiltered.call(
        this,
        match,
        0,
        result,
        ns || null,
        localName
      );
      return result;
    },
  };
  scope.GetElementsByInterface = GetElementsByInterface;
  scope.SelectorsInterface = SelectorsInterface;
  scope.MatchesInterface = MatchesInterface;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const NodeList = scope.wrappers.NodeList;
  function forwardElement(node) {
    while (node && node.nodeType !== Node.ELEMENT_NODE) {
      node = node.nextSibling;
    }
    return node;
  }
  function backwardsElement(node) {
    while (node && node.nodeType !== Node.ELEMENT_NODE) {
      node = node.previousSibling;
    }
    return node;
  }
  const ParentNodeInterface = {
    get firstElementChild() {
      return forwardElement(this.firstChild);
    },
    get lastElementChild() {
      return backwardsElement(this.lastChild);
    },
    get childElementCount() {
      let count = 0;
      for (
        let child = this.firstElementChild;
        child;
        child = child.nextElementSibling
      ) {
        count++;
      }
      return count;
    },
    get children() {
      const wrapperList = new NodeList();
      let i = 0;
      for (
        let child = this.firstElementChild;
        child;
        child = child.nextElementSibling
      ) {
        wrapperList[i++] = child;
      }
      wrapperList.length = i;
      return wrapperList;
    },
    remove() {
      const p = this.parentNode;
      if (p) p.removeChild(this);
    },
  };
  const ChildNodeInterface = {
    get nextElementSibling() {
      return forwardElement(this.nextSibling);
    },
    get previousElementSibling() {
      return backwardsElement(this.previousSibling);
    },
  };
  const NonElementParentNodeInterface = {
    getElementById(id) {
      if (/[ \t\n\r\f]/.test(id)) return null;
      return this.querySelector('[id="' + id + '"]');
    },
  };
  scope.ChildNodeInterface = ChildNodeInterface;
  scope.NonElementParentNodeInterface = NonElementParentNodeInterface;
  scope.ParentNodeInterface = ParentNodeInterface;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const ChildNodeInterface = scope.ChildNodeInterface;
  const Node = scope.wrappers.Node;
  const enqueueMutation = scope.enqueueMutation;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const OriginalCharacterData = window.CharacterData;

  class CharacterData extends Node {
    constructor(node) {
      super(node);
    }
  }

  mixin(CharacterData.prototype, {
    get nodeValue() {
      return this.data;
    },
    set nodeValue(data) {
      this.data = data;
    },
    get textContent() {
      return this.data;
    },
    set textContent(value) {
      this.data = value;
    },
    get data() {
      return unsafeUnwrap(this).data;
    },
    set data(value) {
      const oldValue = unsafeUnwrap(this).data;
      enqueueMutation(this, 'characterData', {
        oldValue: oldValue,
      });
      unsafeUnwrap(this).data = value;
    },
  });
  mixin(CharacterData.prototype, ChildNodeInterface);
  registerWrapper(
    OriginalCharacterData,
    CharacterData,
    document.createTextNode('')
  );
  scope.wrappers.CharacterData = CharacterData;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const CharacterData = scope.wrappers.CharacterData;
  const enqueueMutation = scope.enqueueMutation;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  function toUInt32(x) {
    return x >>> 0;
  }
  const OriginalText = window.Text;

  class Text extends CharacterData {
    constructor(node) {
      super(node);
    }
  }

  mixin(Text.prototype, {
    splitText(offset) {
      offset = toUInt32(offset);
      const s = this.data;
      if (offset > s.length) throw new Error('IndexSizeError');
      const head = s.slice(0, offset);
      const tail = s.slice(offset);
      this.data = head;
      const newTextNode = this.ownerDocument.createTextNode(tail);
      if (this.parentNode)
        this.parentNode.insertBefore(newTextNode, this.nextSibling);
      return newTextNode;
    },
  });
  registerWrapper(OriginalText, Text, document.createTextNode(''));
  scope.wrappers.Text = Text;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  if (!window.DOMTokenList) {
    console.warn(
      'Missing DOMTokenList prototype, please include a ' +
        'compatible classList polyfill such as http://goo.gl/uTcepH.'
    );
    return;
  }
  const unsafeUnwrap = scope.unsafeUnwrap;
  const enqueueMutation = scope.enqueueMutation;
  function getClass(el) {
    return unsafeUnwrap(el).getAttribute('class');
  }
  function enqueueClassAttributeChange(el, oldValue) {
    enqueueMutation(el, 'attributes', {
      name: 'class',
      namespace: null,
      oldValue: oldValue,
    });
  }
  function invalidateClass(el) {
    scope.invalidateRendererBasedOnAttribute(el, 'class');
  }
  function changeClass(tokenList, method, args) {
    const ownerElement = tokenList.ownerElement_;
    if (ownerElement == null) {
      return method.apply(tokenList, args);
    }
    const oldValue = getClass(ownerElement);
    const retv = method.apply(tokenList, args);
    if (getClass(ownerElement) !== oldValue) {
      enqueueClassAttributeChange(ownerElement, oldValue);
      invalidateClass(ownerElement);
    }
    return retv;
  }
  const oldAdd = DOMTokenList.prototype.add;
  DOMTokenList.prototype.add = function () {
    changeClass(this, oldAdd, arguments);
  };
  const oldRemove = DOMTokenList.prototype.remove;
  DOMTokenList.prototype.remove = function () {
    changeClass(this, oldRemove, arguments);
  };
  const oldToggle = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function () {
    return changeClass(this, oldToggle, arguments);
  };
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const ChildNodeInterface = scope.ChildNodeInterface;
  const GetElementsByInterface = scope.GetElementsByInterface;
  const Node = scope.wrappers.Node;
  const ParentNodeInterface = scope.ParentNodeInterface;
  const SelectorsInterface = scope.SelectorsInterface;
  const MatchesInterface = scope.MatchesInterface;
  const addWrapNodeListMethod = scope.addWrapNodeListMethod;
  const enqueueMutation = scope.enqueueMutation;
  const mixin = scope.mixin;
  const oneOf = scope.oneOf;
  const registerWrapper = scope.registerWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrappers = scope.wrappers;
  const OriginalElement = window.Element;
  const matchesNames = [
    'matches',
    'mozMatchesSelector',
    'msMatchesSelector',
    'webkitMatchesSelector',
  ].filter((name) => {
    return OriginalElement.prototype[name];
  });
  const matchesName = matchesNames[0];
  const originalMatches = OriginalElement.prototype[matchesName];
  function invalidateRendererBasedOnAttribute(element, name) {
    const p = element.parentNode;
    if (!p || !p.shadowRoot) return;
    const renderer = scope.getRendererForHost(p);
    if (renderer.dependsOnAttribute(name)) renderer.invalidate();
  }
  function enqueAttributeChange(element, name, oldValue) {
    enqueueMutation(element, 'attributes', {
      name: name,
      namespace: null,
      oldValue: oldValue,
    });
  }
  const classListTable = new WeakMap();

  class Element extends Node {
    constructor(node) {
      super(node);
    }

    getDestinationInsertionPoints() {
      renderAllPending();
      return getDestinationInsertionPoints(this) || [];
    }
  }

  mixin(Element.prototype, {
    createShadowRoot() {
      const newShadowRoot = new wrappers.ShadowRoot(this);
      unsafeUnwrap(this).polymerShadowRoot_ = newShadowRoot;
      const renderer = scope.getRendererForHost(this);
      renderer.invalidate();
      return newShadowRoot;
    },
    get shadowRoot() {
      return unsafeUnwrap(this).polymerShadowRoot_ || null;
    },
    setAttribute(name, value) {
      const oldValue = unsafeUnwrap(this).getAttribute(name);
      unsafeUnwrap(this).setAttribute(name, value);
      enqueAttributeChange(this, name, oldValue);
      invalidateRendererBasedOnAttribute(this, name);
    },
    removeAttribute(name) {
      const oldValue = unsafeUnwrap(this).getAttribute(name);
      unsafeUnwrap(this).removeAttribute(name);
      enqueAttributeChange(this, name, oldValue);
      invalidateRendererBasedOnAttribute(this, name);
    },
    get classList() {
      let list = classListTable.get(this);
      if (!list) {
        list = unsafeUnwrap(this).classList;
        if (!list) return;
        list.ownerElement_ = this;
        classListTable.set(this, list);
      }
      return list;
    },
    get className() {
      return unsafeUnwrap(this).className;
    },
    set className(v) {
      this.setAttribute('class', v);
    },
    get id() {
      return unsafeUnwrap(this).id;
    },
    set id(v) {
      this.setAttribute('id', v);
    },
  });
  matchesNames.forEach((name) => {
    if (name !== 'matches') {
      Element.prototype[name] = function (selector) {
        return this.matches(selector);
      };
    }
  });
  if (OriginalElement.prototype.webkitCreateShadowRoot) {
    Element.prototype.webkitCreateShadowRoot =
      Element.prototype.createShadowRoot;
  }
  mixin(Element.prototype, ChildNodeInterface);
  mixin(Element.prototype, GetElementsByInterface);
  mixin(Element.prototype, ParentNodeInterface);
  mixin(Element.prototype, SelectorsInterface);
  mixin(Element.prototype, MatchesInterface);
  registerWrapper(
    OriginalElement,
    Element,
    document.createElementNS(null, 'x')
  );
  scope.invalidateRendererBasedOnAttribute = invalidateRendererBasedOnAttribute;
  scope.matchesNames = matchesNames;
  scope.originalMatches = originalMatches;
  scope.wrappers.Element = Element;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const Element = scope.wrappers.Element;
  const defineGetter = scope.defineGetter;
  const enqueueMutation = scope.enqueueMutation;
  const mixin = scope.mixin;
  const nodesWereAdded = scope.nodesWereAdded;
  const nodesWereRemoved = scope.nodesWereRemoved;
  const registerWrapper = scope.registerWrapper;
  const snapshotNodeList = scope.snapshotNodeList;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const wrappers = scope.wrappers;
  const escapeAttrRegExp = /[&\u00A0"]/g;
  const escapeDataRegExp = /[&\u00A0<>]/g;
  function escapeReplace(c) {
    switch (c) {
      case '&':
        return '&amp;';

      case '<':
        return '&lt;';

      case '>':
        return '&gt;';

      case '"':
        return '&quot;';

      case ' ':
        return '&nbsp;';
    }
  }
  function escapeAttr(s) {
    return s.replace(escapeAttrRegExp, escapeReplace);
  }
  function escapeData(s) {
    return s.replace(escapeDataRegExp, escapeReplace);
  }
  function makeSet(arr) {
    const set = {};
    for (let i = 0; i < arr.length; i++) {
      set[arr[i]] = true;
    }
    return set;
  }
  const voidElements = makeSet([
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]);
  const plaintextParents = makeSet([
    'style',
    'script',
    'xmp',
    'iframe',
    'noembed',
    'noframes',
    'plaintext',
    'noscript',
  ]);
  const XHTML_NS = 'http://www.w3.org/1999/xhtml';
  function needsSelfClosingSlash(node) {
    if (node.namespaceURI !== XHTML_NS) return true;
    const doctype = node.ownerDocument.doctype;
    return doctype && doctype.publicId && doctype.systemId;
  }
  function getOuterHTML(node, parentNode) {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        const tagName = node.tagName.toLowerCase();
        let s = '<' + tagName;
        const attrs = node.attributes;
        for (let i = 0, attr; (attr = attrs[i]); i++) {
          s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
        }
        if (voidElements[tagName]) {
          if (needsSelfClosingSlash(node)) s += '/';
          return s + '>';
        }
        return s + '>' + getInnerHTML(node) + '</' + tagName + '>';

      case Node.TEXT_NODE:
        const data = node.data;
        if (parentNode && plaintextParents[parentNode.localName]) return data;
        return escapeData(data);

      case Node.COMMENT_NODE:
        return '<!--' + node.data + '-->';

      default:
        console.error(node);
        throw new Error('not implemented');
    }
  }
  function getInnerHTML(node) {
    if (node instanceof wrappers.HTMLTemplateElement) node = node.content;
    let s = '';
    for (let child = node.firstChild; child; child = child.nextSibling) {
      s += getOuterHTML(child, node);
    }
    return s;
  }
  function setInnerHTML(node, value, opt_tagName) {
    const tagName = opt_tagName || 'div';
    node.textContent = '';
    const tempElement = unwrap(node.ownerDocument.createElement(tagName));
    tempElement.innerHTML = value;
    let firstChild;
    while ((firstChild = tempElement.firstChild)) {
      node.appendChild(wrap(firstChild));
    }
  }
  const oldIe = /MSIE/.test(navigator.userAgent);
  const OriginalHTMLElement = window.HTMLElement;
  const OriginalHTMLTemplateElement = window.HTMLTemplateElement;

  class HTMLElement extends Element {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLElement.prototype, {
    get innerHTML() {
      return getInnerHTML(this);
    },
    set innerHTML(value) {
      if (oldIe && plaintextParents[this.localName]) {
        this.textContent = value;
        return;
      }
      const removedNodes = snapshotNodeList(this.childNodes);
      if (this.invalidateShadowRenderer()) {
        if (this instanceof wrappers.HTMLTemplateElement)
          setInnerHTML(this.content, value);
        else setInnerHTML(this, value, this.tagName);
      } else if (
        !OriginalHTMLTemplateElement &&
        this instanceof wrappers.HTMLTemplateElement
      ) {
        setInnerHTML(this.content, value);
      } else {
        unsafeUnwrap(this).innerHTML = value;
      }
      const addedNodes = snapshotNodeList(this.childNodes);
      enqueueMutation(this, 'childList', {
        addedNodes: addedNodes,
        removedNodes: removedNodes,
      });
      nodesWereRemoved(removedNodes);
      nodesWereAdded(addedNodes, this);
    },
    get outerHTML() {
      return getOuterHTML(this, this.parentNode);
    },
    set outerHTML(value) {
      const p = this.parentNode;
      if (p) {
        p.invalidateShadowRenderer();
        const df = frag(p, value);
        p.replaceChild(df, this);
      }
    },
    insertAdjacentHTML(position, text) {
      let contextElement, refNode;
      switch (String(position).toLowerCase()) {
        case 'beforebegin':
          contextElement = this.parentNode;
          refNode = this;
          break;

        case 'afterend':
          contextElement = this.parentNode;
          refNode = this.nextSibling;
          break;

        case 'afterbegin':
          contextElement = this;
          refNode = this.firstChild;
          break;

        case 'beforeend':
          contextElement = this;
          refNode = null;
          break;

        default:
          return;
      }
      const df = frag(contextElement, text);
      contextElement.insertBefore(df, refNode);
    },
    get hidden() {
      return this.hasAttribute('hidden');
    },
    set hidden(v) {
      if (v) {
        this.setAttribute('hidden', '');
      } else {
        this.removeAttribute('hidden');
      }
    },
  });
  function frag(contextElement, html) {
    const p = unwrap(contextElement.cloneNode(false));
    p.innerHTML = html;
    const df = unwrap(document.createDocumentFragment());
    let c;
    while ((c = p.firstChild)) {
      df.appendChild(c);
    }
    return wrap(df);
  }
  function getter(name) {
    return function () {
      scope.renderAllPending();
      return unsafeUnwrap(this)[name];
    };
  }
  function getterRequiresRendering(name) {
    defineGetter(HTMLElement, name, getter(name));
  }
  [
    'clientHeight',
    'clientLeft',
    'clientTop',
    'clientWidth',
    'offsetHeight',
    'offsetLeft',
    'offsetTop',
    'offsetWidth',
    'scrollHeight',
    'scrollWidth',
  ].forEach(getterRequiresRendering);
  function getterAndSetterRequiresRendering(name) {
    Object.defineProperty(HTMLElement.prototype, name, {
      get: getter(name),
      set(v) {
        scope.renderAllPending();
        unsafeUnwrap(this)[name] = v;
      },
      configurable: true,
      enumerable: true,
    });
  }
  ['scrollLeft', 'scrollTop'].forEach(getterAndSetterRequiresRendering);
  function methodRequiresRendering(name) {
    Object.defineProperty(HTMLElement.prototype, name, {
      value() {
        scope.renderAllPending();
        return unsafeUnwrap(this)[name].apply(unsafeUnwrap(this), arguments);
      },
      configurable: true,
      enumerable: true,
    });
  }
  [
    'focus',
    'getBoundingClientRect',
    'getClientRects',
    'scrollIntoView',
  ].forEach(methodRequiresRendering);
  registerWrapper(
    OriginalHTMLElement,
    HTMLElement,
    document.createElement('b')
  );
  scope.wrappers.HTMLElement = HTMLElement;
  scope.getInnerHTML = getInnerHTML;
  scope.setInnerHTML = setInnerHTML;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrap = scope.wrap;
  const OriginalHTMLCanvasElement = window.HTMLCanvasElement;

  class HTMLCanvasElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLCanvasElement.prototype, {
    getContext() {
      const context = unsafeUnwrap(this).getContext.apply(
        unsafeUnwrap(this),
        arguments
      );
      return context && wrap(context);
    },
  });
  registerWrapper(
    OriginalHTMLCanvasElement,
    HTMLCanvasElement,
    document.createElement('canvas')
  );
  scope.wrappers.HTMLCanvasElement = HTMLCanvasElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const OriginalHTMLContentElement = window.HTMLContentElement;

  class HTMLContentElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLContentElement.prototype, {
    constructor: HTMLContentElement,
    get select() {
      return this.getAttribute('select');
    },
    set select(value) {
      this.setAttribute('select', value);
    },
    setAttribute(n, v) {
      HTMLElement.prototype.setAttribute.call(this, n, v);
      if (String(n).toLowerCase() === 'select')
        this.invalidateShadowRenderer(true);
    },
  });
  if (OriginalHTMLContentElement)
    registerWrapper(OriginalHTMLContentElement, HTMLContentElement);
  scope.wrappers.HTMLContentElement = HTMLContentElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const wrapHTMLCollection = scope.wrapHTMLCollection;
  const unwrap = scope.unwrap;
  const OriginalHTMLFormElement = window.HTMLFormElement;

  class HTMLFormElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLFormElement.prototype, {
    get elements() {
      return wrapHTMLCollection(unwrap(this).elements);
    },
  });
  registerWrapper(
    OriginalHTMLFormElement,
    HTMLFormElement,
    document.createElement('form')
  );
  scope.wrappers.HTMLFormElement = HTMLFormElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const registerWrapper = scope.registerWrapper;
  const unwrap = scope.unwrap;
  const rewrap = scope.rewrap;
  const OriginalHTMLImageElement = window.HTMLImageElement;

  class HTMLImageElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  registerWrapper(
    OriginalHTMLImageElement,
    HTMLImageElement,
    document.createElement('img')
  );
  function Image(width, height) {
    if (!(this instanceof Image)) {
      throw new TypeError(
        'DOM object constructor cannot be called as a function.'
      );
    }
    const node = unwrap(document.createElement('img'));
    HTMLElement.call(this, node);
    rewrap(node, this);
    if (width !== undefined) node.width = width;
    if (height !== undefined) node.height = height;
  }
  Image.prototype = HTMLImageElement.prototype;
  scope.wrappers.HTMLImageElement = HTMLImageElement;
  scope.wrappers.Image = Image;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const NodeList = scope.wrappers.NodeList;
  const registerWrapper = scope.registerWrapper;
  const OriginalHTMLShadowElement = window.HTMLShadowElement;

  class HTMLShadowElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  if (OriginalHTMLShadowElement)
    registerWrapper(OriginalHTMLShadowElement, HTMLShadowElement);
  scope.wrappers.HTMLShadowElement = HTMLShadowElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const contentTable = new WeakMap();
  const templateContentsOwnerTable = new WeakMap();
  function getTemplateContentsOwner(doc) {
    if (!doc.defaultView) return doc;
    let d = templateContentsOwnerTable.get(doc);
    if (!d) {
      d = doc.implementation.createHTMLDocument('');
      while (d.lastChild) {
        d.removeChild(d.lastChild);
      }
      templateContentsOwnerTable.set(doc, d);
    }
    return d;
  }
  function extractContent(templateElement) {
    const doc = getTemplateContentsOwner(templateElement.ownerDocument);
    const df = unwrap(doc.createDocumentFragment());
    let child;
    while ((child = templateElement.firstChild)) {
      df.appendChild(child);
    }
    return df;
  }
  const OriginalHTMLTemplateElement = window.HTMLTemplateElement;

  class HTMLTemplateElement extends HTMLElement {
    constructor(node) {
      super(node);
      if (!OriginalHTMLTemplateElement) {
        const content = extractContent(node);
        contentTable.set(this, wrap(content));
      }
    }
  }

  mixin(HTMLTemplateElement.prototype, {
    constructor: HTMLTemplateElement,
    get content() {
      if (OriginalHTMLTemplateElement) return wrap(unsafeUnwrap(this).content);
      return contentTable.get(this);
    },
  });
  if (OriginalHTMLTemplateElement)
    registerWrapper(OriginalHTMLTemplateElement, HTMLTemplateElement);
  scope.wrappers.HTMLTemplateElement = HTMLTemplateElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const registerWrapper = scope.registerWrapper;
  const OriginalHTMLMediaElement = window.HTMLMediaElement;
  if (!OriginalHTMLMediaElement) return;

  class HTMLMediaElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  registerWrapper(
    OriginalHTMLMediaElement,
    HTMLMediaElement,
    document.createElement('audio')
  );
  scope.wrappers.HTMLMediaElement = HTMLMediaElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLMediaElement = scope.wrappers.HTMLMediaElement;
  const registerWrapper = scope.registerWrapper;
  const unwrap = scope.unwrap;
  const rewrap = scope.rewrap;
  const OriginalHTMLAudioElement = window.HTMLAudioElement;
  if (!OriginalHTMLAudioElement) return;

  class HTMLAudioElement extends HTMLMediaElement {
    constructor(node) {
      super(node);
    }
  }

  registerWrapper(
    OriginalHTMLAudioElement,
    HTMLAudioElement,
    document.createElement('audio')
  );
  function Audio(src) {
    if (!(this instanceof Audio)) {
      throw new TypeError(
        'DOM object constructor cannot be called as a function.'
      );
    }
    const node = unwrap(document.createElement('audio'));
    HTMLMediaElement.call(this, node);
    rewrap(node, this);
    node.setAttribute('preload', 'auto');
    if (src !== undefined) node.setAttribute('src', src);
  }
  Audio.prototype = HTMLAudioElement.prototype;
  scope.wrappers.HTMLAudioElement = HTMLAudioElement;
  scope.wrappers.Audio = Audio;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const rewrap = scope.rewrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const OriginalHTMLOptionElement = window.HTMLOptionElement;
  function trimText(s) {
    return s.replace(/\s+/g, ' ').trim();
  }

  class HTMLOptionElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLOptionElement.prototype, {
    get text() {
      return trimText(this.textContent);
    },
    set text(value) {
      this.textContent = trimText(String(value));
    },
    get form() {
      return wrap(unwrap(this).form);
    },
  });
  registerWrapper(
    OriginalHTMLOptionElement,
    HTMLOptionElement,
    document.createElement('option')
  );
  function Option(text, value, defaultSelected, selected) {
    if (!(this instanceof Option)) {
      throw new TypeError(
        'DOM object constructor cannot be called as a function.'
      );
    }
    const node = unwrap(document.createElement('option'));
    HTMLElement.call(this, node);
    rewrap(node, this);
    if (text !== undefined) node.text = text;
    if (value !== undefined) node.setAttribute('value', value);
    if (defaultSelected === true) node.setAttribute('selected', '');
    node.selected = selected === true;
  }
  Option.prototype = HTMLOptionElement.prototype;
  scope.wrappers.HTMLOptionElement = HTMLOptionElement;
  scope.wrappers.Option = Option;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const OriginalHTMLSelectElement = window.HTMLSelectElement;

  class HTMLSelectElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLSelectElement.prototype, {
    add(element, before) {
      if (typeof before === 'object') before = unwrap(before);
      unwrap(this).add(unwrap(element), before);
    },
    remove(indexOrNode) {
      if (indexOrNode === undefined) {
        HTMLElement.prototype.remove.call(this);
        return;
      }
      if (typeof indexOrNode === 'object') indexOrNode = unwrap(indexOrNode);
      unwrap(this).remove(indexOrNode);
    },
    get form() {
      return wrap(unwrap(this).form);
    },
  });
  registerWrapper(
    OriginalHTMLSelectElement,
    HTMLSelectElement,
    document.createElement('select')
  );
  scope.wrappers.HTMLSelectElement = HTMLSelectElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const wrapHTMLCollection = scope.wrapHTMLCollection;
  const OriginalHTMLTableElement = window.HTMLTableElement;

  class HTMLTableElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLTableElement.prototype, {
    get caption() {
      return wrap(unwrap(this).caption);
    },
    createCaption() {
      return wrap(unwrap(this).createCaption());
    },
    get tHead() {
      return wrap(unwrap(this).tHead);
    },
    createTHead() {
      return wrap(unwrap(this).createTHead());
    },
    createTFoot() {
      return wrap(unwrap(this).createTFoot());
    },
    get tFoot() {
      return wrap(unwrap(this).tFoot);
    },
    get tBodies() {
      return wrapHTMLCollection(unwrap(this).tBodies);
    },
    createTBody() {
      return wrap(unwrap(this).createTBody());
    },
    get rows() {
      return wrapHTMLCollection(unwrap(this).rows);
    },
    insertRow(index) {
      return wrap(unwrap(this).insertRow(index));
    },
  });
  registerWrapper(
    OriginalHTMLTableElement,
    HTMLTableElement,
    document.createElement('table')
  );
  scope.wrappers.HTMLTableElement = HTMLTableElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const wrapHTMLCollection = scope.wrapHTMLCollection;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const OriginalHTMLTableSectionElement = window.HTMLTableSectionElement;

  class HTMLTableSectionElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLTableSectionElement.prototype, {
    constructor: HTMLTableSectionElement,
    get rows() {
      return wrapHTMLCollection(unwrap(this).rows);
    },
    insertRow(index) {
      return wrap(unwrap(this).insertRow(index));
    },
  });
  registerWrapper(
    OriginalHTMLTableSectionElement,
    HTMLTableSectionElement,
    document.createElement('thead')
  );
  scope.wrappers.HTMLTableSectionElement = HTMLTableSectionElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const wrapHTMLCollection = scope.wrapHTMLCollection;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const OriginalHTMLTableRowElement = window.HTMLTableRowElement;

  class HTMLTableRowElement extends HTMLElement {
    constructor(node) {
      super(node);
    }
  }

  mixin(HTMLTableRowElement.prototype, {
    get cells() {
      return wrapHTMLCollection(unwrap(this).cells);
    },
    insertCell(index) {
      return wrap(unwrap(this).insertCell(index));
    },
  });
  registerWrapper(
    OriginalHTMLTableRowElement,
    HTMLTableRowElement,
    document.createElement('tr')
  );
  scope.wrappers.HTMLTableRowElement = HTMLTableRowElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLContentElement = scope.wrappers.HTMLContentElement;
  const HTMLElement = scope.wrappers.HTMLElement;
  const HTMLShadowElement = scope.wrappers.HTMLShadowElement;
  const HTMLTemplateElement = scope.wrappers.HTMLTemplateElement;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const OriginalHTMLUnknownElement = window.HTMLUnknownElement;

  class HTMLUnknownElement extends HTMLElement {
    constructor(node) {
      switch (node.localName) {
        case 'content':
          return new HTMLContentElement(node);

        case 'shadow':
          return new HTMLShadowElement(node);

        case 'template':
          return new HTMLTemplateElement(node);
      }
      super(node);
    }
  }

  registerWrapper(OriginalHTMLUnknownElement, HTMLUnknownElement);
  scope.wrappers.HTMLUnknownElement = HTMLUnknownElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const Element = scope.wrappers.Element;
  const HTMLElement = scope.wrappers.HTMLElement;
  const registerWrapper = scope.registerWrapper;
  const defineWrapGetter = scope.defineWrapGetter;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrap = scope.wrap;
  const mixin = scope.mixin;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const OriginalSVGElement = window.SVGElement;
  const svgTitleElement = document.createElementNS(SVG_NS, 'title');
  if (!('classList' in svgTitleElement)) {
    const descr = Object.getOwnPropertyDescriptor(
      Element.prototype,
      'classList'
    );
    Object.defineProperty(HTMLElement.prototype, 'classList', descr);
    delete Element.prototype.classList;
  }

  class SVGElement extends Element {
    constructor(node) {
      super(node);
    }
  }

  mixin(SVGElement.prototype, {
    get ownerSVGElement() {
      return wrap(unsafeUnwrap(this).ownerSVGElement);
    },
  });
  registerWrapper(
    OriginalSVGElement,
    SVGElement,
    document.createElementNS(SVG_NS, 'title')
  );
  scope.wrappers.SVGElement = SVGElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const OriginalSVGUseElement = window.SVGUseElement;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const gWrapper = wrap(document.createElementNS(SVG_NS, 'g'));
  const useElement = document.createElementNS(SVG_NS, 'use');
  const SVGGElement = gWrapper.constructor;
  const parentInterfacePrototype = Object.getPrototypeOf(SVGGElement.prototype);
  const parentInterface = parentInterfacePrototype.constructor;
  function SVGUseElement(impl) {
    parentInterface.call(this, impl);
  }
  SVGUseElement.prototype = Object.create(parentInterfacePrototype);
  if ('instanceRoot' in useElement) {
    mixin(SVGUseElement.prototype, {
      get instanceRoot() {
        return wrap(unwrap(this).instanceRoot);
      },
      get animatedInstanceRoot() {
        return wrap(unwrap(this).animatedInstanceRoot);
      },
    });
  }
  registerWrapper(OriginalSVGUseElement, SVGUseElement, useElement);
  scope.wrappers.SVGUseElement = SVGUseElement;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const EventTarget = scope.wrappers.EventTarget;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const wrap = scope.wrap;
  const OriginalSVGElementInstance = window.SVGElementInstance;
  if (!OriginalSVGElementInstance) return;

  class SVGElementInstance extends EventTarget {
    constructor(impl) {
      super(impl);
    }
  }

  mixin(SVGElementInstance.prototype, {
    get correspondingElement() {
      return wrap(unsafeUnwrap(this).correspondingElement);
    },
    get correspondingUseElement() {
      return wrap(unsafeUnwrap(this).correspondingUseElement);
    },
    get parentNode() {
      return wrap(unsafeUnwrap(this).parentNode);
    },
    get childNodes() {
      throw new Error('Not implemented');
    },
    get firstChild() {
      return wrap(unsafeUnwrap(this).firstChild);
    },
    get lastChild() {
      return wrap(unsafeUnwrap(this).lastChild);
    },
    get previousSibling() {
      return wrap(unsafeUnwrap(this).previousSibling);
    },
    get nextSibling() {
      return wrap(unsafeUnwrap(this).nextSibling);
    },
  });
  registerWrapper(OriginalSVGElementInstance, SVGElementInstance);
  scope.wrappers.SVGElementInstance = SVGElementInstance;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const OriginalCanvasRenderingContext2D = window.CanvasRenderingContext2D;
  function CanvasRenderingContext2D(impl) {
    setWrapper(impl, this);
  }
  mixin(CanvasRenderingContext2D.prototype, {
    get canvas() {
      return wrap(unsafeUnwrap(this).canvas);
    },
    drawImage() {
      arguments[0] = unwrapIfNeeded(arguments[0]);
      unsafeUnwrap(this).drawImage.apply(unsafeUnwrap(this), arguments);
    },
    createPattern() {
      arguments[0] = unwrap(arguments[0]);
      return unsafeUnwrap(this).createPattern.apply(
        unsafeUnwrap(this),
        arguments
      );
    },
  });
  registerWrapper(
    OriginalCanvasRenderingContext2D,
    CanvasRenderingContext2D,
    document.createElement('canvas').getContext('2d')
  );
  scope.wrappers.CanvasRenderingContext2D = CanvasRenderingContext2D;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const addForwardingProperties = scope.addForwardingProperties;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const OriginalWebGLRenderingContext = window.WebGLRenderingContext;
  if (!OriginalWebGLRenderingContext) return;
  function WebGLRenderingContext(impl) {
    setWrapper(impl, this);
  }
  mixin(WebGLRenderingContext.prototype, {
    get canvas() {
      return wrap(unsafeUnwrap(this).canvas);
    },
    texImage2D() {
      arguments[5] = unwrapIfNeeded(arguments[5]);
      unsafeUnwrap(this).texImage2D.apply(unsafeUnwrap(this), arguments);
    },
    texSubImage2D() {
      arguments[6] = unwrapIfNeeded(arguments[6]);
      unsafeUnwrap(this).texSubImage2D.apply(unsafeUnwrap(this), arguments);
    },
  });
  const OriginalWebGLRenderingContextBase = Object.getPrototypeOf(
    OriginalWebGLRenderingContext.prototype
  );
  if (OriginalWebGLRenderingContextBase !== Object.prototype) {
    addForwardingProperties(
      OriginalWebGLRenderingContextBase,
      WebGLRenderingContext.prototype
    );
  }
  const instanceProperties = /WebKit/.test(navigator.userAgent)
    ? {
        drawingBufferHeight: null,
        drawingBufferWidth: null,
      }
    : {};
  registerWrapper(
    OriginalWebGLRenderingContext,
    WebGLRenderingContext,
    instanceProperties
  );
  scope.wrappers.WebGLRenderingContext = WebGLRenderingContext;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const Node = scope.wrappers.Node;
  const GetElementsByInterface = scope.GetElementsByInterface;
  const NonElementParentNodeInterface = scope.NonElementParentNodeInterface;
  const ParentNodeInterface = scope.ParentNodeInterface;
  const SelectorsInterface = scope.SelectorsInterface;
  const mixin = scope.mixin;
  const registerObject = scope.registerObject;
  const registerWrapper = scope.registerWrapper;
  const OriginalDocumentFragment = window.DocumentFragment;

  class DocumentFragment extends Node {
    constructor(node) {
      super(node);
    }
  }

  mixin(DocumentFragment.prototype, ParentNodeInterface);
  mixin(DocumentFragment.prototype, SelectorsInterface);
  mixin(DocumentFragment.prototype, GetElementsByInterface);
  mixin(DocumentFragment.prototype, NonElementParentNodeInterface);
  registerWrapper(
    OriginalDocumentFragment,
    DocumentFragment,
    document.createDocumentFragment()
  );
  scope.wrappers.DocumentFragment = DocumentFragment;
  const Comment = registerObject(document.createComment(''));
  scope.wrappers.Comment = Comment;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const DocumentFragment = scope.wrappers.DocumentFragment;
  const TreeScope = scope.TreeScope;
  const elementFromPoint = scope.elementFromPoint;
  const getInnerHTML = scope.getInnerHTML;
  const getTreeScope = scope.getTreeScope;
  const mixin = scope.mixin;
  const rewrap = scope.rewrap;
  const setInnerHTML = scope.setInnerHTML;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const shadowHostTable = new WeakMap();
  const nextOlderShadowTreeTable = new WeakMap();

  class ShadowRoot extends DocumentFragment {
    constructor(hostWrapper) {
      const node = unwrap(
        unsafeUnwrap(hostWrapper).ownerDocument.createDocumentFragment()
      );
      super(node);
      rewrap(node, this);
      const oldShadowRoot = hostWrapper.shadowRoot;
      nextOlderShadowTreeTable.set(this, oldShadowRoot);
      this.treeScope_ = new TreeScope(
        this,
        getTreeScope(oldShadowRoot || hostWrapper)
      );
      shadowHostTable.set(this, hostWrapper);
    }
  }

  mixin(ShadowRoot.prototype, {
    constructor: ShadowRoot,
    get innerHTML() {
      return getInnerHTML(this);
    },
    set innerHTML(value) {
      setInnerHTML(this, value);
      this.invalidateShadowRenderer();
    },
    get olderShadowRoot() {
      return nextOlderShadowTreeTable.get(this) || null;
    },
    get host() {
      return shadowHostTable.get(this) || null;
    },
    invalidateShadowRenderer() {
      return shadowHostTable.get(this).invalidateShadowRenderer();
    },
    elementFromPoint(x, y) {
      return elementFromPoint(this, this.ownerDocument, x, y);
    },
    getSelection() {
      return document.getSelection();
    },
    get activeElement() {
      const unwrappedActiveElement = unwrap(this).ownerDocument.activeElement;
      if (!unwrappedActiveElement || !unwrappedActiveElement.nodeType)
        return null;
      let activeElement = wrap(unwrappedActiveElement);
      while (!this.contains(activeElement)) {
        while (activeElement.parentNode) {
          activeElement = activeElement.parentNode;
        }
        if (activeElement.host) {
          activeElement = activeElement.host;
        } else {
          return null;
        }
      }
      return activeElement;
    },
  });
  scope.wrappers.ShadowRoot = ShadowRoot;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const getTreeScope = scope.getTreeScope;
  const OriginalRange = window.Range;
  const ShadowRoot = scope.wrappers.ShadowRoot;
  function getHost(node) {
    const root = getTreeScope(node).root;
    if (root instanceof ShadowRoot) {
      return root.host;
    }
    return null;
  }
  function hostNodeToShadowNode(refNode, offset) {
    if (refNode.shadowRoot) {
      offset = Math.min(refNode.childNodes.length - 1, offset);
      const child = refNode.childNodes[offset];
      if (child) {
        const insertionPoint = scope.getDestinationInsertionPoints(child);
        if (insertionPoint.length > 0) {
          const parentNode = insertionPoint[0].parentNode;
          if (parentNode.nodeType == Node.ELEMENT_NODE) {
            refNode = parentNode;
          }
        }
      }
    }
    return refNode;
  }
  function shadowNodeToHostNode(node) {
    node = wrap(node);
    return getHost(node) || node;
  }

  class Range {
    constructor(impl) {
      setWrapper(impl, this);
    }

    get startContainer() {
      return shadowNodeToHostNode(unsafeUnwrap(this).startContainer);
    }

    get endContainer() {
      return shadowNodeToHostNode(unsafeUnwrap(this).endContainer);
    }

    get commonAncestorContainer() {
      return shadowNodeToHostNode(unsafeUnwrap(this).commonAncestorContainer);
    }

    setStart(refNode, offset) {
      refNode = hostNodeToShadowNode(refNode, offset);
      unsafeUnwrap(this).setStart(unwrapIfNeeded(refNode), offset);
    }

    setEnd(refNode, offset) {
      refNode = hostNodeToShadowNode(refNode, offset);
      unsafeUnwrap(this).setEnd(unwrapIfNeeded(refNode), offset);
    }

    setStartBefore(refNode) {
      unsafeUnwrap(this).setStartBefore(unwrapIfNeeded(refNode));
    }

    setStartAfter(refNode) {
      unsafeUnwrap(this).setStartAfter(unwrapIfNeeded(refNode));
    }

    setEndBefore(refNode) {
      unsafeUnwrap(this).setEndBefore(unwrapIfNeeded(refNode));
    }

    setEndAfter(refNode) {
      unsafeUnwrap(this).setEndAfter(unwrapIfNeeded(refNode));
    }

    selectNode(refNode) {
      unsafeUnwrap(this).selectNode(unwrapIfNeeded(refNode));
    }

    selectNodeContents(refNode) {
      unsafeUnwrap(this).selectNodeContents(unwrapIfNeeded(refNode));
    }

    compareBoundaryPoints(how, sourceRange) {
      return unsafeUnwrap(this).compareBoundaryPoints(how, unwrap(sourceRange));
    }

    extractContents() {
      return wrap(unsafeUnwrap(this).extractContents());
    }

    cloneContents() {
      return wrap(unsafeUnwrap(this).cloneContents());
    }

    insertNode(node) {
      unsafeUnwrap(this).insertNode(unwrapIfNeeded(node));
    }

    surroundContents(newParent) {
      unsafeUnwrap(this).surroundContents(unwrapIfNeeded(newParent));
    }

    cloneRange() {
      return wrap(unsafeUnwrap(this).cloneRange());
    }

    isPointInRange(node, offset) {
      return unsafeUnwrap(this).isPointInRange(unwrapIfNeeded(node), offset);
    }

    comparePoint(node, offset) {
      return unsafeUnwrap(this).comparePoint(unwrapIfNeeded(node), offset);
    }

    intersectsNode(node) {
      return unsafeUnwrap(this).intersectsNode(unwrapIfNeeded(node));
    }

    toString() {
      return unsafeUnwrap(this).toString();
    }

    createContextualFragment(html) {
      return wrap(unsafeUnwrap(this).createContextualFragment(html));
    }
  }

  if (OriginalRange.prototype.createContextualFragment) {
  }
  registerWrapper(window.Range, Range, document.createRange());
  scope.wrappers.Range = Range;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const Element = scope.wrappers.Element;
  const HTMLContentElement = scope.wrappers.HTMLContentElement;
  const HTMLShadowElement = scope.wrappers.HTMLShadowElement;
  const Node = scope.wrappers.Node;
  const ShadowRoot = scope.wrappers.ShadowRoot;
  const assert = scope.assert;
  const getTreeScope = scope.getTreeScope;
  const mixin = scope.mixin;
  const oneOf = scope.oneOf;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const ArraySplice = scope.ArraySplice;
  function updateWrapperUpAndSideways(wrapper) {
    wrapper.previousSibling_ = wrapper.previousSibling;
    wrapper.nextSibling_ = wrapper.nextSibling;
    wrapper.parentNode_ = wrapper.parentNode;
  }
  function updateWrapperDown(wrapper) {
    wrapper.firstChild_ = wrapper.firstChild;
    wrapper.lastChild_ = wrapper.lastChild;
  }
  function updateAllChildNodes(parentNodeWrapper) {
    assert(parentNodeWrapper instanceof Node);
    for (
      let childWrapper = parentNodeWrapper.firstChild;
      childWrapper;
      childWrapper = childWrapper.nextSibling
    ) {
      updateWrapperUpAndSideways(childWrapper);
    }
    updateWrapperDown(parentNodeWrapper);
  }
  function insertBefore(parentNodeWrapper, newChildWrapper, refChildWrapper) {
    const parentNode = unwrap(parentNodeWrapper);
    const newChild = unwrap(newChildWrapper);
    const refChild = refChildWrapper ? unwrap(refChildWrapper) : null;
    remove(newChildWrapper);
    updateWrapperUpAndSideways(newChildWrapper);
    if (!refChildWrapper) {
      parentNodeWrapper.lastChild_ = parentNodeWrapper.lastChild;
      if (parentNodeWrapper.lastChild === parentNodeWrapper.firstChild)
        parentNodeWrapper.firstChild_ = parentNodeWrapper.firstChild;
      const lastChildWrapper = wrap(parentNode.lastChild);
      if (lastChildWrapper)
        lastChildWrapper.nextSibling_ = lastChildWrapper.nextSibling;
    } else {
      if (parentNodeWrapper.firstChild === refChildWrapper)
        parentNodeWrapper.firstChild_ = refChildWrapper;
      refChildWrapper.previousSibling_ = refChildWrapper.previousSibling;
    }
    scope.originalInsertBefore.call(parentNode, newChild, refChild);
  }
  function remove(nodeWrapper) {
    const node = unwrap(nodeWrapper);
    const parentNode = node.parentNode;
    if (!parentNode) return;
    const parentNodeWrapper = wrap(parentNode);
    updateWrapperUpAndSideways(nodeWrapper);
    if (nodeWrapper.previousSibling)
      nodeWrapper.previousSibling.nextSibling_ = nodeWrapper;
    if (nodeWrapper.nextSibling)
      nodeWrapper.nextSibling.previousSibling_ = nodeWrapper;
    if (parentNodeWrapper.lastChild === nodeWrapper)
      parentNodeWrapper.lastChild_ = nodeWrapper;
    if (parentNodeWrapper.firstChild === nodeWrapper)
      parentNodeWrapper.firstChild_ = nodeWrapper;
    scope.originalRemoveChild.call(parentNode, node);
  }
  const distributedNodesTable = new WeakMap();
  const destinationInsertionPointsTable = new WeakMap();
  const rendererForHostTable = new WeakMap();
  function resetDistributedNodes(insertionPoint) {
    distributedNodesTable.set(insertionPoint, []);
  }
  function getDistributedNodes(insertionPoint) {
    let rv = distributedNodesTable.get(insertionPoint);
    if (!rv) distributedNodesTable.set(insertionPoint, (rv = []));
    return rv;
  }
  function getChildNodesSnapshot(node) {
    const result = [];
    let i = 0;
    for (let child = node.firstChild; child; child = child.nextSibling) {
      result[i++] = child;
    }
    return result;
  }
  const request = oneOf(window, [
    'requestAnimationFrame',
    'mozRequestAnimationFrame',
    'webkitRequestAnimationFrame',
    'setTimeout',
  ]);
  let pendingDirtyRenderers = [];
  let renderTimer;
  function renderAllPending() {
    for (let i = 0; i < pendingDirtyRenderers.length; i++) {
      const renderer = pendingDirtyRenderers[i];
      const parentRenderer = renderer.parentRenderer;
      if (parentRenderer && parentRenderer.dirty) continue;
      renderer.render();
    }
    pendingDirtyRenderers = [];
  }
  function handleRequestAnimationFrame() {
    renderTimer = null;
    renderAllPending();
  }
  function getRendererForHost(host) {
    let renderer = rendererForHostTable.get(host);
    if (!renderer) {
      renderer = new ShadowRenderer(host);
      rendererForHostTable.set(host, renderer);
    }
    return renderer;
  }
  function getShadowRootAncestor(node) {
    const root = getTreeScope(node).root;
    if (root instanceof ShadowRoot) return root;
    return null;
  }
  function getRendererForShadowRoot(shadowRoot) {
    return getRendererForHost(shadowRoot.host);
  }
  const spliceDiff = new ArraySplice();
  spliceDiff.equals = (renderNode, rawNode) => {
    return unwrap(renderNode.node) === rawNode;
  };

  class RenderNode {
    constructor(node) {
      this.skip = false;
      this.node = node;
      this.childNodes = [];
    }

    append(node) {
      const rv = new RenderNode(node);
      this.childNodes.push(rv);
      return rv;
    }

    sync(opt_added) {
      if (this.skip) return;
      const nodeWrapper = this.node;
      const newChildren = this.childNodes;
      const oldChildren = getChildNodesSnapshot(unwrap(nodeWrapper));
      const added = opt_added || new WeakMap();
      const splices = spliceDiff.calculateSplices(newChildren, oldChildren);
      let newIndex = 0,
        oldIndex = 0;
      let lastIndex = 0;
      for (var i = 0; i < splices.length; i++) {
        const splice = splices[i];
        for (; lastIndex < splice.index; lastIndex++) {
          oldIndex++;
          newChildren[newIndex++].sync(added);
        }
        const removedCount = splice.removed.length;
        for (var j = 0; j < removedCount; j++) {
          const wrapper = wrap(oldChildren[oldIndex++]);
          if (!added.get(wrapper)) remove(wrapper);
        }
        const addedCount = splice.addedCount;
        const refNode = oldChildren[oldIndex] && wrap(oldChildren[oldIndex]);
        for (var j = 0; j < addedCount; j++) {
          const newChildRenderNode = newChildren[newIndex++];
          const newChildWrapper = newChildRenderNode.node;
          insertBefore(nodeWrapper, newChildWrapper, refNode);
          added.set(newChildWrapper, true);
          newChildRenderNode.sync(added);
        }
        lastIndex += addedCount;
      }
      for (var i = lastIndex; i < newChildren.length; i++) {
        newChildren[i].sync(added);
      }
    }
  }

  class ShadowRenderer {
    constructor(host) {
      this.host = host;
      this.dirty = false;
      this.invalidateAttributes();
      this.associateNode(host);
    }

    render(opt_renderNode) {
      if (!this.dirty) return;
      this.invalidateAttributes();
      const host = this.host;
      this.distribution(host);
      const renderNode = opt_renderNode || new RenderNode(host);
      this.buildRenderTree(renderNode, host);
      const topMostRenderer = !opt_renderNode;
      if (topMostRenderer) renderNode.sync();
      this.dirty = false;
    }

    get parentRenderer() {
      return getTreeScope(this.host).renderer;
    }

    invalidate() {
      if (!this.dirty) {
        this.dirty = true;
        const parentRenderer = this.parentRenderer;
        if (parentRenderer) parentRenderer.invalidate();
        pendingDirtyRenderers.push(this);
        if (renderTimer) return;
        renderTimer = window[request](handleRequestAnimationFrame, 0);
      }
    }

    distribution(root) {
      this.resetAllSubtrees(root);
      this.distributionResolution(root);
    }

    resetAll(node) {
      if (isInsertionPoint(node)) resetDistributedNodes(node);
      else resetDestinationInsertionPoints(node);
      this.resetAllSubtrees(node);
    }

    resetAllSubtrees(node) {
      for (let child = node.firstChild; child; child = child.nextSibling) {
        this.resetAll(child);
      }
      if (node.shadowRoot) this.resetAll(node.shadowRoot);
      if (node.olderShadowRoot) this.resetAll(node.olderShadowRoot);
    }

    distributionResolution(node) {
      if (isShadowHost(node)) {
        const shadowHost = node;
        let pool = poolPopulation(shadowHost);
        const shadowTrees = getShadowTrees(shadowHost);
        for (var i = 0; i < shadowTrees.length; i++) {
          this.poolDistribution(shadowTrees[i], pool);
        }
        for (var i = shadowTrees.length - 1; i >= 0; i--) {
          const shadowTree = shadowTrees[i];
          const shadow = getShadowInsertionPoint(shadowTree);
          if (shadow) {
            const olderShadowRoot = shadowTree.olderShadowRoot;
            if (olderShadowRoot) {
              pool = poolPopulation(olderShadowRoot);
            }
            for (let j = 0; j < pool.length; j++) {
              destributeNodeInto(pool[j], shadow);
            }
          }
          this.distributionResolution(shadowTree);
        }
      }
      for (let child = node.firstChild; child; child = child.nextSibling) {
        this.distributionResolution(child);
      }
    }

    poolDistribution(node, pool) {
      if (node instanceof HTMLShadowElement) return;
      if (node instanceof HTMLContentElement) {
        const content = node;
        this.updateDependentAttributes(content.getAttribute('select'));
        let anyDistributed = false;
        for (let i = 0; i < pool.length; i++) {
          var node = pool[i];
          if (!node) continue;
          if (matches(node, content)) {
            destributeNodeInto(node, content);
            pool[i] = undefined;
            anyDistributed = true;
          }
        }
        if (!anyDistributed) {
          for (
            var child = content.firstChild;
            child;
            child = child.nextSibling
          ) {
            destributeNodeInto(child, content);
          }
        }
        return;
      }
      for (var child = node.firstChild; child; child = child.nextSibling) {
        this.poolDistribution(child, pool);
      }
    }

    buildRenderTree(renderNode, node) {
      const children = this.compose(node);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childRenderNode = renderNode.append(child);
        this.buildRenderTree(childRenderNode, child);
      }
      if (isShadowHost(node)) {
        const renderer = getRendererForHost(node);
        renderer.dirty = false;
      }
    }

    compose(node) {
      const children = [];
      const p = node.shadowRoot || node;
      for (let child = p.firstChild; child; child = child.nextSibling) {
        if (isInsertionPoint(child)) {
          this.associateNode(p);
          const distributedNodes = getDistributedNodes(child);
          for (let j = 0; j < distributedNodes.length; j++) {
            const distributedNode = distributedNodes[j];
            if (isFinalDestination(child, distributedNode))
              children.push(distributedNode);
          }
        } else {
          children.push(child);
        }
      }
      return children;
    }

    invalidateAttributes() {
      this.attributes = Object.create(null);
    }

    updateDependentAttributes(selector) {
      if (!selector) return;
      const attributes = this.attributes;
      if (/\.\w+/.test(selector)) attributes['class'] = true;
      if (/#\w+/.test(selector)) attributes['id'] = true;
      selector.replace(/\[\s*([^\s=\|~\]]+)/g, (_, name) => {
        attributes[name] = true;
      });
    }

    dependsOnAttribute(name) {
      return this.attributes[name];
    }

    associateNode(node) {
      unsafeUnwrap(node).polymerShadowRenderer_ = this;
    }
  }

  function poolPopulation(node) {
    const pool = [];
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (isInsertionPoint(child)) {
        pool.push.apply(pool, getDistributedNodes(child));
      } else {
        pool.push(child);
      }
    }
    return pool;
  }
  function getShadowInsertionPoint(node) {
    if (node instanceof HTMLShadowElement) return node;
    if (node instanceof HTMLContentElement) return null;
    for (let child = node.firstChild; child; child = child.nextSibling) {
      const res = getShadowInsertionPoint(child);
      if (res) return res;
    }
    return null;
  }
  function destributeNodeInto(child, insertionPoint) {
    getDistributedNodes(insertionPoint).push(child);
    const points = destinationInsertionPointsTable.get(child);
    if (!points) destinationInsertionPointsTable.set(child, [insertionPoint]);
    else points.push(insertionPoint);
  }
  function getDestinationInsertionPoints(node) {
    return destinationInsertionPointsTable.get(node);
  }
  function resetDestinationInsertionPoints(node) {
    destinationInsertionPointsTable.set(node, undefined);
  }
  const selectorStartCharRe = /^(:not\()?[*.#[a-zA-Z_|]/;
  function matches(node, contentElement) {
    let select = contentElement.getAttribute('select');
    if (!select) return true;
    select = select.trim();
    if (!select) return true;
    if (!(node instanceof Element)) return false;
    if (!selectorStartCharRe.test(select)) return false;
    try {
      return node.matches(select);
    } catch (ex) {
      return false;
    }
  }
  function isFinalDestination(insertionPoint, node) {
    const points = getDestinationInsertionPoints(node);
    return points && points[points.length - 1] === insertionPoint;
  }
  function isInsertionPoint(node) {
    return (
      node instanceof HTMLContentElement || node instanceof HTMLShadowElement
    );
  }
  function isShadowHost(shadowHost) {
    return shadowHost.shadowRoot;
  }
  function getShadowTrees(host) {
    const trees = [];
    for (let tree = host.shadowRoot; tree; tree = tree.olderShadowRoot) {
      trees.push(tree);
    }
    return trees;
  }
  function render(host) {
    new ShadowRenderer(host).render();
  }
  HTMLContentElement.prototype.getDistributedNodes =
    HTMLShadowElement.prototype.getDistributedNodes = function () {
      renderAllPending();
      return getDistributedNodes(this);
    };
  HTMLContentElement.prototype.nodeIsInserted_ =
    HTMLShadowElement.prototype.nodeIsInserted_ = function () {
      this.invalidateShadowRenderer();
      const shadowRoot = getShadowRootAncestor(this);
      let renderer;
      if (shadowRoot) renderer = getRendererForShadowRoot(shadowRoot);
      unsafeUnwrap(this).polymerShadowRenderer_ = renderer;
      if (renderer) renderer.invalidate();
    };
  scope.getRendererForHost = getRendererForHost;
  scope.getShadowTrees = getShadowTrees;
  scope.renderAllPending = renderAllPending;
  scope.getDestinationInsertionPoints = getDestinationInsertionPoints;
  scope.visual = {
    insertBefore: insertBefore,
    remove: remove,
  };
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const HTMLElement = scope.wrappers.HTMLElement;
  const assert = scope.assert;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const elementsWithFormProperty = [
    'HTMLButtonElement',
    'HTMLFieldSetElement',
    'HTMLInputElement',
    'HTMLKeygenElement',
    'HTMLLabelElement',
    'HTMLLegendElement',
    'HTMLObjectElement',
    'HTMLOutputElement',
    'HTMLTextAreaElement',
  ];
  function createWrapperConstructor(name) {
    if (!window[name]) return;
    assert(!scope.wrappers[name]);

    class GeneratedWrapper extends HTMLElement {
      constructor(node) {
        super(node);
      }
    }

    mixin(GeneratedWrapper.prototype, {
      get form() {
        return wrap(unwrap(this).form);
      },
    });
    registerWrapper(
      window[name],
      GeneratedWrapper,
      document.createElement(name.slice(4, -7))
    );
    scope.wrappers[name] = GeneratedWrapper;
  }
  elementsWithFormProperty.forEach(createWrapperConstructor);
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const OriginalSelection = window.Selection;

  class Selection {
    constructor(impl) {
      setWrapper(impl, this);
    }

    get anchorNode() {
      return wrap(unsafeUnwrap(this).anchorNode);
    }

    get focusNode() {
      return wrap(unsafeUnwrap(this).focusNode);
    }

    addRange(range) {
      unsafeUnwrap(this).addRange(unwrapIfNeeded(range));
    }

    collapse(node, index) {
      unsafeUnwrap(this).collapse(unwrapIfNeeded(node), index);
    }

    containsNode(node, allowPartial) {
      return unsafeUnwrap(this).containsNode(
        unwrapIfNeeded(node),
        allowPartial
      );
    }

    getRangeAt(index) {
      return wrap(unsafeUnwrap(this).getRangeAt(index));
    }

    removeRange(range) {
      unsafeUnwrap(this).removeRange(unwrap(range));
    }

    selectAllChildren(node) {
      unsafeUnwrap(this).selectAllChildren(
        node instanceof ShadowRoot
          ? unsafeUnwrap(node.host)
          : unwrapIfNeeded(node)
      );
    }

    toString() {
      return unsafeUnwrap(this).toString();
    }

    extend(node, offset) {
      unsafeUnwrap(this).extend(unwrapIfNeeded(node), offset);
    }
  }

  if (OriginalSelection.prototype.extend) {
  }
  registerWrapper(window.Selection, Selection, window.getSelection());
  scope.wrappers.Selection = Selection;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const OriginalTreeWalker = window.TreeWalker;

  class TreeWalker {
    constructor(impl) {
      setWrapper(impl, this);
    }

    get root() {
      return wrap(unsafeUnwrap(this).root);
    }

    get currentNode() {
      return wrap(unsafeUnwrap(this).currentNode);
    }

    set currentNode(node) {
      unsafeUnwrap(this).currentNode = unwrapIfNeeded(node);
    }

    get filter() {
      return unsafeUnwrap(this).filter;
    }

    parentNode() {
      return wrap(unsafeUnwrap(this).parentNode());
    }

    firstChild() {
      return wrap(unsafeUnwrap(this).firstChild());
    }

    lastChild() {
      return wrap(unsafeUnwrap(this).lastChild());
    }

    previousSibling() {
      return wrap(unsafeUnwrap(this).previousSibling());
    }

    previousNode() {
      return wrap(unsafeUnwrap(this).previousNode());
    }

    nextNode() {
      return wrap(unsafeUnwrap(this).nextNode());
    }
  }

  registerWrapper(OriginalTreeWalker, TreeWalker);
  scope.wrappers.TreeWalker = TreeWalker;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const GetElementsByInterface = scope.GetElementsByInterface;
  const Node = scope.wrappers.Node;
  const ParentNodeInterface = scope.ParentNodeInterface;
  const NonElementParentNodeInterface = scope.NonElementParentNodeInterface;
  const Selection = scope.wrappers.Selection;
  const SelectorsInterface = scope.SelectorsInterface;
  const ShadowRoot = scope.wrappers.ShadowRoot;
  const TreeScope = scope.TreeScope;
  const cloneNode = scope.cloneNode;
  const defineGetter = scope.defineGetter;
  const defineWrapGetter = scope.defineWrapGetter;
  const elementFromPoint = scope.elementFromPoint;
  const forwardMethodsToWrapper = scope.forwardMethodsToWrapper;
  const matchesNames = scope.matchesNames;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const renderAllPending = scope.renderAllPending;
  const rewrap = scope.rewrap;
  const setWrapper = scope.setWrapper;
  const unsafeUnwrap = scope.unsafeUnwrap;
  const unwrap = scope.unwrap;
  const wrap = scope.wrap;
  const wrapEventTargetMethods = scope.wrapEventTargetMethods;
  const wrapNodeList = scope.wrapNodeList;
  const implementationTable = new WeakMap();

  class Document extends Node {
    constructor(node) {
      super(node);
      this.treeScope_ = new TreeScope(this, null);
    }

    createTreeWalker(root, whatToShow, filter, expandEntityReferences) {
      let newFilter = null;
      if (filter) {
        if (filter.acceptNode && typeof filter.acceptNode === 'function') {
          newFilter = {
            acceptNode(node) {
              return filter.acceptNode(wrap(node));
            },
          };
        } else if (typeof filter === 'function') {
          newFilter = (node) => {
            return filter(wrap(node));
          };
        }
      }
      return new TreeWalkerWrapper(
        originalCreateTreeWalker.call(
          unwrap(this),
          unwrap(root),
          whatToShow,
          newFilter,
          expandEntityReferences
        )
      );
    }

    registerElement(tagName, object) {
      let prototype, extendsOption;
      if (object !== undefined) {
        prototype = object.prototype;
        extendsOption = object.extends;
      }
      if (!prototype) prototype = Object.create(HTMLElement.prototype);
      if (scope.nativePrototypeTable.get(prototype)) {
        throw new Error('NotSupportedError');
      }
      let proto = Object.getPrototypeOf(prototype);
      let nativePrototype;
      const prototypes = [];
      while (proto) {
        nativePrototype = scope.nativePrototypeTable.get(proto);
        if (nativePrototype) break;
        prototypes.push(proto);
        proto = Object.getPrototypeOf(proto);
      }
      if (!nativePrototype) {
        throw new Error('NotSupportedError');
      }
      let newPrototype = Object.create(nativePrototype);
      for (let i = prototypes.length - 1; i >= 0; i--) {
        newPrototype = Object.create(newPrototype);
      }
      [
        'createdCallback',
        'attachedCallback',
        'detachedCallback',
        'attributeChangedCallback',
      ].forEach((name) => {
        const f = prototype[name];
        if (!f) return;
        newPrototype[name] = function () {
          if (!(wrap(this) instanceof CustomElementConstructor)) {
            rewrap(this);
          }
          f.apply(wrap(this), arguments);
        };
      });
      const p = {
        prototype: newPrototype,
      };
      if (extendsOption) p.extends = extendsOption;
      function CustomElementConstructor(node) {
        if (!node) {
          if (extendsOption) {
            return document.createElement(extendsOption, tagName);
          } else {
            return document.createElement(tagName);
          }
        }
        setWrapper(node, this);
      }
      CustomElementConstructor.prototype = prototype;
      CustomElementConstructor.prototype.constructor = CustomElementConstructor;
      scope.constructorTable.set(newPrototype, CustomElementConstructor);
      scope.nativePrototypeTable.set(prototype, newPrototype);
      const nativeConstructor = originalRegisterElement.call(
        unwrap(this),
        tagName,
        p
      );
      return CustomElementConstructor;
    }
  }

  defineWrapGetter(Document, 'documentElement');
  defineWrapGetter(Document, 'body');
  defineWrapGetter(Document, 'head');
  defineGetter(Document, 'activeElement', function () {
    const unwrappedActiveElement = unwrap(this).activeElement;
    if (!unwrappedActiveElement || !unwrappedActiveElement.nodeType)
      return null;
    let activeElement = wrap(unwrappedActiveElement);
    while (!this.contains(activeElement)) {
      while (activeElement.parentNode) {
        activeElement = activeElement.parentNode;
      }
      if (activeElement.host) {
        activeElement = activeElement.host;
      } else {
        return null;
      }
    }
    return activeElement;
  });
  function wrapMethod(name) {
    const original = document[name];
    Document.prototype[name] = function () {
      return wrap(original.apply(unsafeUnwrap(this), arguments));
    };
  }
  [
    'createComment',
    'createDocumentFragment',
    'createElement',
    'createElementNS',
    'createEvent',
    'createEventNS',
    'createRange',
    'createTextNode',
  ].forEach(wrapMethod);
  const originalAdoptNode = document.adoptNode;
  function adoptNodeNoRemove(node, doc) {
    originalAdoptNode.call(unsafeUnwrap(doc), unwrap(node));
    adoptSubtree(node, doc);
  }
  function adoptSubtree(node, doc) {
    if (node.shadowRoot) doc.adoptNode(node.shadowRoot);
    if (node instanceof ShadowRoot) adoptOlderShadowRoots(node, doc);
    for (let child = node.firstChild; child; child = child.nextSibling) {
      adoptSubtree(child, doc);
    }
  }
  function adoptOlderShadowRoots(shadowRoot, doc) {
    const oldShadowRoot = shadowRoot.olderShadowRoot;
    if (oldShadowRoot) doc.adoptNode(oldShadowRoot);
  }
  const originalGetSelection = document.getSelection;
  mixin(Document.prototype, {
    adoptNode(node) {
      if (node.parentNode) node.parentNode.removeChild(node);
      adoptNodeNoRemove(node, this);
      return node;
    },
    elementFromPoint(x, y) {
      return elementFromPoint(this, this, x, y);
    },
    importNode(node, deep) {
      return cloneNode(node, deep, unsafeUnwrap(this));
    },
    getSelection() {
      renderAllPending();
      return new Selection(originalGetSelection.call(unwrap(this)));
    },
    getElementsByName(name) {
      return SelectorsInterface.querySelectorAll.call(
        this,
        '[name=' + JSON.stringify(String(name)) + ']'
      );
    },
  });
  var originalCreateTreeWalker = document.createTreeWalker;
  var TreeWalkerWrapper = scope.wrappers.TreeWalker;
  if (document.registerElement) {
    var originalRegisterElement = document.registerElement;
    forwardMethodsToWrapper(
      [window.HTMLDocument || window.Document],
      ['registerElement']
    );
  }
  forwardMethodsToWrapper(
    [
      window.HTMLBodyElement,
      window.HTMLDocument || window.Document,
      window.HTMLHeadElement,
      window.HTMLHtmlElement,
    ],
    [
      'appendChild',
      'compareDocumentPosition',
      'contains',
      'getElementsByClassName',
      'getElementsByTagName',
      'getElementsByTagNameNS',
      'insertBefore',
      'querySelector',
      'querySelectorAll',
      'removeChild',
      'replaceChild',
    ]
  );
  forwardMethodsToWrapper(
    [window.HTMLBodyElement, window.HTMLHeadElement, window.HTMLHtmlElement],
    matchesNames
  );
  forwardMethodsToWrapper(
    [window.HTMLDocument || window.Document],
    [
      'adoptNode',
      'importNode',
      'contains',
      'createComment',
      'createDocumentFragment',
      'createElement',
      'createElementNS',
      'createEvent',
      'createEventNS',
      'createRange',
      'createTextNode',
      'createTreeWalker',
      'elementFromPoint',
      'getElementById',
      'getElementsByName',
      'getSelection',
    ]
  );
  mixin(Document.prototype, GetElementsByInterface);
  mixin(Document.prototype, ParentNodeInterface);
  mixin(Document.prototype, SelectorsInterface);
  mixin(Document.prototype, NonElementParentNodeInterface);
  mixin(Document.prototype, {
    get implementation() {
      let implementation = implementationTable.get(this);
      if (implementation) return implementation;
      implementation = new DOMImplementation(unwrap(this).implementation);
      implementationTable.set(this, implementation);
      return implementation;
    },
    get defaultView() {
      return wrap(unwrap(this).defaultView);
    },
  });
  registerWrapper(
    window.Document,
    Document,
    document.implementation.createHTMLDocument('')
  );
  if (window.HTMLDocument) registerWrapper(window.HTMLDocument, Document);
  wrapEventTargetMethods([
    window.HTMLBodyElement,
    window.HTMLDocument || window.Document,
    window.HTMLHeadElement,
  ]);

  class DOMImplementation {
    constructor(impl) {
      setWrapper(impl, this);
    }

    createDocument() {
      arguments[2] = unwrap(arguments[2]);
      return wrap(originalCreateDocument.apply(unsafeUnwrap(this), arguments));
    }
  }

  var originalCreateDocument = document.implementation.createDocument;
  function wrapImplMethod(constructor, name) {
    const original = document.implementation[name];
    constructor.prototype[name] = function () {
      return wrap(original.apply(unsafeUnwrap(this), arguments));
    };
  }
  function forwardImplMethod(constructor, name) {
    const original = document.implementation[name];
    constructor.prototype[name] = function () {
      return original.apply(unsafeUnwrap(this), arguments);
    };
  }
  wrapImplMethod(DOMImplementation, 'createDocumentType');
  wrapImplMethod(DOMImplementation, 'createHTMLDocument');
  forwardImplMethod(DOMImplementation, 'hasFeature');
  registerWrapper(window.DOMImplementation, DOMImplementation);
  forwardMethodsToWrapper(
    [window.DOMImplementation],
    ['createDocument', 'createDocumentType', 'createHTMLDocument', 'hasFeature']
  );
  scope.adoptNodeNoRemove = adoptNodeNoRemove;
  scope.wrappers.DOMImplementation = DOMImplementation;
  scope.wrappers.Document = Document;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const EventTarget = scope.wrappers.EventTarget;
  const Selection = scope.wrappers.Selection;
  const mixin = scope.mixin;
  const registerWrapper = scope.registerWrapper;
  const renderAllPending = scope.renderAllPending;
  const unwrap = scope.unwrap;
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const wrap = scope.wrap;
  const OriginalWindow = window.Window;
  const originalGetComputedStyle = window.getComputedStyle;
  const originalGetDefaultComputedStyle = window.getDefaultComputedStyle;
  const originalGetSelection = window.getSelection;

  class Window extends EventTarget {
    constructor(impl) {
      super(impl);
    }

    getDefaultComputedStyle(el, pseudo) {
      renderAllPending();
      return originalGetDefaultComputedStyle.call(
        unwrap(this),
        unwrapIfNeeded(el),
        pseudo
      );
    }
  }

  OriginalWindow.prototype.getComputedStyle = function (el, pseudo) {
    return wrap(this || window).getComputedStyle(unwrapIfNeeded(el), pseudo);
  };
  if (originalGetDefaultComputedStyle) {
    OriginalWindow.prototype.getDefaultComputedStyle = function (el, pseudo) {
      return wrap(this || window).getDefaultComputedStyle(
        unwrapIfNeeded(el),
        pseudo
      );
    };
  }
  OriginalWindow.prototype.getSelection = function () {
    return wrap(this || window).getSelection();
  };
  delete window.getComputedStyle;
  delete window.getDefaultComputedStyle;
  delete window.getSelection;
  ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(
    (name) => {
      OriginalWindow.prototype[name] = function () {
        const w = wrap(this || window);
        return w[name].apply(w, arguments);
      };
      delete window[name];
    }
  );
  mixin(Window.prototype, {
    getComputedStyle(el, pseudo) {
      renderAllPending();
      return originalGetComputedStyle.call(
        unwrap(this),
        unwrapIfNeeded(el),
        pseudo
      );
    },
    getSelection() {
      renderAllPending();
      return new Selection(originalGetSelection.call(unwrap(this)));
    },
    get document() {
      return wrap(unwrap(this).document);
    },
  });
  if (originalGetDefaultComputedStyle) {
  }
  registerWrapper(OriginalWindow, Window, window);
  scope.wrappers.Window = Window;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const unwrap = scope.unwrap;
  const OriginalDataTransfer = window.DataTransfer || window.Clipboard;
  const OriginalDataTransferSetDragImage =
    OriginalDataTransfer.prototype.setDragImage;
  if (OriginalDataTransferSetDragImage) {
    OriginalDataTransfer.prototype.setDragImage = function (image, x, y) {
      OriginalDataTransferSetDragImage.call(this, unwrap(image), x, y);
    };
  }
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const registerWrapper = scope.registerWrapper;
  const setWrapper = scope.setWrapper;
  const unwrap = scope.unwrap;
  const OriginalFormData = window.FormData;
  if (!OriginalFormData) return;
  function FormData(formElement) {
    let impl;
    if (formElement instanceof OriginalFormData) {
      impl = formElement;
    } else {
      impl = new OriginalFormData(formElement && unwrap(formElement));
    }
    setWrapper(impl, this);
  }
  registerWrapper(OriginalFormData, FormData, new OriginalFormData());
  scope.wrappers.FormData = FormData;
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const unwrapIfNeeded = scope.unwrapIfNeeded;
  const originalSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (obj) {
    return originalSend.call(this, unwrapIfNeeded(obj));
  };
})(window.ShadowDOMPolyfill);

((scope) => {
  'use strict';
  const isWrapperFor = scope.isWrapperFor;
  const elements = {
    a: 'HTMLAnchorElement',
    area: 'HTMLAreaElement',
    audio: 'HTMLAudioElement',
    base: 'HTMLBaseElement',
    body: 'HTMLBodyElement',
    br: 'HTMLBRElement',
    button: 'HTMLButtonElement',
    canvas: 'HTMLCanvasElement',
    caption: 'HTMLTableCaptionElement',
    col: 'HTMLTableColElement',
    content: 'HTMLContentElement',
    data: 'HTMLDataElement',
    datalist: 'HTMLDataListElement',
    del: 'HTMLModElement',
    dir: 'HTMLDirectoryElement',
    div: 'HTMLDivElement',
    dl: 'HTMLDListElement',
    embed: 'HTMLEmbedElement',
    fieldset: 'HTMLFieldSetElement',
    font: 'HTMLFontElement',
    form: 'HTMLFormElement',
    frame: 'HTMLFrameElement',
    frameset: 'HTMLFrameSetElement',
    h1: 'HTMLHeadingElement',
    head: 'HTMLHeadElement',
    hr: 'HTMLHRElement',
    html: 'HTMLHtmlElement',
    iframe: 'HTMLIFrameElement',
    img: 'HTMLImageElement',
    input: 'HTMLInputElement',
    keygen: 'HTMLKeygenElement',
    label: 'HTMLLabelElement',
    legend: 'HTMLLegendElement',
    li: 'HTMLLIElement',
    link: 'HTMLLinkElement',
    map: 'HTMLMapElement',
    marquee: 'HTMLMarqueeElement',
    menu: 'HTMLMenuElement',
    menuitem: 'HTMLMenuItemElement',
    meta: 'HTMLMetaElement',
    meter: 'HTMLMeterElement',
    object: 'HTMLObjectElement',
    ol: 'HTMLOListElement',
    optgroup: 'HTMLOptGroupElement',
    option: 'HTMLOptionElement',
    output: 'HTMLOutputElement',
    p: 'HTMLParagraphElement',
    param: 'HTMLParamElement',
    pre: 'HTMLPreElement',
    progress: 'HTMLProgressElement',
    q: 'HTMLQuoteElement',
    script: 'HTMLScriptElement',
    select: 'HTMLSelectElement',
    shadow: 'HTMLShadowElement',
    source: 'HTMLSourceElement',
    span: 'HTMLSpanElement',
    style: 'HTMLStyleElement',
    table: 'HTMLTableElement',
    tbody: 'HTMLTableSectionElement',
    template: 'HTMLTemplateElement',
    textarea: 'HTMLTextAreaElement',
    thead: 'HTMLTableSectionElement',
    time: 'HTMLTimeElement',
    title: 'HTMLTitleElement',
    tr: 'HTMLTableRowElement',
    track: 'HTMLTrackElement',
    ul: 'HTMLUListElement',
    video: 'HTMLVideoElement',
  };
  function overrideConstructor(tagName) {
    const nativeConstructorName = elements[tagName];
    const nativeConstructor = window[nativeConstructorName];
    if (!nativeConstructor) return;
    const element = document.createElement(tagName);
    const wrapperConstructor = element.constructor;
    window[nativeConstructorName] = wrapperConstructor;
  }
  Object.keys(elements).forEach(overrideConstructor);
  Object.getOwnPropertyNames(scope.wrappers).forEach((name) => {
    window[name] = scope.wrappers[name];
  });
})(window.ShadowDOMPolyfill);
