var pokemonRepository = (function () {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(item) {
    repository.push(item);
  };

  function getAll() {
    return repository;
  };

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
        console.log(item);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

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

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
      console.log(item);
    });
  }



  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');

    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var nameElement = document.createElement('h1');
    nameElement.innerText = item.name;

    var heightElement = document.createElement('p');
    heightElement.innerText = item.height;

    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', item.imageUrl);

    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(heightElement);
    modal.appendChild(imgElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  var $modalContainer = document.querySelector('#modal-container');
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  return {
   add: add,
   getAll: getAll,
   loadList: loadList,
   loadDetails: loadDetails,
   addListItem: addListItem,
   showDetails: showDetails,
   showModal: showModal,
   hideModal: hideModal
 };
})();

 pokemonRepository.loadList().then(function() {
   pokemonRepository.getAll().forEach(function(pokemon){
     pokemonRepository.addListItem(pokemon);
   });
 });
