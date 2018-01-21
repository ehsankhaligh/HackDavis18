'use strict';

angular.module('myApp.requestMap', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: 'requestMap/requestMap.html',
    controller: 'MapCtrl'
  });
}])

.controller('MapCtrl', [function() {
}]);
