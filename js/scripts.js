let pokemonList = [
    {name: 'Bulbasaur', height: '7', types: ['grass', 'poison']},
    {name: 'Charmander', height: '6', types: 'fire'},
    {name: 'Squirtle', height: '5', types: 'water'}
]
// loop with conditional that adds special comment for any Pokemon larger than "7" in height
for (let i = 0; i <= pokemonList.length; i++) {
    if (pokemonList[i].height < 7){
        document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ')<br>')
    }else if (pokemonList[i].height >= 7){
        document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ') - Wow, that is big! <br>')
    }
}
