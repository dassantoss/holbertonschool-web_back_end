class HolbertonCourse {
  constructor(name, length, students) {
    // Verifica el tipo de los atributos durante la creación del objeto
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Almacena los atributos en versiones con guion bajo
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Implementa un getter para el atributo 'name'
  get name() {
    return this._name;
  }

  // Implementa un setter para el atributo 'name'
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Implementa un getter para el atributo 'length'
  get length() {
    return this._length;
  }

  // Implementa un setter para el atributo 'length'
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Implementa un getter para el atributo 'students'
  get students() {
    return this._students;
  }
  
  // Implementa un setter para el atributo 'students'
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

export default HolbertonCourse;
