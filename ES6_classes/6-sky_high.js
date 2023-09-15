import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Llama al constructor de la clase base (Building)
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  // Override del método evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
