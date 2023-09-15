/**
 * Clase Car para representar un coche.
 */
export default class Car {
/**
 * Crea una instancia de Car.
 * @param {string} brand - La marca del coche.
 * @param {string} motor - El tipo de motor del coche.
 * @param {string} color - El color del coche.
 */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
 * Clona el coche y crea una nueva instancia de Car.
 * @returns {Car} Una nueva instancia de Car con valores iniciales indefinidos.
 */
  cloneCar() {
    // Clonar el objeto manteniendo el prototipo y estableciendo los valores iniciales como indefinidos.
    const origin = this;
    return Object.assign(Object.create(Object.getPrototypeOf(origin)), {
      _brand: undefined,
      _motor: undefined,
      _color: undefined,
    });
  }
}
