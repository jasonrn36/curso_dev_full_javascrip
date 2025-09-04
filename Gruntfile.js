module.exports = function(grunt) {
  // Configuração das tarefas
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    // Aqui entram as configurações dos plugins
      jshint: {
      all: ['src/scripts/*.js'] // Ele irá verificar todos os arquivos .js dentro da pasta scripts
                                // e irá verificar se há erros de sintaxe
      }
    });

  // Aqui ficam as tarefas
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

  };

