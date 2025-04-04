function doubleAfter2Seconds(x){
    return new Promise(resolve=>{
        setTimeout(
            ()=>{
                resolve(x*2)
            },2000
        )
    })
}

// doubleAfter2Seconds(10).then(result=>{
//     console.log(result)
// })

// let sum = doubleAfter2Seconds(10).then(result=>result) + doubleAfter2Seconds(20).then(result=>result) 
// + doubleAfter2Seconds(30).then(result=>result)
// console.log(sum)

// function addPromise(x){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then((a)=>{
//             doubleAfter2Seconds(20).then((b)=>{
//                 doubleAfter2Seconds(30).then((c)=>{
//                     resolve(x+a+b+c)
//                 })
//             })
//         })
//     })
// }

// addPromise(10).then(result=>{
//     console.log(result)
// })

// async function addAsync(x){
//     const a = await doubleAfter2Seconds(10);
//     const b = await doubleAfter2Seconds(20);
//     const c = await doubleAfter2Seconds(30);

//     return x+a+b+c;
// }

// addAsync(10).then(result => {
//     console.log(result)
// })

async function fn(){
    return 2;
}
fn().then(r=>{
    console.log(r);
})