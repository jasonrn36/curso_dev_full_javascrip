const fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    htmlhint: {
      options: {
        'tagname-lowercase': true,
        'attr-value-double-quotes': true,
        'doctype-first': true,
        'alt-require': true,
        'id-unique': true,
        'head-script-disabled': true
      },
      src: ['src/index.html']
    }
  });

grunt.loadNpmTasks('grunt-html');
grunt.registerTask('default', ['htmlhint']);
};
