'use strict';

/**
 * @ngdoc function
 * @name personalprofileApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalprofileApp
 */
angular.module('personalprofileApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
