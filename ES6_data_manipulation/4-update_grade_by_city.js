export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filtra los estudiantes por ciudad
  const filteredStudents = students.filter((student) => student.location === city);

  // Mapea los estudiantes y actualiza sus calificaciones si están en newGrades
  const updatedStudents = filteredStudents.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    if (gradeObject) {
      return { ...student, grade: gradeObject.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return updatedStudents;
}
