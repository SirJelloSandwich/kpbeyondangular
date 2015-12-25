'use strict';

/* Directives */
var beyondtodayDirectives = angular.module('beyondtodayDirectives', []);

beyondtodayDirectives.directive('keyTrap', function() {
  return function( scope, elem ) {
    elem.bind('keydown', function( event ) {
      scope.$broadcast('keydown', event.keyCode );
    });
    elem.bind('keyup', function( event ) {
      scope.$broadcast('keyup', event.keyCode );
    });
  };
});
