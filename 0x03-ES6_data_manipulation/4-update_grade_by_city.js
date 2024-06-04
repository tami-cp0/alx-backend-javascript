export default function updateStudentGradeByCity(students, city, newGrades) {
  const results = students.filter((student) => student.location === city).map((student) => {
    const obj = newGrades.reduce((object, current) => {
      if (current.studentId === student.id) {
        return { ...current };
      }

      return object;
    }, {});

    return { ...student, grade: obj.grade !== undefined ? obj.grade : 'N/A' };
  });

  return results;
}
