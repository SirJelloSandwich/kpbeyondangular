'use strict';

/* Controllers */

var beyondtodayControllers = angular.module('beyondtodayControllers', []);

beyondtodayControllers.controller('LandingPageCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.pos = -307.5;
  var index = 1;

  $http.get(beyondTodayApp.featuredUrl)
    .success(function(data) {
      for (var fff in data.data) {
        beyondTodayApp.featuredIds += data.data[fff].id + ",";
      }
      beyondTodayApp.featuredIds = beyondTodayApp.featuredIds.substring(0, beyondTodayApp.featuredIds.length - 1);
      beyondTodayApp.finalFeaturedUrl = beyondTodayApp.mediaUrl + beyondTodayApp.featuredIds;
      console.log("success0");
    })
    .error(function(data, status) {
      console.error('Repos error0', status, data);
    })
    .finally(function() {
      console.log("finally finished repos0");
      $http.get(beyondTodayApp.finalFeaturedUrl)
        .success(function(data1) {
          $scope.featuredRowData = data1.data;
          $(".featuredRowContainer").css('width', $scope.featuredRowData.length * 845);
          console.log("success1");
        })
        .error(function(data, status) {
          console.error('Repos error1', status, data);
        })
        .finally(function() {
          console.log("finally finished repos1");
        });
    });

  $scope.$on('keydown', function(msg, code) {

    switch (code) {
      case 13: //SELECT

        break;
      case 37: //LEFT
        if (index === 0) {
          return;
        }
        index -= 1;
        $scope.pos += 845;
        $(".featuredRowContainer").css('-webkit-transform', 'translate3d(' + $scope.pos + 'px,0px,0px)');
        break;
      case 38: //UP

        break;
      case 39: //RIGHT
        if (index === $scope.featuredRowData.length - 1) {
          return;
        }
        index += 1;
        $scope.pos -= 845;
        $(".featuredRowContainer").css('-webkit-transform', 'translate3d(' + $scope.pos + 'px,0px,0px)');
        break;
      case 40: //DOWN

        break;

      default:
        break;

    }
  });
  $scope.$on('keyup', function(msg, code) {

  });


}]);
