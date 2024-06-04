export default function setFromArray(array) {
  const result = new Set();
  array.map((value) => result.add(value));
  return result;
}
