angular.module('pique.top', [])
.controller('TopController', function ($scope, Stories, $window, $location) {
    $scope.top = {};

    $scope.getTop = function() {
    	Stories.getTop()
    	.then( function(data) {
    		$scope.top = data;
    	})
    }

    $scope.topStories = {};

    $scope.getTopStories = function() {
    	Stories.getTopStories()
    	.then( function(data) {
    		console.log(data)
    		$scope.topStories = data;
    	})
    }

    $scope.getTop();
    $scope.getTopStories();

});