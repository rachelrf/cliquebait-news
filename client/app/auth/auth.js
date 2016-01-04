// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])
.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.usrEr = {
    message: '',
    hint: ''
  };
  $scope.signInEr = {message: ''};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.signInEr.message = 'Invalid username/password combination';
        console.error(error);
      });
  };
  $scope.signup = function () {
    var valid = /(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+$/;
    if ($scope.user.username.match(valid)) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      $scope.usrEr.message = 'Please enter valid username';
      $scope.usrEr.hint = 'Valid usernames are 2-20 characters, and do not contain special characters or space';
    }
  };
  $scope.signout = function () {
    Auth.signout();
  };
});
