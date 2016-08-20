# nino #

## project structure ##

* **frontend** - include all the browser-side source code.
	* **gulpfile.js** 
		* Configuration for **gulp** (build tool).
		* The following configurations are used: 
			* Build (concat) all the javascript files from src to a single javascript file (`app.js`)
			* Build all the jade files to html file (and keep the folder structure).
			* Build stylus and less files to css files, and than concat all the css files to a single css file (`app.css`).
			* Run unit-tests with karma.
			* *Usage*
				* `$ npm install` to get the node modules for the first run.
                * `$ gulp` for a single build.
				* `$ gulp watch` for continues build and livereload (automatic detection of changes and reload in the browser).
				* `$ gulp test` for single tests run.
				* `$ gulp ci` for continues integration of karma's unit tests.
	* **lib**
		* External libraries.
	* **src**
		* The actual javascript/jade sources.
		* More info in a separate **README.md** file.
	* **build/compile**
		* auto-generated files, created by gulp.
* **app.py**
	* A simple flask server.
		* Include template-rendering example.
		* Post data handling.
		* Static file serving.
* **config.py**
	* A single configuration flag (`DEBUG`) which is used by the index page.
	* It is important to set the flag to `False` in deployment, since it can cause long load time for users.
