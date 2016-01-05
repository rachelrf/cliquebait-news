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


  return { 
    addNewTopic: addNewTopic,
    getStories: getStories,
    
  };



})
