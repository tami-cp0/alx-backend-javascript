import Building from './5-building';

export default class SkyHighBuilding extends Building {
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

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
