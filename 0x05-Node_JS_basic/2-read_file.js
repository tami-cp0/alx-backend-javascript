const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    // Split the CSV into rows
    let rows = (data.split('\n'));
    rows = rows.slice(1, rows.length);

    // Split each row into columns
    const parsedData = rows.map((row) => row.split(',').filter((row) => row.length > 1));
    const groupedData = {};

    for (const student of parsedData) {
      const course = student[student.length - 1];
      const firstName = student[0];

      if (!(course in groupedData)) {
        groupedData[course] = [firstName];
      } else {
        groupedData[course].push(firstName);
      }
    }

    console.log(`Number of students: ${parsedData.length}`);

    Object.entries(groupedData).forEach(([key, value]) => {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
