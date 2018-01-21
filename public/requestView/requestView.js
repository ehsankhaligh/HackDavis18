'use strict';

angular.module('myApp.requestView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/request', {
    templateUrl: 'requestView/requestView.html',
    controller: 'RequestCtrl'
  });
}])

.controller('RequestCtrl', [function() {
  console.log('aaa');
}]);