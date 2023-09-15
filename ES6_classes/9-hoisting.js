// Definición de la clase HolbertonClass
export class HolbertonClass {
/**
 * Crea una instancia de HolbertonClass.
 * @param {number} year - El año de la clase.
 * @param {string} location - La ubicación de la clase.
 */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
 * Obtiene el año de la clase.
 * @returns {number} El año de la clase.
 */
  get year() {
    return this._year;
  }

  /**
 * Obtiene la ubicación de la clase.
 * @returns {string} La ubicación de la clase.
 */
  get location() {
    return this._location;
  }
}

// Creación de instancias de HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Definición de la clase StudentHolberton
export class StudentHolberton {
/**
 * Crea una instancia de StudentHolberton.
 * @param {string} firstName - El primer nombre del estudiante.
 * @param {string} lastName - El apellido del estudiante.
 * @param {HolbertonClass} holbertonClass - La clase a la que pertenece el estudiante.
 */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
 * Obtiene el nombre completo del estudiante.
 * @returns {string} El nombre completo del estudiante.
 */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
 * Obtiene la clase a la que pertenece el estudiante.
 * @returns {HolbertonClass} La clase a la que pertenece el estudiante.
 */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
 * Obtiene la descripción completa del estudiante.
 * @returns {string} La descripción completa del estudiante.
 */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Creación de instancias de StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Exportación de la lista de estudiantes
export const listOfStudents = [
  student1,
  student2,
  student3,
  student4,
  student5,
];

// Exportación predeterminada de la lista de estudiantes
export default listOfStudents;
