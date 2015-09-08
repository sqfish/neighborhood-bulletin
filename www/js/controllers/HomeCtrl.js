angular.module('starter.controllers3', [])

.controller('HomeCtrl', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
var ref = new Firebase("https://neighbor-board.firebaseio.com/posts/");

$scope.allPosts= $firebaseArray(ref);
console.log("$scope.posts :", $scope.posts);

  $scope.killPost = function(onePost) {
      $scope.allPosts.$remove(onePost);
    }
}
]);
