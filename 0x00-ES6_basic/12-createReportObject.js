export default (employeesList) => ({
  allEmployees: employeesList,
  getNumberOfDepartments(list) {
    return Object.keys(list).length;
  },
});
