export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const department in employeesList) {
    allEmployees[department] = employeesList[department];
  }

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
