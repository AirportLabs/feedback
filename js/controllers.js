angular.module('starter.controllers', [])

.run(function($rootScope) {
  // we will store all of our form data in this object
  $rootScope.formData = {};
})

.controller('GiveCtrl', function($scope) {
  // stuff goes here
})

.controller('register', function($scope, $stateParams, $location) {
  $scope.registerUser = function() {
    console.log($scope.formData);
    $location.path("/tab/q1");
  };
})

.controller('Q1', function($scope) {
  console.log($scope.formData);
})

.controller('Q2', function($scope) {
  console.log($scope.formData);
})

.controller('Q3', function($scope) {
  console.log($scope.formData);
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
    alert($scope.formData.q6);
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

.controller('ViewCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('users', function($scope) {

})

.controller('user', function($scope, $stateParams) {
  console.log($stateParams.userID);
});
