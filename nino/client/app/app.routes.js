(function() {
  'use strict';

  angular
    .module('app')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates(), '/');
  }

  function getStates() {
    return [
      {
        state: 'main',
        config: {
          url: '/',
          templateUrl: '/media/build/layout/main.html'
        }
      },
      {
        state: 'search',
        config: {
          url: '/search',
          templateUrl: '/media/build/search/search.html',
          controller: 'SearchController as searchVm'
        }
      },
      {
        state: 'search.term',
        config: {
          url: '/{term:\\w*}',
          templateUrl: '/media/build/search/search.html',
          controller: 'SearchController as searchVm'
        }
      },
      {
        state: 'chat',
        config: {
          url: '/chat',
          templateUrl: '/media/build/chat/chat.html',
          controller: 'ChatController as chatVm'
        }
      }
    ];
  }

})();
