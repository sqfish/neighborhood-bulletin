angular.module('starter.mainPage', ["firebase"])

.controller('mainCtrl', function($scope, $firebaseArray) {
  var postsRef = new Firebase("https://neighbor-board.firebaseio.com/posts");
  $scope.groups = $firebaseArray(postsRef);

  console.log($scope.groups);
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});