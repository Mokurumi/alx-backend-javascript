interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'USA',
};

let student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 23,
  location: 'UK',
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  table.appendChild(row);

  const firstName = document.createElement('td');
  firstName.textContent = student.firstName;
  row.appendChild(firstName);

  const location = document.createElement('td');
  location.textContent = student.location;
  row.appendChild(location);
});
