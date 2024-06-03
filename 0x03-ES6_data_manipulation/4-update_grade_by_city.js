export default function updateStudentGradeByCity(students, city, newGrades) {
  const results = students.map((student) => {
    console.log(newGrades.filter((object) => object.id === student.id));
  });

  // return results;
}
