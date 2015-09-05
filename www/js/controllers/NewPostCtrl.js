angular.module('starter.newpostform', ["newpoststorage"])
.controller('NewPostCtrl', ["$scope", "$firebaseArray", "$location", "newpost",
  function($scope, $firebaseArray, $location, storage) {
    var ref = new Firebase("https://neighbor-board.firebaseio.com/posts");
    $scope.postlist = $firebaseArray(ref);
    $scope.categoryObject = "";
    $scope.newPost = {
      "category": "",
      "content": {
        "title": "",
        "body": "",
        "image": ""
      },
      "location": {
        "address": "",
        "city": "",
        "state": "",
        "zip": ""
      },
      "timeStamp": {
        "date": "",
        "time": ""
      },
      "uid": ""
    };
    $scope.$on('$ionicView.enter', function(e) {
      $scope.categoryObject = storage.get("category");
      $scope.newPost.category = $scope.categoryObject.title;
    });
    $scope.postData = function() {
      $scope.postlist.$add($scope.newPost);
    }
  }
]);