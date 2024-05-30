import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * Constructs a Sky High Building object with a specified square foot and floors.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building
   * @throws {TypeError} if the floors is infinite or not a number
   */
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number' || !Number.isFinite(floors)) throw new TypeError('Floors must be a number');

    this._floors = floors;
  }

  /**
   * Gets the number of floors of the building.
   * @returns {number} The number of floors of the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors of the building.
   * @param {number} floors - The new number of floors of the building.
   * @throws {TypeError} - If floors is not a finite number.
   */
  set floors(floors) {
    if (typeof floors !== 'number' || !Number.isFinite(floors)) throw new TypeError('Floors must be a number');
    this._floors = floors;
  }

  /**
   * @returns {string} The number of floors in the building
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
