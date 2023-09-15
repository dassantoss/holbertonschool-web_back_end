import Car from './10-car';

/**
 * Clase EVCar que representa un coche eléctrico.
 * Extiende la clase Car.
 */
export default class EVCar extends Car {
/**
 * Crea una instancia de EVCar.
 * @param {string} brand - La marca del coche.
 * @param {string} motor - El tipo de motor del coche.
 * @param {string} color - El color del coche.
 * @param {string} range - La autonomía del coche eléctrico.
 */
  constructor(brand, motor, color, range) {
    // Llama al constructor de la clase padre (Car) con super.
    super(brand, motor, color);
    this._range = range;
  }

  /**
 * Clona el coche eléctrico y crea una nueva instancia de Car en lugar de EVCar.
 * @returns {Car} Una nueva instancia de Car con los mismos valores que el coche e.
 */
  cloneCar() {
    const clone = new (Object.getPrototypeOf(this.constructor))(
      this._brand,
      this._motor,
      this._color,
    );
    clone._range = this._range;
    return clone;
  }
}
