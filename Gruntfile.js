'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'www'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/js/{,*/}*.js'
      ]
    },

    // Deploy to GitHub Pages for static hosting
    'gh-pages': {
      options: {
        base: ''
      },
      src: ['**']
    }

  });

  grunt.registerTask('lint', [
    'newer:jshint',
  ]);

  grunt.registerTask('deploy', [
    'gh-pages'
  ]);

  grunt.registerTask('default', [
    'jshint'
  ]);

};
