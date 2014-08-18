'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BlogController', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://klinblog.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.posts = sync.$asArray();
  }])
  .controller('PostController', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://klinblog.firebaseio.com/");
    var sync = $firebase(ref);

    $scope.submitPost = function(){
      if(!$scope.newPostTitle || !$scope.newPostBody){
        return;
      }
      var currentTime = new Date().toJSON();
      sync.$push({"title": $scope.newPostTitle, "body": $scope.newPostBody, "timestamp": currentTime});
      $scope.newPostTitle = "";
      $scope.newPostBody = "";
    };
  }]);
