

// export const listOfStudents = [student1, student2, student3, student4, student5];
// Result:

// bob@dylan:~$ cat 9-main.js
// import listOfStudents from "./9-hoisting.js";

// console.log(listOfStudents);

// const listPrinted = listOfStudents.map(
//     student => student.fullStudentDescription
// );

// console.log(listPrinted)

// bob@dylan:~$
// bob@dylan:~$ npm run dev 9-main.js
// [
//   StudentHolberton {
//     _firstName: 'Guillaume',
//     _lastName: 'Salva',
//     _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
//   },
//   StudentHolberton {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
//   },
//   StudentHolberton {
//     _firstName: 'Albert',
//     _lastName: 'Clinton',
//     _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
//   },
//   StudentHolberton {
//     _firstName: 'Donald',
//     _lastName: 'Bush',
//     _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
//   },
//   StudentHolberton {
//     _firstName: 'Jason',
//     _lastName: 'Sandler',
//     _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
//   }
// ]
// [
//   'Guillaume Salva - 2020 - San Francisco',
//   'John Doe - 2020 - San Francisco',
//   'Albert Clinton - 2019 - San Francisco',
//   'Donald Bush - 2019 - San Francisco',
//   'Jason Sandler - 2019 - San Francisco'
// ]
// bob@dylan:~$

export class HolbertonClass {
  constructor (year, location) {
    this._year = year;
    this._location = location
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._year;
    if (hint === 'string') return this._location;
  }
}

export class StudentHolberton {
  constructor (firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._year;
    if (hint === 'string') return this._location;
  }
}

export const listOfStudents = [
  new StudentHolberton('Guillaume', 'Salva', new HolbertonClass(2020, 'San Francisco')),
  new StudentHolberton('John', 'Doe', new HolbertonClass(2020, 'San Francisco')),
  new StudentHolberton('Albert', 'Clinton', new HolbertonClass(2019, 'San Francisco')),
  new StudentHolberton('Donald', 'Bush', new HolbertonClass(2019, 'San Francisco')),
  new StudentHolberton('Jason', 'Sandler', new HolbertonClass(2019, 'San Francisco'))
];
