// var sum = x => {
//     console.log('This:',this)
//     console.log("Before")
//     return x+x
// }
// console.log(sum(11))

//1. Arrow fns doesnt have this, but borrows it from the outer scope
//2. Arrow fns cannot be used with new -- bcoz pt 1
//3. Arrow fns have no "arguments"
//4. cannt be called with super
//#region 
// let add = ()=>{
//     sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]        
//     }
//     console.log(arguments instanceof Array)
//     return sum
// }

// console.log(add(1,2,3))
//#endregion

// let arrow = {
//     title:'Main Group',
//     employees:['Bikki', 'Nikki', 'Alice'],
//     showList(){
//         this.employees.forEach(
//             emp => console.log(this.title+': '+emp)
//         )
//     }
// }
// arrow.showList();

// let arrow = {
//     title:'Main Group',
//     employees:['Bikki', 'Nikki', 'Alice'],
//     showList(){
//         this.employees.forEach(
//            function(emp){
//             //console.log('This:',this)
//             console.log(this.title+': '+emp)
//            }
//         )
//     }
// }
// arrow.showList();

// let arrow = {
//     title:'Main Group',
//     employees:['Bikki', 'Nikki', 'Alice'],
//     showList(){
       
//         this.employees.forEach(
//             emp => {
//                 console.log('This:',this)
//                 console.log(this.title+': '+emp)
//             }
//         )
//     }
// }
// arrow.showList();

//callbacks
//promises
//async await
//map reduce filter
//call apply bind
//Typescript


