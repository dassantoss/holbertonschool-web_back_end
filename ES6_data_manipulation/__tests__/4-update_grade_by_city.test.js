import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

test("updateStudentGradeByCity is implemented correctly", () => {
  const students = getListStudents();
  const grades = [
    {
      studentId: 1,
      grade: 96,
    }
  ];

  const value = updateStudentGradeByCity(students, "San Francisco", grades);
  expect(value).toEqual([
    {
      id: 1,
      firstName: "Guillaume",
      location: "San Francisco",
      grade: 96,
    },
    { id: 5, firstName: "Serena", location: "San Francisco", grade: "N/A" }
  ]);
});
