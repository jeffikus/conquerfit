angular
  .module('app')
  .factory('authService', authService);

authService.$inject = ['$firebaseAuth'];

function authService($firebaseAuth) {
  var ref = new Firebase('https://intense-inferno-3179.firebaseio.com');
  return $firebaseAuth(ref);
}