'use strict';

/* Controllers */

var beyondTodayApp  = angular.module('beyondTodayApp', []);
//var this = beyondTodayApp;

beyondTodayApp.featuredUrl = 'http://www.ucg.org/api/v1.0/featured_media';
beyondTodayApp.mediaUrl = 'http://www.ucg.org/api/v1.0/media/';
beyondTodayApp.finalFeaturedUrl = "";
beyondTodayApp.featuredIds = "";

beyondTodayApp.controller('FeaturedRowCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.pos = 0;
  $http.get(beyondTodayApp.featuredUrl).success(function(data) {

    for(var fff in data.data){

      beyondTodayApp.featuredIds += data.data[fff].id + ",";
    }
      beyondTodayApp.featuredIds =   beyondTodayApp.featuredIds.substring(0,  beyondTodayApp.featuredIds.length -1);
      beyondTodayApp.finalFeaturedUrl = beyondTodayApp.mediaUrl + beyondTodayApp.featuredIds;

    $http.get(beyondTodayApp.finalFeaturedUrl).success(function(data) {

        $scope.featuredRowData = data.data;
        $(".featuredRowContainer").css('width',data.data.length *845);
      });
  });
  $scope.$on('keydown', function( msg, code ) {
    //console.log("down"+code);
    switch (code) {
      case 37://LEFT

        break;
      case 38://UP

        break;
      case 39://RIGHT

        break;
      case 40://DOWN

        break;

      default:
        break;

    }
 });
 $scope.$on('keyup', function( msg, code ) {
   //console.log("up"+code);
});


}]);

beyondTodayApp.directive('keyTrap', function() {
  return function( scope, elem ) {
    elem.bind('keydown', function( event ) {
      scope.$broadcast('keydown', event.keyCode );
    });
    elem.bind('keyup', function( event ) {
      scope.$broadcast('keyup', event.keyCode );
    });
  };
});
