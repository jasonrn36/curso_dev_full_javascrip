module.exports = function(grunt) {
  // Configuração das tarefas
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // Aqui ficam as tarefas
    grunt.registerTask('mensagem', 'Exibe uma mensagem', function() {
    grunt.log.writeln('Olá Jason, você está aprendendo Grunt!');
    });

  // Fim da área de tarefas

    //Para executar esse código
    // abra o terminal no diretório do projeto
    // e digite no terminal:
    // o comando abaixo
    //   grunt mensagem

};

