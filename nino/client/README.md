# frontend #

## frontend folder structure ##

* **jade**
	* **mixins.jade**
		* Simple mixin samples.
	* **partials**
		* Partial html fragments (which are loaded by angular using XHR requests).
		* Have a `.tpl` extension since they are only 'templates' (in the angular sense).
	* **templates**
		* Full html pages which are treated as 'templates' (in the flask sense, meaning they are rendered on the server side by flask).
		* **index.jade**
			* The index page of the application (the one showed for `/`).  
			* Uses a content delivery network (CDN), a public server which hosts multiple versions of commonly used libraries (jquery, angular, etc).
* **js**
	* **app.js**
		* The main angular application.
		* Setup the 'states' of the application (the connection between urls and html templates), using angular-ui-router.
		* Defines all the modules for the application (important since it allow multiple files to add elements to the same module).
	*  **search**
		* (Each feature is located in a separate folder)
		* **search_ctrl.js**
			* A simple controller for demonstration.     
    *  **tests**
        * (Each feature's tests are located in a separate folder)
        * **search**
            * simple tests for the search feature for demonstration.
        * **angular-mocks.js**
            * angular's mock services.
        * **karma.config.js**
            * configuration file for the karma server.
* **stylus**
	* All the stylus files for the project.
