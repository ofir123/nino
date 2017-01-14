# frontend #

## frontend folder structure ##

* **blocks** - Basic boilerplate building blocks
    * *routerHelperProvider.js* - A little wrapper for ui-router states, for easier configuration.
* **components** - The list of global app components
    * *ninoAutofocus.directive.js* - A simple directive for autofocus on DOM elements.
    * *ninoEnter.directive.js* - A simple directive for Enter key press on DOM elements.
* **layout** - The main page layout files
    * *main.pug* - The main page Pug file.
    * *main.styl* - The main page Stylus file.
* **search** - The search page files
    * *search.controller.js* - The search page controller.
    * *search.service.js* - The search service.
    * *search.pug* - The search page Pug file.
    * *search.styl* - The search page Stylus file.
* **chat** - The chat page files
    * *chat.controller.js* - The chat page controller.
    * *chat.service.js* - The chat service.
    * *chat.pug* - The chat page Pug file.
    * *chat.styl* - The chat page Stylus file.    


* **mixins.pug** - Simple mixin samples for the index Pug file.
* **index.pug** - The index page of the application (the one showed for `/`).
* **styles.styl** - The global styles file.
* **app.config.js** - Basic AngularJS app configuration.
* **app.modules.js** - The list of dependencies for our AngularJS app.
* **app.routes.js** - The list of states for our AngularJS app (using ui-router).
