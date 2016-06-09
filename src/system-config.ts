/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@ngrx': 'vendor/@ngrx',
  'ngrx-store-logger': 'vendor/ngrx-store-logger'
};

/** User packages configuration. */
const packages: any = {
  'ngrx-store-logger': { main: 'dist/index' }
};

// loads up ngrx/store package
const ngrxPkgs: string[] = [
  'store',
  'core',
  'effects'
];
ngrxPkgs.forEach((pkg) => packages[`@ngrx/${pkg}`] = { main: 'index', format: 'cjs' });

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+todo',
  'app/todo-input',
  'app/+todo/todo-input',
  'app/+todo/todo-items',
  'app/+todo/todo-item',
  'app/+todo/switcher',
  'app/+todo/status-bar',
  'app/+todo/clear-completed',
  'app/+todo/todo-filter',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
