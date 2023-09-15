export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let employees = [];
  departments.forEach((department) => {
    employees = [...employees, ...department];
  });

  let currentIndex = 0;

  const iterator = {
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      }
      return { done: true };
    },
  };

  return iterator;
}
