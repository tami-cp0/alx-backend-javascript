export default function updateUniqueItems(set) {
  if (!(set instanceof Map)) throw new Error('Cannot process');

  for (const key of set.keys()) {
    if (set.get(key) === 1) {
      set.set(key, 100);
    }
  }

  return set;
}
