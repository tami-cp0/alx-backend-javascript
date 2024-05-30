export default class Building {
  /**
   * Constructs a building object with a specified square foot measurement.
   * @param {number} sqft - The square footage of the building.
   * @throws {TypeError} If sqft is not a number or if it's infinity.
   * @throws {Error} if evacuationWarningMessage is not overwritten by the extending class.
   */
  constructor(sqft) {
    if (typeof sqft !== 'number' || !Number.isFinite(sqft)) throw new TypeError('Square foot must be a number');
    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  /**
   * Gets the square foot of the building.
   * @returns {number} The square foot of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square foot of the building.
   * @param {number} sqft - The new square foot of the building.
   * @throws {TypeError} - If sqft is not a finite number.
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number' || !Number.isFinite(sqft)) throw new TypeError('Square foot must be a number');
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Method 'evacuationWarningMessage()' must be implemented.");
  }
}
