import getListStudentIds from "../1-get_list_student_ids";

describe("getListStudentIds", () => {
  it("should return an empty array when input is not an array", () => {
    expect(getListStudentIds("hello")).toEqual([]);
    expect(getListStudentIds(null)).toEqual([]);
    expect(getListStudentIds(undefined)).toEqual([]);
    expect(getListStudentIds(123)).toEqual([]);
  });

  it("should return an array of student IDs", () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    expect(getListStudentIds(students)).toEqual([1, 2, 5]);
  });
});
