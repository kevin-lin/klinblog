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
  $routeProvider.when('/post', {templateUrl: 'partials/post.html', controller: 'PostController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
