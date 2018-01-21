'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'firebase',
  'ngRoute',
  'myApp.requestView',
  'myApp.requestMap'
  // 'myApp.version'
]).config(['$locationProvider', '$routeProvider',
  function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
  }])
.controller('NavCtrl', function ($scope, $rootScope, $location) {
  $scope.location = $location.path();
  $rootScope.$on('$routeChangeSuccess', function () {
    $scope.location = $location.path();
  });
});