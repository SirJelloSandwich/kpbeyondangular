'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://www.ucg.org/api/v1.0/featured_media').success(function(data) {
    $scope.phones = data;
    console.log($scope.phones);
  });

  $scope.orderProp = 'position';
}]);
