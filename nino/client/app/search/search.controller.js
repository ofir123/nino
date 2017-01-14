(function() {
  'use strict';

  angular
    .module('app.search', [])
    .constant('defaultTitle', 'An elegant title...')
    .controller('SearchController', SearchController);

  /* @ngInject */
  function SearchController($scope, $state, defaultTitle, searchService) {
    var searchVm = this;

    searchVm.title = defaultTitle;
    searchVm.searchTerm = null;
    searchVm.selected = {};
    searchVm.searchResults = [];

    searchVm.loadFromState = loadFromState;
    searchVm.search = search;

    // When the state changes, the controller will be updated and a search will take place.
    $scope.$on('$stateChangeSuccess', function () {
      searchVm.loadFromState();
    });

    // Load local variables from the state (the URL of the page).
    function loadFromState() {
      searchVm.searchTerm = $state.params.term;
      if (searchVm.searchTerm) {
        searchService.search({
          'term': searchVm.searchTerm
        }).then(function (data) {
          searchVm.searchResults = data;
        });
      }
    }

    function search() {
      $state.go('search.term', {
        term: searchVm.searchTerm
      });
    }
  }

})();
