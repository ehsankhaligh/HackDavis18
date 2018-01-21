'use strict';

angular.module('myApp.requestMap', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/request', {
    templateUrl: 'requestMap/requestMap.html',
    controller: 'RequestCtrl'
  });
}])

.controller('RequestCtrl', [function() {
  console.log('aaa');
}]);
