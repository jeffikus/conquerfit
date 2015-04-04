angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'app/layout/menu.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController as login'
    })

    .state('app.people', {
      url: '/people',
      views: {
        'menuContent': {
          templateUrl: 'templates/people.html'
        }
      }
    })

    .state('app.places', {
      url: '/places',
      views: {
        'menuContent': {
          templateUrl: 'templates/places.html'
        }
      }
    })
      .state('app.perks', {
        url: '/perks',
        views: {
          'menuContent': {
            templateUrl: 'templates/perks.html'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  })