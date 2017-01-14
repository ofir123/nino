/**
 * This file/module contains all configurations for the build process.
 */

module.exports = {
  /**
   * This is a collection of file patterns that refer to our app code.
   * These file paths are used in the configuration of the build tasks.
   */
  appFiles: {
    js: ['app/**/*.module.js', 'app/**/*.js'],
    pug: 'app/**/*.pug',
    stylus: 'app/**/*.styl',
    compiledCss: 'compile/css/**/*.css'
  },
  livereloadPort: 35729
};
