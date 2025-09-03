module.exports = function(grunt) {
  // Configuração das tarefas
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
    // Aqui entram as configurações dos plugins
    // ESSAS TAREFA VAI APAGAR O COMTEUDO DENTRO DA PASTA DIST
    clean: {
      build: ['dist/*']
    }
  });

  // Aqui ficam as tarefas
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Carrega o plugin de limpeza
    grunt.registerTask('default', ['clean']);
      // Fim da área de tarefas

    //Para executar esse código
    // abra o terminal no diretório do projeto
    // e digite no terminal:
    // o comando abaixo
    //   grunt
    };

