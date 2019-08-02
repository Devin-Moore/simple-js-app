
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


for (var i = 0; i < repository.length; i++) {
  if (repository[i].height > 0.6) {
    document.write(repository[i].name + ' (Height: '+repository[i].height+') - Wow that\'s big <br>' )
  }
  else {
      document.write(repository[i].name + ' (Height: '+repository[i].height+') <br> ' )
  }
}
