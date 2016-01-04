angular.module('pique.stories', []).filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]).controller('StoriesController', function ($scope, Stories, $window, $location) {
  $scope.data = [];
  $scope.getStories = function () {

    Stories.getStories($scope.input)
    .then(function (data) {
      console.log(data);
	    $scope.data.stories = data;
    });

    // after getStories, service > getOGImages 
    // for each site in $scope.data 

    // Stories.getOGImages($scope.input)
    // .then(function (data) {
    //   console.log(data);
    //   $scope.data.OGImages = data;
    // });
  };
});
