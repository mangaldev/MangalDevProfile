'use strict';

angular.module('personalprofileApp')
       .controller('IndexController', ['$scope','$location', '$anchorScroll',
       	function ($scope,$location,$anchorScroll) {

    $scope.scrollToAboutMe = function (){
      $location.hash('end-about-me');
      $anchorScroll();
    };

}]);
