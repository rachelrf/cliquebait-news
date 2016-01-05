angular.module('pique.services', []).factory('Stories', function ($http) {

  var addNewTopic = function (userInput) {
    var postBody = {topic: userInput};

    return $http({
      method: 'POST',
      url: '/api/topic',
      data: postBody
    })
    .then(function (resp) {
      return resp.data;
    });
  };


  var getStories = function (userInput) {
    
    return $http({
      method: 'GET',
      url: '/api/story?topic=' + userInput
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  // var getOGImages = function (userInput) {
  //   console.log('fetching OG images via GET request');
  //   return $http({
  //     method: 'GET',
  //     url: '/api/getImage?site=' + userInput
  //   })
  //   .then(function (resp) {
  //     return resp.data;
  //   });
  // };

  return { 
    addNewTopic: addNewTopic,
    getStories: getStories,
    // getOGImages: getOGImages
  };



})
// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });