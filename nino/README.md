# nino #

## project structure ##

* **client** - include all the browser-side source code
	* More info in a separate *README.md* file.
* **certs** - The debugging certificate files (used to check SSL on localhost).


* **app.py + views.py** - A simple flask server
    * Include template-rendering example.
    * Post data handling.
    * Static file serving.
* **run_server.py** - A Tornado wrapper for the Flask server (using WSGI)
    * Contains SSL and WebSockets support as well.
* **ws_handler.py** - Tornado's WebSockets handler.
* **config.py** - The web server configuration file
	* Contains various configuration flags (`DEBUG`, `IS_SSL`, etc...) which are used by the index page.
	* It is important to set the DEBUG flag to `False` in deployment, since it can cause long load time for users.
