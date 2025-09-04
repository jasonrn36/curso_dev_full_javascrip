module.exports = function(grunt) {
  // Configuração das tarefas
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    // Aqui entram as configurações dos plugins
      jshint: {
      all: ['src/scripts/*.js'] 
      }
    });

  // Aqui ficam as tarefas
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

  };

