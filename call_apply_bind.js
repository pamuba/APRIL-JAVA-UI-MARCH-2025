var pokemon = {
    firstname:'Pika',
    lastname:'Chu',

    getPokeName : function(){
        return fullname = this.firstname+' '+this.lastname
    }
}


var pokemonName = function(snack, hobby){
    console.log(this.getPokeName()+' I choose you')
    console.log(this.getPokeName()+' loves '+snack+' and '+hobby)
}

//BIND
//var logPokemon = pokemonName.bind(pokemon)
//10 mins
//logPokemon('sushi', 'javascript')

//CALL
// pokemonName.call(pokemon,'sushi', 'javascript')

//APPLY
pokemonName.call(pokemon,['sushi', 'javascript'])

