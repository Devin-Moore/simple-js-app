var pokemonRepository = (function () {
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
  ];

  function addListItem(pokemon) {
    var $listItem = document.createElement('li');
    var $button = document.createElement('button');
    $button.innerText = pokemon.name;
    $listItem.appendChild($button);
    $container.appendChild($listItem);
    $button.addEventListener('click', function(event) {
      showDetails(event.target.innerText);
    });
  };

  function showDetails(pokemonName) {
    console.log(pokemonName)
  };

  function add(repository) {
    repository.push(item);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

var $allPokemon = pokemonRepository.getAll();

var $container = document.querySelector('.container');

$allPokemon.forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
