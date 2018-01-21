'use strict';

angular.module('myApp.scheduleView', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/schedule', {
    templateUrl: 'scheduleView/scheduleView.html',
    controller: 'ScheduleCtrl'
  });
}])
.factory("queues", ["$firebaseObject",
  function ($firebaseObject) {
    var ref = firebase.database().ref('queues/csus/ecs/');
    return $firebaseObject(ref);
    // return [
    //   {
    //     tutor: {firstName: 'Joe', lastName: 'Gunchy'},
    //     queue: [
    //
    //       {start: '10:15', student: 'Joe Dart'},
    //       {start: '10:30', student: 'Jack Stratton'},
    //       {start: '10:45', student: 'Woody Goss'},
    //       {start: '11:00', student: 'Theo Katzman'},
    //     ],
    //   },
    //   {
    //     tutor: {firstName: 'John', lastName: 'Doe'},
    //     queue: [
    //       'aaa',
    //       'bbb',
    //       'ccc',
    //       'ddd',
    //       'eee',
    //     ],
    //   },
    // ]
  }
])
.factory("tutors", ["$firebaseObject",
  function ($firebaseObject) {
    var ref = firebase.database().ref('tutors/csus/ecs/');
    return $firebaseObject(ref);
  }])
.factory("courses", ["$firebaseArray",
  function ($firebaseArray) {
    var ref = firebase.database().ref('courses/csus/ecs/');
    return $firebaseArray(ref);
  }
])
.controller('ScheduleCtrl',
    ['$scope', 'queues', 'tutors', function ($scope, queues, tutors) {
      $scope.queuesFor = (tutorName) => {
        console.log($scope.queues);
        console.log(tutorName);
        console.log($scope.queues[tutorName]);

        function compare(a, b) {
          return a.lastName.localeCompare(b.lastName);
        }

        return $scope.queues[tutorName];
      };
      queues.$bindTo($scope, 'queues');
      $scope.courses = [];
      $scope.tutorsFor = {};

      // todo: probably should unwatch...
      tutors.$watch(() => {
        tutors.forEach((name_obj, name) => {
          // Object.keys(major_obj).forEach((name) => {
          Object.keys(name_obj.courses).forEach(course => {
            $scope.tutorsFor[course] = $scope.tutorsFor[course] || [];
            if ($scope.tutorsFor[course].indexOf(name) < 0) {
              $scope.tutorsFor[course].push(name);
            }
          })
        });
        $scope.courses = Object.keys($scope.tutorsFor);
        console.log(JSON.stringify($scope.courses));
        console.log('tutors:', $scope.tutorsFor);
      });

      // queues.watch(() => {
      //   queues.forEach((first_obj, first) => {
      //     Object.keys(first_obj).forEach(last => {
      //       Object.keys(queues[first][last]).forEach(time => {
      //
      //       })
      //     })
      //   })
      // })
    }])
;
