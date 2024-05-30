export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string' && color !== undefined) throw new TypeError('Brand must be a string');
    if (typeof motor !== 'string' && color !== undefined) throw new TypeError('Motor must be a string');
    if (typeof color !== 'string' && color !== undefined) throw new TypeError('Color must be a string');

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    console.log(this);
    return new this.constructor();
  }
}
