angular.module('starter.controllers3', [])

.controller('HomeCtrl', ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
var ref = new Firebase("https://neighbor-board.firebaseio.com/posts/");

$scope.posts= $firebaseArray(ref);
console.log("$scope.posts :", $scope.posts);

}
]);
