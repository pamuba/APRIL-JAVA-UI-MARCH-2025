//promise is a result in the future , not immediate

let promise = new Promise(function(resolve, reject){
    setTimeout(
        ()=>reject("Error Occured"), 2000
    )
})

promise.then(
    (result) => console.log("SUCCESS:",result),
    //(err) => console.log("ERROR:",err)
).catch(
    (err) => console.log("ERROR:",err)
).finally(
    ()=>console.log("Always runs")
)