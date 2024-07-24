const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load database'));
      }

      // Split the CSV into rows
      let rows = (data.split('\n'));
      // remove the header
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
      console.log(`Number of students in CS: ${groupedData.CS.length}. List: ${groupedData.CS.join(', ')}`);
      console.log(`Number of students in SWE: ${groupedData.SWE.length}. List: ${groupedData.SWE.join(', ')}`);
      return resolve(0);
    });
  });
}

module.exports = countStudents;
