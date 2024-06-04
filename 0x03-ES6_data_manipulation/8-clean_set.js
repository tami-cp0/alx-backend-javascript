export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') throw new TypeError('StartString must be a string');
  if (!(set instanceof Set)) throw new TypeError('set must be a Set');
  if (startString === '') return '';

  const strings = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      strings.push(value.slice(startString.length));
    }
  }

  return strings.join('-').toString();
}
