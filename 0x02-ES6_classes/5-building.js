export default class Building {
  constructor (sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
      this.evacuationWarningMessage();
    }
    else {
      throw new TypeError('Sqft must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._sqft} sqft building`;
  }
}
