angular
  .module('app')
  .controller('LoginController', LoginController);

LoginController.$inject = ['authService'];

function LoginController(authService) {

  var vm = this;

  vm.createUser = function() {

    authService.$createUser({
      email: vm.email,
      password: vm.password
    }).then(function(userData) {
      alert('User created with uid: ' + userData.uid);
    }).catch(function(error) {
      alert(error);
    });
  };

  vm.removeUser = function() {

    authService.$removeUser({
      email: vm.email,
      password: vm.password
    }).then(function() {
      alert('User removed');
    }).catch(function(error) {
      alert(error);
    });
  };

  // login with Facebook
  vm.connectFacebook = function() {

    authService.$authWithOAuthPopup("facebook").then(function(authData) {
      alert("Logged in as:", authData.uid);
    }).catch(function(error) {
      alert("Authentication failed:", error);
    });
  };
}