function Student(){
    this.name = 'John';
    this.dept = 'Sales';
}

Student.prototype.age = 15;

var stOb1 = new Student(); //fn ctor
// stOb1.age = 15;
console.log(stOb1.age) //15

var stOb2 = new Student(); 
console.log(stOb2.age) //undefined
