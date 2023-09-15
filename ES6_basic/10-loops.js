export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Creamos un nuevo array para almacenar los resultados.

  for (const value of array) {
    // Usamos for...of para iterar sobre los valores del array.
    newArray.push(appendString + value); // Añadimos el valor modificado al nuevo array.
  }

  return newArray; // Devolvemos el nuevo array con los valores modificados.
}
