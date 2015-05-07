// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-timepicker', 'angularMoment'])

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

  .state('tab.q7', {
    url: '/q7',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q7.html',
        controller: 'Q7'
      }
    }
  })

  .state('tab.q8', {
    url: '/q8',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q8.html',
        controller: 'Q8'
      }
    }
  })

  .state('tab.q9', {
    url: '/q9',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q9.html',
        controller: 'Q9'
      }
    }
  })

  .state('tab.q10', {
    url: '/q10',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q10.html',
        controller: 'Q10'
      }
    }
  })

  .state('tab.q11', {
    url: '/q11',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q11.html',
        controller: 'Q11'
      }
    }
  })

  .state('tab.q12', {
    url: '/q12',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q12.html',
        controller: 'Q12'
      }
    }
  })

  .state('tab.q13', {
    url: '/q13',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q13.html',
        controller: 'Q13'
      }
    }
  })

  .state('tab.q26', {
    url: '/q26',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q26.html',
        controller: 'Q26'
      }
    }
  })

  .state('tab.q27', {
    url: '/q27',
    views: {
      'tab-give': {
        templateUrl: 'templates/tab-Q27.html',
        controller: 'Q27'
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

  // STATES FOR ABOUT AIRPORT

  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/q1');

})

.directive('standardTimeMeridian', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      etime: '=etime'
    },
    template: "<strong>{{stime}}</strong>",
    link: function(scope, elem, attrs) {

      scope.stime = epochParser(scope.etime, 'time');

      function prependZero(param) {
        if (String(param).length < 2) {
          return "0" + String(param);
        }
        return param;
      }

      function epochParser(val, opType) {
        if (val === null) {
          return "00:00";
        } else {
          var meridian = ['AM', 'PM'];

          if (opType === 'time') {
            var hours = parseInt(val / 3600);
            var minutes = (val / 60) % 60;
            var hoursRes = hours > 12 ? (hours - 12) : hours;

            var currentMeridian = meridian[parseInt(hours / 12)];

            return (prependZero(hoursRes) + ":" + prependZero(minutes) + " " + currentMeridian);
          }
        }
      }

      scope.$watch('etime', function(newValue, oldValue) {
        scope.stime = epochParser(scope.etime, 'time');
      });

    }
  };
})

.directive('standardTimeNoMeridian', function() {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      etime: '=etime'
    },
    template: "<strong>{{stime}}</strong>",
    link: function(scope, elem, attrs) {

      scope.stime = epochParser(scope.etime, 'time');

      function prependZero(param) {
        if (String(param).length < 2) {
          return "0" + String(param);
        }
        return param;
      }

      function epochParser(val, opType) {
        if (val === null) {
          return "00:00";
        } else {
          if (opType === 'time') {
            var hours = parseInt(val / 3600);
            var minutes = (val / 60) % 60;

            return (prependZero(hours) + ":" + prependZero(minutes));
          }
        }
      }

      scope.$watch('etime', function(newValue, oldValue) {
        scope.stime = epochParser(scope.etime, 'time');
      });

    }
  };
});
