angular.module('starter.controllers', [])

.run(function($rootScope) {
  // we will store all of our form data in this object
  $rootScope.formData = {};
})

.controller('Q1', function($scope, $stateParams, $location) {
  $scope.submitAnswer = function() {
    console.log($scope.formData);
    if ($scope.formData.q1 == "departing") {
      console.log('Q1 == departing');
      $location.path("/tab/q2");
    } else {
      console.log('Q1 == arriving');
      // get a random whole number between 5 and 13
      var randomNum = Math.floor((Math.random() * 9) + 5);
      console.log('randomNum: ' + randomNum);
      $location.path("/tab/q" + randomNum);
    };
  };
})

.controller('Q2', function($scope) {
  console.log($scope.formData);
})

.controller('Q3', function($scope, $stateParams, $location) {
  $scope.submitAnswer = function() {
    console.log($scope.formData);
    if ($scope.formData.q3 == "yes") {
      $location.path("/tab/q4");
    } else {
      $location.path("/tab/q26");
    };
  };
})

.controller('Q4', function($scope, $stateParams, $location) {
  $scope.submitAnswer = function() {
    console.log($scope.formData);
    // get a random number between 1 and 3
    var randomNum = Math.floor((Math.random() * 3) + 1);
    console.log('randomNum: ' + randomNum);
    if (randomNum === 1) {
      $location.path("/tab/q5");
    } else if (randomNum === 2) {
      $location.path("/tab/q8");
    } else if (randomNum === 3) {
      $location.path("/tab/q11");
    };
  };
})

.controller('Q5', function($scope) {
  console.log($scope.formData);
})

.controller('Q6', function($scope, $stateParams, $location) {
  console.log($scope.formData);
  $scope.submitAnswer = function() {
    console.log($scope.formData);
    if ($scope.formData.q6 == "YES") {
      console.log('Q6 == YES');
      $location.path("/tab/q6yes");
    } else {
      $location.path("/tab/q7");
    };
  };
})

.controller('Q7', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q8', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q9', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q10', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q11', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q12', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q13', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q26', function($scope, $stateParams, $location) {
  console.log($scope.formData);
})

.controller('Q27', function($scope, $stateParams, $location) {
  console.log($scope.formData);
  // ref: https://github.com/rajeshwarpatlolla/ionic-timepicker
  $scope.slots = {
    epochTime: 12600,
    format: 12,
    step: 1
  };
  $scope.submitAnswer = function() {
    console.log('yo');
  };
})

// .controller('Q7yes', function($scope, $stateParams, $location) {
//   console.log($scope.formData);
//   $scope.submitAnswer = function() {
//     $location.path("/tab/done");
//     // $ionicHistory.clearHistory();
//   };
// })

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
