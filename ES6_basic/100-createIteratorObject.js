/* eslint-disable */
export default function createIteratorObject(report) {
	const employees = [];
	for (const dpt of Object.values(report.allEmployees)) {
		employees.push(...dpt);
	}
	return employees;
}
