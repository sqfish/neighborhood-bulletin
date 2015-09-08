angular.module('starter.commentPage', [])

.controller('commentCtrl', function($scope, $ionicModal) {
  console.log('click');
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
});