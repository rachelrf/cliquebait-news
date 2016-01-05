angular.module('pique', [
  'pique.stories',
  'pique.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'app/frontendStories/stories.html',
      controller: 'StoriesController',
      
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
