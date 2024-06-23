const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFileAsync(path, 'utf-8')
      .then((data) => {
        // Split lines and remove empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const students = {
          CS: [],
          SWE: [],
        };

        lines.forEach((line) => {
          const firstName = line.split(',')[0].trim();
          const field = line.split(',')[3].trim();

          if (field === 'field' || !firstName) {
            return; // Skip the header and empty lines
          }

          if (students[field]) {
            students[field].push(firstName);
          } else {
            students[field] = [firstName];
          }
        });

        const totalStudents = Object.keys(students).reduce(
          (sum, field) => sum + students[field].length, 0,
        );

        console.log(`Number of students: ${totalStudents}`);

        for (const field in students) {
          if (field) {
            const studentsList = students[field];
            const studentsCount = studentsList.length;
            const listString = studentsList.join(', ');
            console.log(`Number of students in ${field}: ${studentsCount}. List: ${listString}`);
          }
        }

        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = countStudents;
