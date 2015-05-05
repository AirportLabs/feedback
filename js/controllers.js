angular.module('starter.controllers', [])

.run(function($rootScope) {
  // we will store all of our form data in this object
  $rootScope.formData = {};
})

.controller('Q1', function($scope, $stateParams, $location) {
  $scope.submitAnswer = function() {
    console.log($scope.formData);
    if ($scope.formData.q1 == "arriving") {
      console.log('Q1 == arriving');
      $location.path("/tab/q2");
    } else {
      console.log('Q1 == arriving');
      $location.path("/tab/XXX");
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
      $location.path("/tab/XXX");
    };
  };
})

.controller('Q4', function($scope) {
  console.log($scope.formData);
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

.controller('Q6yes', function($scope) {
  console.log($scope.formData);
})

.controller('Q7', function($scope, $stateParams, $location) {
  console.log($scope.formData);
  $scope.submitAnswer = function() {
    if ($scope.formData.q7 === "YES") {
      $location.path("/tab/q7yes");
    } else {
      $location.path("/tab/done");
    };
  };
})

.controller('Q7yes', function($scope, $stateParams, $location) {
  console.log($scope.formData);
  $scope.submitAnswer = function() {
    $location.path("/tab/done");
    // $ionicHistory.clearHistory();
  };

})

.controller('AboutCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('users', function($scope) {

})

.controller('user', function($scope, $stateParams) {
  console.log($stateParams.userID);
});
