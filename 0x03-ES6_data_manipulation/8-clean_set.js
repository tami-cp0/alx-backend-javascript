export default function cleanSet(set, startString) {
  if (startString === '') return '';

  const strings = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      strings.push(value.slice(startString.length));
    }
  }

  return strings.join('-');
}
