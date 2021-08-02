/*! (C) WebReflection Mit Style License */
define(() => {
  "use strict";
  function e(e) {
    return encodeURIComponent(e).replace(i, u);
  }
  function t(e) {
    return decodeURIComponent(e.replace(s, " "));
  }
  function n(e) {
    this[f] = Object.create(null);
    if (!e) return;
    for (let n, r, i = (e || "").split("&"), s = 0, o = i.length; s < o; s++)
      (r = i[s]),
        (n = r.indexOf("=")),
        -1 < n && this.append(t(r.slice(0, n)), t(r.slice(n + 1)));
  }
  function l() {
    try {
      return !!Symbol.iterator;
    } catch (e) {
      return !1;
    }
  }
  const r = n.prototype;
  var i = /[!'\(\)~]|%20|%00/g;
  var s = /\+/g;

  const o = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };

  var u = (e) => {
    return o[e];
  };

  const a = l();
  var f = "__URLSearchParams__:" + Math.random();
  (r.append = function (t, n) {
    const r = this[f];
    t in r ? r[t].push("" + n) : (r[t] = ["" + n]);
  }),
    (r.delete = function (t) {
      delete this[f][t];
    }),
    (r.get = function (t) {
      const n = this[f];
      return t in n ? n[t][0] : null;
    }),
    (r.getAll = function (t) {
      const n = this[f];
      return t in n ? n[t].slice(0) : [];
    }),
    (r.has = function (t) {
      return t in this[f];
    }),
    (r.set = function (t, n) {
      this[f][t] = ["" + n];
    }),
    (r.forEach = function (t, n) {
      const r = this[f];
      Object.getOwnPropertyNames(r).forEach(function (e) {
        r[e].forEach(function (r) {
          t.call(n, r, e, this);
        }, this);
      }, this);
    }),
    (r.keys = function () {
      const t = [];
      this.forEach((e, n) => {
        t.push(n);
      });
      const n = {
        next() {
          const e = t.shift();
          return { done: e === undefined, value: e };
        },
      };
      return (
        a &&
          (n[Symbol.iterator] = () => {
            return n;
          }),
        n
      );
    }),
    (r.values = function () {
      const t = [];
      this.forEach((e) => {
        t.push(e);
      });
      const n = {
        next() {
          const e = t.shift();
          return { done: e === undefined, value: e };
        },
      };
      return (
        a &&
          (n[Symbol.iterator] = () => {
            return n;
          }),
        n
      );
    }),
    (r.entries = function () {
      const t = [];
      this.forEach((e, n) => {
        t.push([n, e]);
      });
      const n = {
        next() {
          const e = t.shift();
          return { done: e === undefined, value: e };
        },
      };
      return (
        a &&
          (n[Symbol.iterator] = () => {
            return n;
          }),
        n
      );
    }),
    a && (r[Symbol.iterator] = r.entries),
    (r.toJSON = () => {
      return {};
    }),
    (r.toString = function y() {
      const t = this[f];
      const n = [];
      let r;
      let i;
      let s;
      let o;
      for (i in t) {
        s = e(i);
        for (r = 0, o = t[i]; r < o.length; r++) n.push(s + "=" + e(o[r]));
      }
      return n.join("&");
    });
  const c = Object.defineProperty,
    h = Object.getOwnPropertyDescriptor,
    p = (e) => {
      function t(t, n) {
        r.append.call(this, t, n),
          (t = this.toString()),
          e.set.call(this._usp, t ? "?" + t : "");
      }
      function n(t) {
        r.delete.call(this, t),
          (t = this.toString()),
          e.set.call(this._usp, t ? "?" + t : "");
      }
      function i(t, n) {
        r.set.call(this, t, n),
          (t = this.toString()),
          e.set.call(this._usp, t ? "?" + t : "");
      }
      return (e, r) => {
        return (
          (e.append = t),
          (e.delete = n),
          (e.set = i),
          c(e, "_usp", { configurable: !0, writable: !0, value: r })
        );
      };
    },
    d = (e) => {
      return (t, n) => {
        return (
          c(t, "_searchParams", {
            configurable: !0,
            writable: !0,
            value: e(n, t),
          }),
          n
        );
      };
    },
    v = (e) => {
      const t = e.append;
      (e.append = r.append), n.call(e, e._usp.search.slice(1)), (e.append = t);
    },
    m = (e, t) => {
      if (!(e instanceof t))
        throw new TypeError(
          "'searchParams' accessed on an object that does not implement interface " +
            t.name
        );
    },
    g = (e) => {
      const t = e.prototype;
      const r = h(t, "searchParams");
      const i = h(t, "href");
      const s = h(t, "search");
      let o;
      !r &&
        s &&
        s.set &&
        ((o = d(p(s))),
        Object.defineProperties(t, {
          href: {
            get() {
              return i.get.call(this);
            },
            set(e) {
              const t = this._searchParams;
              i.set.call(this, e), t && v(t);
            },
          },
          search: {
            get() {
              return s.get.call(this);
            },
            set(e) {
              const t = this._searchParams;
              s.set.call(this, e), t && v(t);
            },
          },
          searchParams: {
            get() {
              return (
                m(this, e),
                this._searchParams || o(this, new n(this.search.slice(1)))
              );
            },
            set(t) {
              m(this, e), o(this, t);
            },
          },
        }));
    };
  return (
    g(HTMLAnchorElement), /^function|object$/.test(typeof URL) && g(URL), n
  );
});
