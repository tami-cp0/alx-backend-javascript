export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  if (!(set instanceof Set)) throw new TypeError('set must be a Set');

  const strings = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      strings.push(value.slice(startString.length));
    }
  }

  return strings.join('-').toString();
}
