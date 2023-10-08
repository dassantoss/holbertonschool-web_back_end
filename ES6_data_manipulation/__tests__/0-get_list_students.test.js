import getListStudents from "../0-get_list_students"; // Ajusta la ruta según tu estructura de archivos

describe("getListStudents", () => {
  it("should return an array of student objects", () => {
    const students = getListStudents();

    expect(Array.isArray(students)).toBe(true);
    expect(students).toHaveLength(3);

    expect(students[0]).toHaveProperty("id", 1);
    expect(students[0]).toHaveProperty("firstName", "Guillaume");
    expect(students[0]).toHaveProperty("location", "San Francisco");

    // Similar expectations for other students
  });
});
