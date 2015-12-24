'use strict';

/* Controllers */

var beyondTodayApp = angular.module('beyondTodayApp', []);
beyondTodayApp.featuredUrl = 'http://www.ucg.org/api/v1.0/featured_media';
beyondTodayApp.mediaUrl = 'http://www.ucg.org/api/v1.0/media/';
beyondTodayApp.finalFeaturedUrl = "";
beyondTodayApp.featuredIds = "";

beyondTodayApp.controller('FeaturedRowCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get(beyondTodayApp.featuredUrl).success(function(data) {

    for(var fff in data.data){

      beyondTodayApp.featuredIds += data.data[fff].id + ",";
    }
      beyondTodayApp.featuredIds =   beyondTodayApp.featuredIds.substring(0,  beyondTodayApp.featuredIds.length -1);
      beyondTodayApp.finalFeaturedUrl = beyondTodayApp.mediaUrl + beyondTodayApp.featuredIds;

  $http.get(beyondTodayApp.finalFeaturedUrl).success(function(data) {
    
      $scope.featuredRowData = data.data;
    });
  });

}]);
