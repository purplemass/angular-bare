/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  var ngVer = '@2.0.0-rc.3'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-alpha.7'; // lock router version
  var formsVer = '@0.1.1'; // lock forms version
  var routerDeprecatedVer = '@2.0.0-rc.2'; // temporarily until we update all the guides

  //map tells the System loader where to look for things
  var  map = {
    'app':                        'app',

    '@angular':                   './node_modules/@angular', // sufficient if we didn't pin the version
    '@angular/router':            './node_modules/@angular/router' + routerVer,
    '@angular/forms':             './node_modules/@angular/forms' + formsVer,
    '@angular/router-deprecated': './node_modules/@angular/router-deprecated' + routerDeprecatedVer,
    'angular2-in-memory-web-api': './node_modules/angular2-in-memory-web-api', // get latest
    'rxjs':                       './node_modules/rxjs',
    'ts':                         './node_modules/plugin-typescript/lib',
    'typescript':                 './node_modules/typescript/lib/typescript.js',
 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'ts':                         { main: 'plugin.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
  ];

  // bob did as we get out local files without a version
  ngVer = '';

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = './node_modules/@angular/' + pkgName + ngVer;
  });

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  // Forms not on rc yet
  packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

  // Temporarily until we update the guides
  packages['@angular/router-deprecated'] = { main: '/bundles/router-deprecated' + '.umd.js', defaultExtension: 'js' };

  var config = {
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      module: "system",
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
