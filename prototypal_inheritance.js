let dragon = {
    name:'Tanya',
    fire:true,
    fight(){
        return 9
    },
    sing(){
        if(this.fire)
            return `I am ${this.name}, the breather of fire.`
    }
}

let lizard = {
    //fire:true,
    name:'Kiki',
    fight(){
        return 5
    }
    //#region 
    // sing(){
    //     if(this.fire)
    //         return `I am ${this.name}, the breather of fire.`
    // }
    //#endregion
}

//We are egoing to borrow the sing method for the lizard using bind

// const singLizard = dragon.sing.bind(lizard);
// //bind redirects the this keyword
// console.log(singLizard());

//Prototypal Inheritance
//function have prototype
//objects have __proto__
lizard.__proto__ = dragon
console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight())


console.log(dragon.isPrototypeOf(lizard))
console.log(lizard.isPrototypeOf(dragon))