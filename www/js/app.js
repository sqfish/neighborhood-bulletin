// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.controllers3', 'starter.mainPage','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })    

  .state('app.general', {
    url: '/general',
    views: {
      'menuContent': {
        templateUrl: 'templates/general.html',
        controller: 'mainCtrl'
      }
    }
  })  

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.market', {
      url: '/market',
      views: {
        'menuContent': {
          templateUrl: 'templates/market.html',
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.lostFound', {
      url: '/lostFound',
      views: {
        'menuContent': {
          templateUrl: 'templates/lostFound.html',
          controller: 'mainCtrl'
        }
      }
    })
    .state('app.watchDogs', {
      url: '/watchDogs',
      views: {
        'menuContent': {
          templateUrl: 'templates/watchDogs.html',
          controller: 'mainCtrl'
        }
      }
    })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
