export default function createReportObject(employeesList) {
  // Definimos un objeto llamado "allEmployees".
  const allEmployees = {};

  // Recorremos el objeto "employeesList" y asignamos los empleados a sus respectivos departamentos en "allEmployees".
  for (const department in employeesList) {
    allEmployees[department] = employeesList[department];
  }

  // Definimos el método "getNumberOfDepartments" que devuelve la cantidad de departamentos.
  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  // Devolvemos un objeto con "allEmployees" y "getNumberOfDepartments".
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
