angular.module('starter.myPostsPage', ["firebase"])

.controller('myPostsCtrl', ["$scope", "$firebaseArray","uidHandler", function($scope, $firebaseArray, uidHandler) {
  var postsRef = new Firebase("https://neighbor-board.firebaseio.com/posts");
  $scope.posts = $firebaseArray(postsRef);

  var myUid  = uidHandler.getUid();
   console.log("myUID", myUid);
  console.log($scope.posts);

  $scope.togglePost = function(post) {
    if ($scope.isPostShown(post)) {
      $scope.shownPost = null;
    } else {
      $scope.shownPost = post;
    }
  };
  $scope.isPostShown = function(post) {
    return $scope.shownPost === post;
  };

 $scope.killPost = function(post) {
      $scope.posts.$remove(post);
    }
}]);