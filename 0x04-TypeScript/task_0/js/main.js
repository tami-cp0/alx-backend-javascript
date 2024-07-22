var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    location: 'babcock',
};
var student2 = {
    firstName: 'Emeka',
    lastName: 'chukwu',
    age: 19,
    location: 'babcock',
};
var studentList = [student1, student2];
var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
studentList.forEach(function (student) {
    // Create a new row
    var row = document.createElement('tr');
    // Create cells for firstName and location
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    // Set the text content of the cells
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.append(thead);
table.append(tbody);
