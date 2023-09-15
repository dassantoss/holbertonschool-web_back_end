class Currency {
  constructor(code, name) {
    // Almacena los atributos en versiones con guion bajo
    this._code = code;
    this._name = name;
  }

  // Implementa un getter para el atributo 'code'
  get code() {
    return this._code;
  }

  // Implementa un setter para el atributo 'code'
  set code(newCode) {
    this._code = newCode;
  }

  // Implementa un getter para el atributo 'name'
  get name() {
    return this._name;
  }

  // Implementa un setter para el atributo 'name'
  set name(newName) {
    this._name = newName;
  }

  // Implementa el método 'displayFullCurrency'
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
