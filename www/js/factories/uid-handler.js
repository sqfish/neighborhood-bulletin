
angular.module('starter')

  .factory("uidHandler", function() {
    var uid = null;
    return {
      getUid: function() {
        return uid;
      },
      setUid: function(sentID) {
        uid = sentID;
        console.log("factory uid", uid);
      }
    };
  });