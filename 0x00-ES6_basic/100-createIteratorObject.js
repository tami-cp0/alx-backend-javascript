export default function createIteratorObject(report) {
  const employees = [];
  Object.values(report.allEmployees).map((value) => employees.push(...value));
  return employees;
}
