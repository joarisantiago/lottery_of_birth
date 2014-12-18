'use strict';

/**
 * @ngdoc function
 * @name lotteryOfBirthApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lotteryOfBirthApp
 */
angular.module('lotteryOfBirthApp')
  .controller('MainCtrl', ['$scope', 'randomizeBirth', function ($scope, randomizeBirth) {

  	$scope.colorSelected = '#0FA0FA';
  	$scope.colorDefault = '#ABDDA4';

  	$scope.countryName = '';

    $scope.mapInit = function() { 
    	this.map = new Datamap({ element: document.getElementById('map') });
    };

    $scope.birth = function() {
    	var country = randomizeBirth.get();
    	var countryName = randomizeBirth.countryKeyPair[country];

    	// Update the map
    	this.updateMap(country);

    	// Update the country
    	this.countryName = countryName;

    };

    $scope.updateMap = function(country) { 
    	var data = {};
    	data[country] = this.colorSelected;

    	// Unhighlight previously selected countries
    	$(".datamaps-subunit").css('fill', this.colorDefault);

    	this.map.updateChoropleth(data);
    };
  }]);
