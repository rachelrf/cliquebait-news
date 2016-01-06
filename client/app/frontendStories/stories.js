angular.module('pique.stories', [])
.controller('StoriesController', function ($scope, Stories, $window, $location) {
  $scope.data = [];
  $scope.getStories = function () {
    Stories.getStories($scope.input)
    .then(function (data) {
	    $scope.data.stories = data;
    });
  };

  $scope.clickStory = function(url) {
  	Stories.updateStoryCount(url);
  }
});
