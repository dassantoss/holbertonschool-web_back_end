export default class Pricing {
  constructor(amount, currency) {
    // Almacena los atributos en versiones con guion bajo
    this._amount = amount;
    this._currency = currency;
  }

  // Implementa un getter para el atributo 'amount'
  get amount() {
    return this._amount;
  }

  // Implementa un setter para el atributo 'amount'
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Implementa un getter para el atributo 'currency'
  get currency() {
    return this._currency;
  }

  // Implementa un setter para el atributo 'currency'
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Implementa el método 'displayFullPrice'
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Implementa el método estático 'convertPrice'
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
