export default class Building {
  constructor(sqft) {
    // Verifica si la instancia actual es una clase hija de Building
    // y si no se ha implementado evacuationWarningMessage
    if (this.constructor === Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
