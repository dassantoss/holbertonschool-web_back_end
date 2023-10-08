import getStudentIdsSum from "../3-get_ids_sum.js";
import getListStudents from "../0-get_list_students.js";

describe("getStudentIdsSum function", () => {
  it("should return the sum of student IDs", () => {
    const students = getListStudents();
    const result = getStudentIdsSum(students);
    expect(result).toBe(8);
  });

  it("should return 0 for an empty list", () => {
    const emptyList = [];
    const result = getStudentIdsSum(emptyList);
    expect(result).toBe(0);
  });

  it("should return 0 for an array with no student objects", () => {
    const nonStudentArray = [1, 2, 3];
    const result = getStudentIdsSum(nonStudentArray);
    expect(result).toBe(0);
  });

  it("should return 0 for undefined input", () => {
    const undefinedInput = undefined;
    const result = getStudentIdsSum(undefinedInput);
    expect(result).toBe(0);
  });
});
