module.exports = function (config) {
  config.set({
    browsers: ['Chrome',],
    // browsers: ['Chrome', 'Firefox'],
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: true,

    files: [
      'node_modules/typescript/lib/typescript.js',

      // Polyfills.
      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      {pattern: 'node_modules/rxjs/**/*.js',         included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map',     included: false, watched: false},

      // Angular
      {pattern: 'node_modules/@angular/**/*.js',     included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'karma-systemjs.config.js',          included: true,  watched: false},
      {pattern: 'karma-test-runner.js',              included: true,  watched: false},

      // Application
      {pattern: 'app/**/*.ts', included: false, watched: true}
    ],
    proxies: {
      '/app/': '/base/app/'
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
      // 'karma-firefox-launcher'
    ]
  })
};
