import getListStudents from "../0-get_list_students"; // Ajusta la ruta según tu estructura de archivos
import getStudentsByLocation from "../2-get_students_by_loc"; // Ajusta la ruta según tu estructura de archivos

describe("getStudentsByLocation", () => {
  it("should return an array of students in the specified city", () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    expect(getStudentsByLocation(students, 'San Francisco')).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);

    expect(getStudentsByLocation(students, 'Columbia')).toEqual([
      { id: 2, firstName: 'James', location: 'Columbia' }
    ]);
  });

  it("should return an empty array if no students are in the specified city", () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];

    expect(getStudentsByLocation(students, 'New York')).toEqual([]);
  });
});
