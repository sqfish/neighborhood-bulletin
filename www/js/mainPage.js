angular.module('starter.mainPage', ["firebase"])

.controller('mainCtrl', function($scope, $firebaseArray, $ionicModal ) {
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

$ionicModal.fromTemplateUrl('templates/comment.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

      $scope.openModal = function(){
    $scope.modal.show();
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }

  $scope.comment = [];
  $scope.btn_add = function() {
      if($scope.txtcomment !=''){
      $scope.comment.push($scope.txtcomment);
      $scope.txtcomment = "";
      }
  }
  $scope.remItem = function($index) {
    $scope.comment.splice($index, 1);
    }

   
});

