angular.module('pique.top', [])
.controller('TopController', function ($scope, Stories, $window, $location) {
    $scope.top = {};

    $scope.getTop = function() {
    	Stories.getTop()
    	.then( function(data) {
    		$scope.top = data;
    	})
    }

    $scope.getTop();
});