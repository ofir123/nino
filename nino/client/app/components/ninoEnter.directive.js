(function() {
    'use strict';

    angular
        .module('app.components')
        .directive('ninoEnter', ninoEnter);

    function ninoEnter() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            element.bind('keydown', function (e) {
                if (e.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ninoEnter, {'e': e});
                    });
                    e.preventDefault();
                }
            });
        }

    }

})();
