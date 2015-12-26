'use strict';

/* App Module */

var beyondTodayApp  = angular.module('beyondTodayApp', [
  'ngRoute',
  'beyondtodayControllers',
  'beyondtodayDirectives'
]);

beyondTodayApp.featuredUrl = 'http://www.ucg.org/api/v1.0/featured_media';
beyondTodayApp.mediaUrl = 'http://www.ucg.org/api/v1.0/media/';
beyondTodayApp.finalFeaturedUrl = "";
beyondTodayApp.featuredIds = "";

beyondTodayApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/app', {
        templateUrl: 'partials/landingpage.html',
        controller: 'LandingPageCtrl'
      }).
      when('/app/springboard', {
        templateUrl: '',
        controller: ''
      }).
      otherwise({
        redirectTo: '/app'
      });
  }]);
