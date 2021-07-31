// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appId: '1d96f326376f8503f41b36e079a90220',
  apiUrl: 'https://api.openweathermap.org/data/2.5/forecast',
  iconUrl: 'http://openweathermap.org/img/w/',
  iconFormat: 'png',
  units: 'metric',
  lang: 'fr'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
