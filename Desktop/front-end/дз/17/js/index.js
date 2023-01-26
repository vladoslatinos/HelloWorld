class Student { 
  constructor(firstName, lastName, birthYear) { 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.birthYear = birthYear; 
    this.attendance = new Array(10).fill(null); 
    this.marks = new Array(10).fill(null); 
  } 
 
  getAge() { 
    const currentYear = new Date().getFullYear(); 
    return currentYear - this.birthYear; 
  } 
 
  getAverageMark() { 
    let sum = 0; 
    let count = 0; 
    for (let mark of this.marks) { 
      if (mark !== null) { 
        sum += mark; 
        count++; 
      } 
    } 
    return sum / count; 
  } 
 
  present() { 
    for (let i = 0; i < this.attendance.length; i++) { 
      if (this.attendance[i] === null) { 
        this.attendance[i] = true; 
        break; 
      } 
    } 
  } 
 
  absent() { 
    for (let i = 0; i < this.attendance.length; i++) { 
      if (this.attendance[i] === null) { 
        this.attendance[i] = false; 
        break; 
      } 
    } 
  } 

  mark(grade) { 
    if (grade < 0 || grade > 10) { 
      console.log("Error: mark should be between 0 and 10"); 
      return; 
    } 
    for (let i = 0; i < this.marks.length; i++) { 
      if (this.marks[i] === null) { 
        this.marks[i] = grade; 
        break; 
      } 
    } 
    
  } 
  
 
  summary() { 
    let attendanceSum = 0; 
    let attendanceCount = 0; 
    for (let attendance of this.attendance) { 
      if (attendance !== null) { 
        attendanceSum += attendance; 
        attendanceCount++; 
      } 
    } 
    const averageAttendance = attendanceSum / attendanceCount; 
    const averageMark = this.getAverageMark(); 
 
    if (averageMark > 9 && averageAttendance > 0.9) { 
      return "Ути какой молодчинка!"; 
    } else if (averageMark > 9 || averageAttendance > 0.9) { 
      return "Норм, но можно лучше"; 
    } else { 
      return "Редиска!"; 
    } 
  } 
} 
 
const student1 = new Student("John", "Doe", 2000); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present();
student1.present(); 
student1.present();
student1.present(); 
student1.present();
student1.present(); 
student1.present();
student1.mark(10);
student1.mark(10); 
student1.mark(10);
student1.mark(10); 
student1.mark(10);
student1.mark(10); 
student1.mark(10);
student1.mark(10); 
student1.mark(10);
console.log(student1.summary());
console.log(student1.getAverageMark());