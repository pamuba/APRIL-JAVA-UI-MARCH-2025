// class God{
//     hi(){
//         console.log("This is GOD")
//     }
// }

// class Animal extends God{
//     constructor(name, height){
//         super()
//         this.name = name;
//         this.heigh = height;
//     }
//     hello(){
//         console.log(`Hii I am ${this.name} from the animal kingdom`)
//     }
// }

// console.log(Animal)
// let king = new Animal("Lion King", 2.5);
// console.log(king)
// king.hello()
// king.hi()

class A{
	constructor(x){
   this.a = x
  }
}
class B extends A{
	constructor(x,y){
        super(x)
   this.b = y
  }
}
class C extends B{
	constructor(x,y,z){
        super(x,y)
   this.c = z
  }
}

let CObj = new C(11,22,33);

console.log(CObj.a, CObj.b, CObj.c)