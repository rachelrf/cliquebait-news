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


  var getTrending = function () {
    return $http({
      method: 'GET',
      url: '/api/trending'
    })
    .then(function (resp) {
      return resp.data;
    });

  }

  var getTop = function () {
    return $http({
      method: 'GET',
      url: '/api/top'
    })
    .then(function (resp) {
      return resp.data;
    });

  }

  var getTopStories = function () {
    // console.log('got to getTopStories')
    return $http({
      method: 'GET',
      url: '/api/topStories'
    })
    .then(function (resp) {
      return resp.data;
    });

  }

  var updateStoryCount = function (url) {
    // console.log('got to getTopStories')
    return $http({
      method: 'GET',
      url: '/api/updateStoryCount?story=' + url
    });

  }


  return { 
    addNewTopic: addNewTopic,
    getStories: getStories,
    getTrending: getTrending,
    getTop: getTop,
    updateStoryCount: updateStoryCount
  };



})
