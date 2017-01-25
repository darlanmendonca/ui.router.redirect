[![npm version](https://badge.fury.io/js/angular-ui-router-redirect.svg)](https://badge.fury.io/js/angular-ui-router-redirect)
[![Dependency Status](https://gemnasium.com/badges/github.com/darlanmendonca/ui.router.redirect.svg)](https://gemnasium.com/github.com/darlanmendonca/ui.router.redirect)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Install

```sh
npm install --save angular-ui-router-redirect
```

## Usage

```js
// add dependency in you module
angular.module('app', [
  'ui.router',
  'ui.router.redirect'
]);
```

and finally, in your states, just use the key `redirectTo` with a state to redirect, e.g.

```js
angular
  .module('app')
  .config(HomeConfig)

function HomeConfig($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    redirectTo: 'users' // name of state to go
  })
```
