export default class Building {
  constructor (sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
