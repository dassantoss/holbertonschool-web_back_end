export default class Building {
  constructor(sqft) {
    // Almacena el atributo en una versión con guion bajo
    this._sqft = sqft;
  }

  // Implementa un getter para el atributo 'sqft'
  get sqft() {
    return this._sqft;
  }

  // Declara el método abstracto 'evacuationWarningMessage'
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
  