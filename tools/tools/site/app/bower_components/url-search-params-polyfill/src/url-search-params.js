"use strict";

function encode(str) {
  return encodeURIComponent(str).replace(find, replacer);
}

function decode(str) {
  return decodeURIComponent(str.replace(plus, " "));
}

function URLSearchParams(query) {
  this[secret] = Object.create(null);
  if (!query) return;
  for (
    let index,
      value,
      pairs = (query || "").split("&"),
      i = 0,
      length = pairs.length;
    i < length;
    i++
  ) {
    value = pairs[i];
    index = value.indexOf("=");
    if (-1 < index) {
      this.append(
        decode(value.slice(0, index)),
        decode(value.slice(index + 1))
      );
    }
  }
}

const URLSearchParamsProto = URLSearchParams.prototype;
var find = /[!'\(\)~]|%20|%00/g;
var plus = /\+/g;

const replace = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
  "%00": "\x00",
};

var replacer = (match) => {
  return replace[match];
};

const iterable = isIterable();
var secret = "__URLSearchParams__:" + Math.random();
function isIterable() {
  try {
    return !!Symbol.iterator;
  } catch (error) {
    return false;
  }
}

URLSearchParamsProto.append = function append(name, value) {
  const dict = this[secret];
  if (name in dict) {
    dict[name].push("" + value);
  } else {
    dict[name] = ["" + value];
  }
};

URLSearchParamsProto.delete = function del(name) {
  delete this[secret][name];
};

URLSearchParamsProto.get = function get(name) {
  const dict = this[secret];
  return name in dict ? dict[name][0] : null;
};

URLSearchParamsProto.getAll = function getAll(name) {
  const dict = this[secret];
  return name in dict ? dict[name].slice(0) : [];
};

URLSearchParamsProto.has = function has(name) {
  return name in this[secret];
};

URLSearchParamsProto.set = function set(name, value) {
  this[secret][name] = ["" + value];
};

URLSearchParamsProto.forEach = function forEach(callback, thisArg) {
  const dict = this[secret];
  Object.getOwnPropertyNames(dict).forEach(function (name) {
    dict[name].forEach(function (value) {
      callback.call(thisArg, value, name, this);
    }, this);
  }, this);
};

URLSearchParamsProto.keys = function keys() {
  const items = [];
  this.forEach((value, name) => {
    items.push(name);
  });
  const iterator = {
    next() {
      const value = items.shift();
      return { done: value === undefined, value: value };
    },
  };

  if (iterable) {
    iterator[Symbol.iterator] = () => {
      return iterator;
    };
  }

  return iterator;
};

URLSearchParamsProto.values = function values() {
  const items = [];
  this.forEach((value) => {
    items.push(value);
  });
  const iterator = {
    next() {
      const value = items.shift();
      return { done: value === undefined, value: value };
    },
  };

  if (iterable) {
    iterator[Symbol.iterator] = () => {
      return iterator;
    };
  }

  return iterator;
};

URLSearchParamsProto.entries = function entries() {
  const items = [];
  this.forEach((value, name) => {
    items.push([name, value]);
  });
  const iterator = {
    next() {
      const value = items.shift();
      return { done: value === undefined, value: value };
    },
  };

  if (iterable) {
    iterator[Symbol.iterator] = () => {
      return iterator;
    };
  }

  return iterator;
};

if (iterable) {
  URLSearchParamsProto[Symbol.iterator] = URLSearchParamsProto.entries;
}

/*
URLSearchParamsProto.toBody = function() {
  return new Blob(
    [this.toString()],
    {type: 'application/x-www-form-urlencoded'}
  );
};
*/

URLSearchParamsProto.toJSON = function toJSON() {
  return {};
};

URLSearchParamsProto.toString = function toString() {
  const dict = this[secret];
  const query = [];
  let i;
  let key;
  let name;
  let value;
  for (key in dict) {
    name = encode(key);
    for (i = 0, value = dict[key]; i < value.length; i++) {
      query.push(name + "=" + encode(value[i]));
    }
  }
  return query.join("&");
};
