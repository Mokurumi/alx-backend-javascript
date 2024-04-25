// Implement a class named HolbertonClass:

// Constructor attributes:
// size (Number)
// location (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// When the class is cast into a Number, it should return the size.
// When the class is cast into a String, it should return the location.

export default class HolbertonClass {
  constructor (size, location) {
    if (typeof size !== 'number') throw new Error();
    if (typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
  }
}
