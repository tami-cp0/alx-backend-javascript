export default class HolbertonClass {
  /**
   * Constructs a Holberton Class object.
   * @param {number} size - This is the size of the class.
   * @param {string} location - This is the location of the class.
   * @throws {TypeError} if size is infinite or not a number and,
   * if location is not a string.
   */
  constructor(size, location) {
    if (typeof location !== 'string') throw new TypeError('Location must be a string');
    if (typeof size !== 'number' || !Number.isFinite(size)) throw new TypeError('Size must be a number');

    this._size = size;
    this._location = location;
  }

  /**
   * @returns location of class if casted to a sting
   */
  toString() {
    return this._location;
  }

  /**
   * @returns size of class if casted to a number
   */
  valueOf() {
    return this._size;
  }
}
