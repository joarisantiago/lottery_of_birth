'use strict';

/**
 * @ngdoc function
 * @name lotteryOfBirthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lotteryOfBirthApp
 */
angular.module('lotteryOfBirthApp')
  .controller('MainCtrl', function ($scope) {

    $scope.mapInit = function() { 
    	this.map = new Datamap({ element: document.getElementById('map') });
    };

    $scope.birth = function() {
    	this.map.updateChoropleth({ 
    		CAN: '#0fa0fa'
    	});
    };
  });
