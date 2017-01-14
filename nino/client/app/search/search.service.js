(function() {
  'use strict';

  angular
    .module('app.search')
    .factory('searchService', searchService);

  /* @ngInject */
  function searchService($http, $log) {

    return {
      search: search
    };

    function search(data) {
      return $http.post('/api/search', data)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          $log.error('XHR failed for search. ' + error.data);
        });
    }
  }

})();
