angular.module('pique', [
  'pique.stories',
  'pique.services',
  'pique.trending',
  'pique.top',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'app/frontendStories/stories.html',
      controller: 'StoriesController',
      
    })
    .when('/home', {
      templateUrl: 'app/frontendStories/stories.html',
      controller: 'StoriesController',
      
    })
    .when('/top', {
      templateUrl: 'app/frontendStories/top.html',
      controller: 'TopController',
      
    })
    .when('/trending', {
      templateUrl: 'app/frontendStories/trending.html',
      controller: 'TrendingController',
      
    })
    .otherwise( {
      templateUrl: 'app/frontendStories/stories.html',
      controller: 'StoriesController',
      
    });

    


})

.run(function ($rootScope, $location) {
  
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    
  });
});
