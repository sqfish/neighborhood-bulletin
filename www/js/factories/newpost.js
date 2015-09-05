angular.module('newpoststorage', [])
.factory('newpost', ["$firebaseArray", 
  function($firebaseArray) {
    var ref = new Firebase("https://music-history-ng.firebaseio.com/songlist");
    $firebaseArray(ref);
    var newPost = {};
    return {
      set: function(key, value) {
        newPost[key] = value;
        console.log("key stored", key);
        console.log("value stored", value);
      },
      get: function(key) {
        if (newPost.hasOwnProperty(key)) {
          return newPost[key];
        }
      }
    };
  }
]);