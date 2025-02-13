class Student {
 constructor(name) {
    this.studentName = name;
}
static hello(){
    return "Hello";
}
present() {
    return 'My name is ' + this.studentName;
}
}

class Grade extends Student {
    constructor(name, grade) {
        super(name);
        this.studentGrade = grade;
    }
    show() {
        return this.present() + ', from ' + this.studentGrade;
    }
}

let myStudent = new Grade("Noshin Alam", "grade 9");
document.getElementById("details").innerHTML = myStudent.show();
// hello() is a static method cannot be accessed by object myStudent
document.getElementById("greetings").innerHTML = Student.hello();