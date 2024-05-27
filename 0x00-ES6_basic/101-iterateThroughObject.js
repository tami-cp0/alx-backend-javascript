export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const employee of reportWithIterator) {
    if (!employees) {
      employees += employee;
    } else {
      employees += ` | ${employee}`;
    }
  }
  return employees;
}
