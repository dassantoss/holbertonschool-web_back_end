export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  // Eliminamos el último '|'
  return result.slice(0, -2);
}
