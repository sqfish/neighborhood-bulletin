angular.module('starter.newposttype', ["newpoststorage"])
.controller('PostTypeCtrl', ["$scope", "newpost", 
  function($scope, storage) {
    $scope.posttypes = [
      { title: 'General', id: 1, icon: "ion-earth" },
      { title: 'Events', id: 5, icon: "ion-calendar" },
      { title: 'Marketplace', id: 4, icon: "ion-pricetag" },
      { title: 'Lost & Found', id: 2, icon: "ion-arrow-swap" },
      { title: 'Crime', id: 3, icon: "ion-alert-circled" }
    ];

    $scope.onTap = function (value) {
      storage.set("category", value);
    }
  }
]);