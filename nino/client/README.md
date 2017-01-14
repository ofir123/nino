# client #

## client folder structure ##

* **app** - All of the app's static files - Javscript, Stylus and Pug
    * More info in a separate *README.md* file.
* **images** - All of the app's images and icons
	*  *icons* - The SVG icons for the app (The full list can be found [here](https://material.io/icons/)).   
* **build/compile** - Auto-generated files, created by Gulp.
* **node_modules** - All of the external node modules used in the app.


* **package.json** - The list of required node modules, and their versions.
* **.jscsrc + .jshintrc** - Configuration files for the Javascript linting tools.
* **gulpfile.js + build.config.js** - Configuration for Gulp (build tool)
    * The following configurations are used: 
        * Build (concat) all the Javascript files from app to a single javascript file (`app.js`).
        * Build all the Pug files to HTML file (and keep the folder structure).
        * Build Stylus and less files to CSS files, and than concat all the CSS files to a single CSS file (`app.css`).
        * *Usage*
            * `$ npm install` to get the node modules for the first run.
            * `$ gulp` for a single build.
            * `$ gulp watch` for continues build and livereload (automatic detection of changes and reload in the browser).
