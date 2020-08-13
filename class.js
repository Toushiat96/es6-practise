class Student{
   constructor(sId,sName){
       this.id = sId;
       this.name = sName;
       this.school = "kolimunccea";
   }
}

const student1 = new Student(12,"shaikh");
const student2 = new Student(15,"asif");

console.log(student1,student2);