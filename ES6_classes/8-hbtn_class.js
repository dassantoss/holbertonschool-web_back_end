export default class HolbertonClass {
/**
 * Create a HolbertonClass
 * @param {number} size - The size of the class
 * @param {string} location - The location of the class
 */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
 * Convert the class to a primitive value
 * @param {string} hint - The hint for the conversion ('string', 'number', or 'default')
 * @returns {string|number|null} The converted value
 */
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    }
    if (hint === 'number') {
      return this._size;
    }
    return null;
  }
}
