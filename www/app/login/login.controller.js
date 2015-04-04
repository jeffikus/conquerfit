angular
  .module('app')
  .controller('LoginController', LoginController);

LoginController.$inject = ['authService'];

function LoginController(authService) {

  var vm = this;
  vm.note = 'testing';

  vm.createUser = function() {

    vm.message = null;
    vm.error = null;

    authService.$createUser({
      email: vm.email,
      password: vm.password
    }).then(function(userData) {
      vm.message = 'User created with uid: ' + userData.uid;
    }).catch(function(error) {
      vm.error = error;
    });
  };

  vm.removeUser = function() {
    vm.message = null;
    vm.error = null;

    authService.$removeUser({
      email: vm.email,
      password: vm.password
    }).then(function() {
      vm.message = 'User removed';
    }).catch(function(error) {
      vm.error = error;
    });
  };
}