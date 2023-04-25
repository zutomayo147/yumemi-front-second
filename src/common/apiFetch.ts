import { getFromCache, setToCache } from './apiCache';

async function apiFetch<T>(url: string): Promise<T> {
  const cachedResult = getFromCache<T>(url);
  if (cachedResult) {
    return cachedResult;
  }

  const response = await fetch(url);
  const { result } = await response.json();
  setToCache(url, result);
  return result;
}

export default apiFetch;
