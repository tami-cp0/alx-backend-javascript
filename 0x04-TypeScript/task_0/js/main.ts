interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 19,
    location: 'babcock',
};

const student2: Student = {
    firstName: 'Emeka',
    lastName: 'chukwu',
    age: 19,
    location: 'babcock',
};

const studentList: Array<Student> = [ student1, student2 ];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
// for each student append a new row and add the firstname, lastname, age and location to separate cells then
// then appen the row to the table body 


studentList.forEach(student => {
    // Create a new row
    const row: HTMLTableRowElement = document.createElement('tr');

    // Create cells for firstName and location
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');

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