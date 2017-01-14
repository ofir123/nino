var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var del = require('del');
var lazypipe = require('lazypipe');

// Load user config and package data
var cfg = require('./build.config.js');

/**
 * Compile and concat scripts, styles and templates. Invoked when running 'gulp' with no other arguments.
 * The task first clean the build folder (in gulp syntax, we say the 'default' task is depended on the 'clean' to run.
 */
gulp.task('default', ['build']);

/**
 * A simple command which cleans the build directory.
 */
gulp.task('clean', function () {
  return del(['build/**', 'compile/**']);
});
// Build tasks.
gulp.task('build-scripts', ['clean'], function () {
  return gulp.src(cfg.appFiles.js).pipe(buildJs());
});
gulp.task('build-styles-stylus', ['clean'], function () {
  return gulp.src(cfg.appFiles.stylus).pipe(buildStylus());
});
gulp.task('build-styles', ['build-styles-stylus'], function () {
  return gulp.src(cfg.appFiles.compiledCss).pipe(buildStyles());
});
gulp.task('build-templates', ['clean'], function () {
  return gulp.src(cfg.appFiles.pug).pipe(buildPug());
});

/**
 * Actual build task. Note that we hint gulp to first run clean.
 */
gulp.task('build', ['clean', 'build-scripts', 'build-styles', 'build-templates']);

/**
 * Watch all files and re-compile on change.
 */
gulp.task('watch', ['build'], function () {
  // Create the server so it will start listening.

  // Setup watchers.
  // Most watchers must do a full 'compilation' when a change is detected (e.g, JavaScript must concat all files even
  // if only one is changed, Jade must recompile all files since a change to a template can affect other pages.)
  livereload.listen(cfg.livereloadPort);

  watch(cfg.appFiles.js, {name:'JavaScript'}, function () {
    return gulp.src(cfg.appFiles.js)
      .pipe(buildJs())
      .pipe(livereload());
  });

  watch(cfg.appFiles.pug, {name: 'Templates'}, function () {
    return gulp.src(cfg.appFiles.pug)
      .pipe(buildPug())
      .pipe(livereload());
  });

  watch(cfg.appFiles.stylus, {name: 'Stylus'}, function () {
    return gulp.src(cfg.appFiles.stylus)
      .pipe(buildStylus())
  });

  watch(cfg.appFiles.compiledCss, {name: 'Css'}, function () {
    return gulp.src(cfg.appFiles.compiledCss)
      .pipe(buildStyles())
      .pipe(livereload());
  });
});

/**
 * Concat js code to a single js file (and not vendor code).
 */
function buildJs() {
  var jsPipe = lazypipe()
    .pipe(jshint)
    .pipe(jshint.reporter, 'default')
    .pipe(jscs)
    .pipe(jscs.reporter)
    .pipe(ngAnnotate, {single_quotes: true})
    .pipe(concat, 'app.js')
    .pipe(gulp.dest, 'build');

  return jsPipe();
}

/**
 * Compile stylus styles to css.
 */
function buildStylus() {
  var stylusPipe = lazypipe()
    .pipe(plumber, {errorHandler: util.log})
    .pipe(stylus)
    .pipe(gulp.dest, 'compile/css/stylus');

  return stylusPipe();
}

/**
 * Compile all styles (css, stylus, etc.) to css and concat them to a single file.
 */
function buildStyles() {
  var stylesPipe = lazypipe()
    .pipe(plumber, {errorHandler: util.log})
    .pipe(concat, 'app.css')
    .pipe(gulp.dest, 'build');

  return stylesPipe();
}

/**
 * Compile pug templates to html.
 */
function buildPug() {
  var pugPipe = lazypipe()
    .pipe(plumber, {errorHandler: util.log})
    .pipe(pug, {pretty: true, data: {buildCfg: cfg}})
    .pipe(gulp.dest, 'build');

  return pugPipe();
}
