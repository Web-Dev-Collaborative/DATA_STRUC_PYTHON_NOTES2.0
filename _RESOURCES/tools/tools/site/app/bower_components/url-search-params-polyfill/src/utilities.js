const dP = Object.defineProperty,
  gOPD = Object.getOwnPropertyDescriptor,
  createSearchParamsPollute = (search) => {
    /*jshint validthis:true */
    function append(name, value) {
      URLSearchParamsProto.append.call(this, name, value);
      name = this.toString();
      search.set.call(this._usp, name ? '?' + name : '');
    }
    function del(name) {
      URLSearchParamsProto.delete.call(this, name);
      name = this.toString();
      search.set.call(this._usp, name ? '?' + name : '');
    }
    function set(name, value) {
      URLSearchParamsProto.set.call(this, name, value);
      name = this.toString();
      search.set.call(this._usp, name ? '?' + name : '');
    }
    return (sp, value) => {
      sp.append = append;
      sp.delete = del;
      sp.set = set;
      return dP(sp, '_usp', {
        configurable: true,
        writable: true,
        value: value,
      });
    };
  },
  createSearchParamsCreate = (polluteSearchParams) => {
    return (obj, sp) => {
      dP(obj, '_searchParams', {
        configurable: true,
        writable: true,
        value: polluteSearchParams(sp, obj),
      });
      return sp;
    };
  },
  updateSearchParams = (sp) => {
    const append = sp.append;
    sp.append = URLSearchParamsProto.append;
    URLSearchParams.call(sp, sp._usp.search.slice(1));
    sp.append = append;
  },
  verifySearchParams = (obj, Class) => {
    if (!(obj instanceof Class))
      throw new TypeError(
        "'searchParams' accessed on an object that " +
          'does not implement interface ' +
          Class.name
      );
  },
  upgradeClass = (Class) => {
    const ClassProto = Class.prototype;
    const searchParams = gOPD(ClassProto, 'searchParams');
    const href = gOPD(ClassProto, 'href');
    const search = gOPD(ClassProto, 'search');
    let createSearchParams;
    if (!searchParams && search && search.set) {
      createSearchParams = createSearchParamsCreate(
        createSearchParamsPollute(search)
      );
      Object.defineProperties(ClassProto, {
        href: {
          get() {
            return href.get.call(this);
          },
          set(value) {
            const sp = this._searchParams;
            href.set.call(this, value);
            if (sp) updateSearchParams(sp);
          },
        },
        search: {
          get() {
            return search.get.call(this);
          },
          set(value) {
            const sp = this._searchParams;
            search.set.call(this, value);
            if (sp) updateSearchParams(sp);
          },
        },
        searchParams: {
          get() {
            verifySearchParams(this, Class);
            return (
              this._searchParams ||
              createSearchParams(
                this,
                new URLSearchParams(this.search.slice(1))
              )
            );
          },
          set(sp) {
            verifySearchParams(this, Class);
            createSearchParams(this, sp);
          },
        },
      });
    }
  };
