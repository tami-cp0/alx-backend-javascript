export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' && color !== undefined) throw new TypeError('Brand must be a string');
    if (typeof motor !== 'string' && color !== undefined) throw new TypeError('Motor must be a string');
    if (typeof color !== 'string' && color !== undefined) throw new TypeError('Color must be a string');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // easy way out
  // cloneCar() {
  //   return new this.constructor();
  // }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
