module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'libs/gauge.min.js',
      'src/**/*.js',
      'src/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/**/*.!(spec.)js': [ 'coverage' ]
    },
    reporters: [ 'spec', 'coverage' ],
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },
    coverageReporter: {
      type : 'html',
      dir : '__coverage__'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
