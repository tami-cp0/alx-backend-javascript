export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  // return array.map((value) => appendString + value);

  return newArray;
}
