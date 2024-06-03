export default function getStudentsByLocation(students, city) {
  const results = students.filter((student) => student.location === city);

  return results;
}
