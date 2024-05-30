import Currency from './3-currency';

export default class Pricing {
  /**
   * Constructs a Pricing object with the specified amount and currency.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency object representing the currency of the pricing.
   * @throws {TypeError} - If amount is not a finite number or currency is not a Currency object.
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number' || !Number.isFinite(amount)) throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency object');

    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Gets the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} amount - The new amount of the pricing.
   * @throws {TypeError} - If amount is not a finite number.
   */
  set amount(amount) {
    if (typeof amount !== 'number' || !Number.isFinite(amount)) throw new TypeError('Amount must be a number');
    this._amount = amount;
  }

  /**
   * Gets the currency object representing the currency of the pricing.
   * @returns {Currency} The currency object representing the currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency object representing the currency of the pricing.
   * @param {Currency} currency - The new currency object representing the currency of the pricing.
   * @throws {TypeError} - If currency is not a Currency object.
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) throw new TypeError('currency must be a Currency object');
    this._currency = currency;
  }

  /**
   * Returns the full price including the amount and currency details.
   * @returns {string} The full price including the amount and currency details.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts the given amount to another currency using the provided conversion rate.
   * @param {number} amount - The amount to be converted.
   * @param {number} conversionRate - The conversion rate to be applied.
   * @returns {number} The converted amount.
   * @throws {TypeError} - If amount or conversionRate is not a finite number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || !Number.isFinite(amount)) throw new TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number' || !Number.isFinite(conversionRate)) throw new TypeError('Conversion rate must be a number');

    return (amount * conversionRate);
  }
}
