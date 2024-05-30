export const HolbertonClass = (year, location) => ({
  _year: year,
  _location: location,

  get year() {
    return this._year;
  },

  set year(year) {
    this._year = year;
  },

  get location() {
    return this._location;
  },

  set location(location) {
    this._location = location;
  },
});