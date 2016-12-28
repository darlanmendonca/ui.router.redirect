angular
  .module('ui.router.redirect')
  .run(RedirectConfig)

function RedirectConfig($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', redirect)

  function redirect(event, toState, params) {
    const redirectTo = toState.redirectTo
    if (redirectTo) {
      event.preventDefault()
      $state.go(redirectTo, params, {location: 'replace'})
    }
  }
}
