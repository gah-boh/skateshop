// Karma configuration
// Generated on Tue Dec 24 2013 09:54:31 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'app/',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/jquery.js',
	  'bower_components/spectrum/spectrum.js',
	  'bower_components/jquery-ui/ui/jquery-ui.js',
	  'bower_components/angular/angular.js',
	  'bower_components/angular-mocks/angular-mocks.js',
      'scripts/namespace.js',
      'scripts/customize/customize.js',
      'scripts/unity/unity.js',
      'scripts/**/*.js',
	  'scripts/**/*.html'
    ],

    // list of files to exclude
    exclude: [
      'UnityObject2.js'
    ],

	preprocessors: {
	  'scripts/**/*.html': 'ng-html2js'
	},

	ngHtml2JsPreprocessor: {
	  moduleName: 'templates'
	},

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
