export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees,
  };

  // Devolvemos el objeto creado.
  return employeesObject;
}
