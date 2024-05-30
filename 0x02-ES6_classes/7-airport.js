export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    if (typeof name !== 'string') throw new TypeError('Name must be a string');

    this._code = code;
    this._name = name;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
