angular.module('starter.newpostform', ["newpoststorage", "ngCordova"])
.controller('NewPostCtrl', ["$scope", "$firebaseArray", "$location", "newpost", "$cordovaCamera", "$cordovaFileTransfer",
  function($scope, $firebaseArray, $location, storage, $cordovaCamera, $cordovaFileTransfer) {
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
      "timestamp": {
        "eventDate": "",
        "eventTime": ""
      },
      "uid": ""
    };
    $scope.$on('$ionicView.enter', function(e) {
      $scope.categoryObject = storage.get("category");
      $scope.newPost.category = $scope.categoryObject.title;
    });

    document.addEventListener("deviceready", function () {
      $scope.openPhotoLibrary = function() {
          var options = {
              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
              allowEdit: true,
              encodingType: Camera.EncodingType.JPEG,
              popoverOptions: CameraPopoverOptions,
              saveToPhotoAlbum: false
          };
          $cordovaCamera.getPicture(options).then(function(imageData) {
              $scope.newPost.content.image = imageData;  
              var image = document.getElementById('tempImage');
              image.src = imageData;

              var imageData = $scope.newPost.content.image;
              var server = "https://api.imgur.com/3/image.json",
                  filePath = imageData,
                  headers = {'Authorization': 'Client-ID 4ff4d561a18ac75'};
              var options = {
                headers: headers,
                fileKey: "image",
                fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
                mimeType: "image/jpg"
              };
              $cordovaFileTransfer.upload(server, filePath, options).then(function(result) {
                var responseData = JSON.parse(result.response);
                $scope.newPost.content.image = responseData.data.link;
              }, function(err) {
                  console.log("ERROR: " + JSON.stringify(err));
              }, function (progress) {
                  // progress updates
              });
          }, function(err) {
              console.log(err);
          });
      };
      $scope.postData = function() {
        $scope.newPost.timestamp.post = (new Date()).toLocaleString();
        $scope.newPost.timestamp.eventDate = document.getElementById("newDate").value;
        $scope.newPost.timestamp.eventTime = document.getElementById("newTime").value;
        $scope.postlist.$add($scope.newPost);
        $location.url('/');
      };
    }, false);
}
]);