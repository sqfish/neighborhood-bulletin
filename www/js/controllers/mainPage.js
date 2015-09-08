angular.module('starter.mainPage', ["firebase"])

.controller('mainCtrl', function($scope, $firebaseArray) {
  var postsRef = new Firebase("https://neighbor-board.firebaseio.com/posts");
  $scope.posts = $firebaseArray(postsRef);

  console.log($scope.posts);
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
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

});