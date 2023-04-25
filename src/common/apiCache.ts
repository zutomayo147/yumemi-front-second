interface CacheData<T> {
  data: T;
  timestamp: number;
}

interface Cache {
  [key: string]: CacheData<unknown>;
}

const cache: Cache = {};

const checkCacheExpiration = () => {
  const expirationTime = Date.now() - 60 * 60 * 1000;
  Object.keys(cache).forEach(key => {
    if (cache[key]!.timestamp < expirationTime) {
      delete cache[key];
    }
  });
};

setInterval(checkCacheExpiration, 60 * 60 * 1000);

export const getFromCache = <T>(cacheKey: string): T | null => {
  const cachedData = cache[cacheKey];

  if (cachedData && Date.now() - cachedData.timestamp < 15 * 60 * 1000) {
    return cachedData.data as T;
  } else {
    return null;
  }
};

export const setToCache = <T>(cacheKey: string, data: T): void => {
  cache[cacheKey] = { data, timestamp: Date.now() };
};
