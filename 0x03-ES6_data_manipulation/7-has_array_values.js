export default function hasValuesFromArray(set, array) {
  let check = false;
  for (const value of array) {
    check = set.has(value);
  }

  return check;
}
