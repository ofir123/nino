(function() {
    'use strict';

    angular
        .module('app', [
            // Angular libraries.
            'ngAnimate', 'ngResource', 'ngSanitize',
            // External libraries.
            'ui.bootstrap', 'ui.router', 'ui.select',
            // Basic app blocks.
            'blocks.router',
            // Services & Components.
            'app.services', 'app.components',
            // Feature modules.
            'app.chat', 'app.search'
        ])
        .run(setGlobalState);

    /* @ngInject */
    function setGlobalState($rootScope, $state, $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its descendants is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();
