(function() {
    'use strict';

    angular
        .module('app.search', [])
        .constant('defaultTitle', 'An elegant title...')
        .controller('SearchController', SearchController);

    /* @ngInject */
    function SearchController($rootScope, $state, defaultTitle, searchService) {
        var searchVm = this;

        searchVm.title = defaultTitle;
        searchVm.selected = {};
        searchVm.loadFromState = loadFromState;
        searchVm.search = search;

        searchVm.targets = [
            {name: 'Foo'},
            {name: 'Bar'},
            {name: 'Buzz'}
        ];

        // When the state changes, the controller will be updated and a search will take place.
        $rootScope.$on('$stateChangeSuccess', function () {
            searchVm.loadFromState();
        });

        // Load local variables from the state (the URL of the page).
        function loadFromState() {
            searchVm.searchTerm = $rootScope.$stateParams.term || 'sir';
            searchService.query({'q': searchVm.searchTerm}, function(data) {
                searchVm.searchResults = data;
            });
        }

        function search(term) {
            $state.go('search.term', {term: term});
        }

    }

})();
