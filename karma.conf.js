// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-jasmine-html-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    exclude: [],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    query: {
        esModules: false
    },
    files: [
      { pattern: './src/test.ts', watched: false },
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/systemjs/dist/system.src.js',
      './node_modules/systemjs/dist/system-polyfills.js'
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'cobertura'],
      dir: './coverage',
      fixWebpackSourcePaths: true,
      'report-config': {
        cobertura: {
          file : 'cobertura.txt'
        },
        lcovonly: {
          file : 'coverage.lcov'
        }
      }
    },
    angularCli: {
      environment: 'dev'
    },
    junitReporter: {
      outputDir: 'reports'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'junit', 'coverage-istanbul']
              : ['progress', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    browserNoActivityTimeout: 1000000,
    singleRun: false
  });
};