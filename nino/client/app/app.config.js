(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /* @ngInject */
  function config($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https):/);
  }

})();
