'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('BlogController', ['$scope', function($scope) {

  }])
  .controller('PostController', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://klinblog.firebaseio.com/");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "data");
    
    $scope.submitPost = function(){
      console.log("submitPost called");
    };
  }]);
