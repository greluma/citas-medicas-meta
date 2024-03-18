export function getLocalStorage<T>(key: string): T | [] {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return [];
}
