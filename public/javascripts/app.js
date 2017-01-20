(function() {
  'use strict';

  var app = angular.module('pirates', ['ngRoute'])


  app.controller('PiratesController', ['$scope','ngRoute',
    function($scope, ngRoute) {
      $scope.thing = 4 + 7;
    }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
      controller: 'PiratesController',
      templateUrl: "views/pirates.html"
    });
  }]);
})();
