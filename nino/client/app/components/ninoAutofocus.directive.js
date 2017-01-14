(function() {
  'use strict';

  angular
    .module('app.components')
    .directive('ninoAutofocus', ninoAutofocus);

  function ninoAutofocus($timeout) {
    return {
      link: link,
      restrict: 'A'
    };

    function link(scope, element, attrs) {
      $timeout(function() {
        element[0].focus();
      });
    }
  }

})();
