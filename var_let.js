//Scoping rules

// function run(){
//     var foo = "Foo";
//     let bar = "Bar";

//     console.log(foo, bar); //Foo Bar

//     {
//         var moo = "Moooo"
//         let baz = "Bazzz"
//         console.log(moo, baz); //
//     }
//     console.log(moo); //Moooo
//     console.log(baz);// Reference Error
// }
// run();

// var funcs = []
// for (var i = 0; i < 3; i++) {
//     funcs[i] = function(){
//         console.log("My Value:"+i)
//     }
// }

// for (var j = 0; j < 3; j++) {
//     funcs[j]();
// }

//Hoisting Rule

// function run(){
//     //var foo
//     console.log(foo) //undifined
//     var foo = "Foo";
//     console.log(foo)//Foo
// }

//run();

// function run(){
//     //let foo  XXXXX
//     console.log(foo) //Reference Error
//     let foo = "Foo";
//     console.log(foo)//Foo
// }
// run();

//3. Redecleration

// var foo = "foo1"
// var foo = "foo2"

// let bar = "bar1"
// let bar = "foo2"


//var / no var

function run(){
    var a = 24
}
run()
console.log(a)