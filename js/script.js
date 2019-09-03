var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function addListItem(pokemon) {
    var $listItem = document.createElement('li');
    var $button = document.createElement('button');
    var $container = document.querySelector('.container');
    $button.innerText = pokemon.name;
    $listItem.appendChild($button);
    $container.appendChild($listItem);
    $button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  };

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  function add(item) {
    repository.push(item);
  }

  function getAll() {
    return repository;
  }

  function loadList() {
     return fetch(apiUrl).then(function (response) {
       return response.json();
     }).then(function (json) {
       json.results.forEach(function (item) {
         var pokemon = {
           name: item.name,
           detailsUrl: item.url
         };
         add(pokemon);
       });
     }).catch(function (e) {
       console.error(e);
     })
   }

   function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }


   return {
     add: add,
     getAll: getAll,
     loadList: loadList,
     loadDetails: loadDetails,
     addListItem: addListItem,
     showDetails: showDetails
   };
 })();

 pokemonRepository.loadList().then(function() {
   pokemonRepository.getAll().forEach(function(pokemon){
     pokemonRepository.addListItem(pokemon);
   });
 });
