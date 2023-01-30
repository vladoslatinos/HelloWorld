function Student(name, surname, birthYear) { 
  this.name = name; 
  this.surname = surname; 
  this.birthYear = birthYear; 
  this.attendance = new Array(10).fill(undefined); 
  this.marks = new Array(10).fill(undefined); 
} 



function getAverage(array) { 
  let count = 0; 
  let result = array.reduce((acc, item) => { 
      if (item != undefined) count++; 
      if (item) { 
          return typeof item == 'boolean' ? acc += 1 : acc += item; 
      } 
      return acc += 0; 
  }, 0) / count; 

  return +result.toFixed(1); 
} 

function addToArray(array, value) { 
  let index = array.findIndex(index => index === undefined); 
  if (index != -1) array.splice(index, 1, value); 
  return array; 
} 

Student.prototype.age = function () { 
  return new Date().getFullYear() - this.birthYear; 
} 

Student.prototype.gpa = function () { 
  return getAverage(this.marks); 
} 

Student.prototype.present = function () { 
  return addToArray(this.attendance, true); 
} 

Student.prototype.absent = function () { 
  return addToArray(this.attendance, false); 
} 

Student.prototype.mark = function (grade) { 
  if (grade > 0 && grade <= 10) return addToArray(this.marks, grade); 
  throw 'The mark must be from 1 to 10!'; 
} 

Student.prototype.summary = function () { 
  let gradeRes = getAverage(this.marks); 
  let attendanceRes = getAverage(this.attendance); 
  
  
  if (gradeRes > 9 && attendanceRes >= 0.9) return 'Ути какой молодчинка!'; 
  if (gradeRes < 9 && attendanceRes < 0.9) return 'Редиска!';
  if (gradeRes <= 9 || attendanceRes <= 0.9) return 'Норм, но можно лучше!';
} 


 let Student1 = new Student("John", "Doe", 2006); 
 
 Student1.present(); 
 Student1.mark(10); 
 Student1.mark(10); 
 Student1.mark(6); 
 console.log(Student1.age()); 
 console.log(Student1.gpa()); 
 console.log(Student1.summary()); 
 console.log(Student1);
