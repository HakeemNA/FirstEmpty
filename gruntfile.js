/**
 * Created by c44431 on 21/04/2015.
 */

module.exports = function(grunt)
{
  grunt.initConfig({
    jshint: {
      all: ['js/*.js'],
      options: { multistr: true }
    },

    uglify: {
      build: {
        src: 'js/*.js',
        dest: 'js/build/all.min.js'
        //, files: {
        //  'build/app.min.js' : ["js/app.js"],
        //  'build/base.min.js' : ["js/index.js", "js/code2.js"]
        //}
      }
    },

    jasmine: {
      src: ['js/app.js', 'index.js'],
      options: {
        vendor: ['bower_components/angular/angular.js',
          'bower_component/angular-mocks/angular-mocks.js'],
        specs: 'js/specs/*.js'
      }
    },

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerInitTask("default", ['jshint', 'uglify', 'jasmine']);
}