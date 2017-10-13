const cacheStore = new WeakMap();
const isPromise = x =>
  x instanceof Promise ||
  (x != null &&
    typeof x === 'object' &&
    typeof x.then === 'function' &&
    typeof x.catch === 'function');
    
const defaultCacheKey = (...args) => {
  if (
    (args.length === 1 && args[0] === null) ||
    args[0] === undefined ||
    (typeof args[0] != 'function' && typeof args[0] != 'object')
  ) {
    return args[0];
  }
  return JSON.stringify(args);
};

const mem = (fn, opts) => {
  opts = Object.assign(
    {
      cacheKey: defaultCacheKey
    },
    opts
  );
  const memoized = (...args) => {
    const cache = cacheStore.get(memoized);
    const key = opts.cacheKey.apply(null, args);

    if (cache.has(key)) {
      const c = cache.get(key);
      return c.data;
    }

    const ret = fn(...args);

    const setData = (key, data) => {
      cache.set(key, {
        data
      });
    };

    if (isPromise(ret)) {
      ret
        .then(() => {
          setData(key, ret);
        })
        .catch(() => {});
    } else {
      setData(key, ret);
    }
    return ret;
  };
  cacheStore.set(memoized, new Map());
  return memoized;
};

const add2 = a => a + 2;
const memoized = mem(add2);
memoized(3);
console.log(memoized(3));
