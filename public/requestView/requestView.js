'use strict';

angular.module('myApp.requestView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/request', {
    templateUrl: 'requestView/requestView.html',
    controller: 'RequestCtrl'
  });
}])
.controller('RequestCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('yee');
  $scope.form = {}
  $scope.cors = ["Logic-Design", "Computer-Organization",
    "Intelligent-Systems", "Operating-System", "Gas-Dynamics",
    "Introduction-To-Robotics", "Thermal-Fluid-Systems", "Machine-Vision",
    "Physical-Electronics", "Signals&Systems", "Soil-Mechanics"];
  $scope.submitForm = function() {
    $http.post('/api/csus/ecs', $scope.form).then((res) => {
      alert(`You have been scheduled for ${res.data.time} with ${res.data.tutor}.`);
    });
    console.log($scope.form);
  }
}]);