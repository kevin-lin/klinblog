'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/blog.html', controller: 'BlogController'});
  $routeProvider.when('/post/:postID', {templateUrl: 'partials/blog.html', controller: 'PostController'});
  $routeProvider.when('/new_post', {templateUrl: 'partials/new_post.html', controller: 'NewPostController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
