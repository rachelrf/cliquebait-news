angular.module('pique.trending', [])
.controller('TrendingController', function ($scope, Stories, $window, $location) {
    $scope.trending = {};

    $scope.getTrending = function() {
    	Stories.getTrending()
    	.then( function(data) {
    		$scope.trending = data;
    	})
    }

    $scope.getTrending();
});

