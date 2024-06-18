const fs = require('fs');

function countStudents(path) {
  try {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }

    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {
      CS: [],
      SWE: [],
    };

    lines.forEach(line => {
      const [firstName, lastName, age, field] = line.split(',').map(value => value.trim());

      if (field === 'field' || !firstName) {
        return;
      }

      if (students[field]) {
        students[field].push(firstName);
      } else {
        students[field] = [firstName];
      }
    });

    const totalStudents = Object.keys(students).reduce((sum, field) => sum + students[field].length, 0);

    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
