'use strict';

angular.module('myApp.HomeView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'HomeView/HomeView.html',
    controller: 'RequestCtrl'
  });
}])

.controller('RequestCtrl', [function() {
}]);
