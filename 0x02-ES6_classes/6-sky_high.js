// Import Building from 5-building.js.

// Implement a class named SkyHighBuilding that extends from Building:

// Constructor attributes:
// sqft (Number) (must be assigned to the parent class Building)
// floors (Number)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter for each attribute.
// Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors

import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor (sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    thhis._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
