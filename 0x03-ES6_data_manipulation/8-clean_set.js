export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') throw new TypeError('StartString must be a string');
  if (!(set instanceof Set)) throw new TypeError('set must be a Set');
  if (startString === '') return '';

  let string = '';

  // for (const value of set) {
  //   if (value.startsWith(startString)) {
  //     strings.push(value.slice(startString.length));
  //   }
  // }

  set = Array.from(set);

  set.forEach((value, index) => {
    if (value.startsWith(startString)) {
      if (index === 0) {
        string += value.slice(startString.length);
      } else {
        string += `-${value.slice(startString.length)}`;
      }
    }
  });

  return string;
}
