
var repository = [
  {name: 'Bulbasaur',
   height: 0.7,
   type: ['grass', 'poison']},
  {name: 'Squirtle',
   height: 0.5,
   type: ['water']},
  {name: 'Charmander',
   height: 0.6,
   type: ['fire']}
 ]
repository.forEach(function(pokedexList) {
  if (pokedexList.height > 0.6) {
    document.write(pokedexList.name + ' (Height: '+pokedexList.height+') - Wow that\'s big <br>' )
  }
  else {
    document.write(pokedexList.name + ' (Height: '+pokedexList.height+') <br> ' )
  }
});
