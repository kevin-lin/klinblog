'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BlogController', ['$scope', function($scope) {

  }])
  .controller('PostController', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://klinblog.firebaseio.com/");
    var sync = $firebase(ref);

    $scope.submitPost = function(){
      var currentTime = new Date().toJSON();
      sync.$push({"title": $scope.newPostTitle, "body": $scope.newPostBody, "timestamp": currentTime});
      $scope.newPostTitle = "";
      $scope.newPostBody = "";
    };
  }]);
