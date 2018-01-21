'use strict';

angular.module('myApp.scheduleView', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'scheduleView/scheduleView.html',
    controller: 'ScheduleCtrl'
  });
}])
.factory("queues", ["$firebaseArray",
  function ($firebaseArray) {
    // var ref = firebase.database().ref('queues/csus/ecs/');
    // return $firebaseArray(ref);
    return [
      {
        tutor: {firstName: 'Joe', lastName: 'Gunchy'},
        queue: [
          'aaa',
          'bbb',
          'ccc',
          'ddd',
          'eee',
        ],
      },
      {
        tutor: {firstName: 'John', lastName: 'Doe'},
        queue: [
          'aaa',
          'bbb',
          'ccc',
          'ddd',
          'eee',
        ],
      },
    ]
  }
])
.controller('ScheduleCtrl', ['$scope', 'queues', function ($scope, queues) {
  $scope.queues = queues;

}]);
