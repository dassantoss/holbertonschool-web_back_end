import getListStudents from "../0-get_list_students.js";
import getStudentIdsSum from "../3-get_ids_sum.js";

test("getStudentIdsSum is implemented correctly", () => {
  const students = getListStudents();
  const value = getStudentIdsSum(students);

  expect(value).toEqual(8);
});
