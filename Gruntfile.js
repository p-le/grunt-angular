module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true
      },
      files: [ 'src/**'],
      tasks: [ 'build' ]
    },
    express: {
      all: {
        options: {
          port: 3000,
          open: true,
          hostname: 'localhost',
          bases: ['./public'],
          livereload: true
        }
      }
    },
    copy: {
      main: {
        files: [
          { 
            expand: true, 
            src: ['./src/**/*.html'], 
            dest: 'public/',
            flatten: true,
            filter: 'isFile'
          }
        ],
      },
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
        src: [ './build/app.bundle.js', './build/src/**/*.js'],
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.registerTask('server', ['express', 'watch']);
  grunt.registerTask('build', [ 'ngAnnotate', 'concat', 'uglify', 'copy' ]);
};