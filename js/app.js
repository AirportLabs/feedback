// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  // STATES FOR GIVING FEEDBACK

  .state('tab.give', {
    url: '/give',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-give.html',
        controller: 'GiveCtrl'
      }
    }
  })

  .state('tab.register', {
    url: '/register',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-register.html',
        controller: 'register'
      }
    }
  })

  .state('tab.q1', {
    url: '/q1',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q1.html',
        controller: 'Q1'
      }
    }
  })

  .state('tab.q2', {
    url: '/q2',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q2.html',
        controller: 'Q2'
      }
    }
  })

  .state('tab.q3', {
    url: '/q3',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q3.html',
        controller: 'Q3'
      }
    }
  })

  .state('tab.q4', {
    url: '/q4',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q4.html',
        controller: 'Q4'
      }
    }
  })

  .state('tab.q5', {
    url: '/q5',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q5.html',
        controller: 'Q5'
      }
    }
  })

  .state('tab.q6', {
    url: '/q6',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q6.html',
        controller: 'Q6'
      }
    }
  })

  .state('tab.q6yes', {
    url: '/q6yes',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-q6yes.html',
        controller: 'Q6yes'
      }
    }
  })

  .state('tab.q7', {
    url: '/q7',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q7.html',
        controller: 'Q7'
      }
    }
  })

  .state('tab.q7yes', {
    url: '/q7yes',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-q7yes.html',
        controller: 'Q7yes'
      }
    }
  })

  .state('tab.done', {
    url: '/done',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-done.html'
      }
    }
  })

  // STATES FOR VIEWING FEEDBACK

  .state('tab.view', {
    url: '/view',
    views: {
      'tab-view': {
        templateUrl: 'templates/tab-view.html',
        controller: 'ViewCtrl'
      }
    }
  })

  .state('tab.users', {
    url: '/users',
    views: {
      'tab-view': {
        templateUrl: 'templates/tab-users.html',
        controller: 'users'
      }
    }
  })

  .state('tab.user', {
    url: '/user/:userID',
    views: {
      'tab-view': {
        templateUrl: 'templates/tab-user.html',
        controller: 'user'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/give');

});
