(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('searchService', searchService);

    /* @ngInject */
    function searchService($resource) {
        return $resource('/api/search', {}, {
            query: {method: 'POST', isArray: true}
        });
    }

})();
