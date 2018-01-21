'use strict';

angular.module('myApp.requestView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/request', {
    templateUrl: 'requestView/requestView.html',
    controller: 'RequestCtrl'
  });
}])
.factory("courses", ["$firebaseArray",
  function($firebaseArray) {
    var ref = firebase.database().ref('courses/csus/ecs/');
    return $firebaseArray(ref);
  }
])

.controller('RequestCtrl', ['$scope', 'courses', function($scope, courses) {
  $scope.courses = courses;
}]);