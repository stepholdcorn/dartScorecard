module.exports = function(grunt) {

  grunt.initConfig({

    jasmine_node: {
      options: {
        forceExit: true
      },
      all: 'spec/'
    },
    jshint: {
      src: 'js/'
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default',['jshint','jasmine_node']);

};