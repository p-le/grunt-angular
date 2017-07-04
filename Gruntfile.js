module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      files: [ 'src/**'],
      task: ''
    },
    express: {
      all: {
        options: {
          port: 3000,
          hostname: '*',
          bases: ['./public'],
          livereload: true
        }
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: [
          {
            expand: true,
            src: [ './src/**/*.js' ],
            dest: './build'
          }
        ]
      }
    },
    concat: {
      js: {
        src: [ './build/app.bundle.js', './build/src/*.js'],
        dest: './public/app.bundle.js'
      }
    },
    uglify: {
      js: {
        src: [ './public/app.bundle.js' ],
        dest: './public/app.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.registerTask('server', ['express', 'watch']);
  grunt.registerTask('build', [ 'ngAnnotate', 'concat', 'uglify' ]);
};