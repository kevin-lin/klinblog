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
    $scope.previewDate = new Date().toJSON();

    $scope.submitPost = function(){
      if(!$scope.newPostTitle || !$scope.newPostBody){
        return;
      }
      var currentTime = new Date().toJSON();
      sync.$push({"title": $scope.newPostTitle, "body": $scope.newPostBody, "timestamp": currentTime});
      $scope.newPostTitle = "";
      $scope.newPostBody = "";
    };

    var addHTMLTag = function(tag){
      if($scope.newPostBody){
        $scope.newPostBody += tag;
      }
      else{
        $scope.newPostBody = tag;
      }
    };
    $scope.addParagraph = function(){
      addHTMLTag('<p></p>');
    };
    $scope.addHorizontalRule= function(){
      addHTMLTag('<hr>');
    };
    $scope.addLink = function(){
      addHTMLTag('<a href="#"></a>');
    };
    $scope.addEmphasis = function(){
      addHTMLTag('<em></em>');
    };
    $scope.addStrong= function(){
      addHTMLTag('<strong></strong>');
    };
    $scope.addBlockquote = function(){
      addHTMLTag('\n<blockquote>\n  <p></p>\n</blockquote>');
    };
    $scope.addHeading = function(){
      addHTMLTag('<h2></h2>');
    };
    $scope.addSubheading = function(){
      addHTMLTag('<h3></h3>');
    };
    $scope.addCodeBlock = function(){
      addHTMLTag('<pre><code></code></pre>');
    };
    $scope.addUnorderedList = function(){
      addHTMLTag('\n<ul>\n  <li></li>\n</ul>');
    };
    $scope.addOrderedList = function(){
      addHTMLTag('\n<ol>\n  <li></li>\n</ol>');
    };
  }]);
