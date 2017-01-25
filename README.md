## install

```sh
npm install --save angular-ui-router-redirect
```

## usage

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
