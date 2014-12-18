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

  	$scope.chosenCountryName = '';

    $scope.mapInit = function() { 
    	this.map = new Datamap({ element: document.getElementById('map') });
    };

    $scope.birth = function() {
    	var countryKey = randomizeBirth.get();
    	var countryEntry = _.findWhere(randomizeBirth.countryList, { id: countryKey })
    	var chosenCountryName = countryEntry['name'];

    	// Update the map
    	this.updateMap(countryKey);

    	// Update the country name for view
    	this.chosenCountryName = chosenCountryName;
    };

    $scope.updateMap = function(country) { 
    	var data = {};
    	data[country] = this.colorSelected;

    	// Unhighlight previously selected countries
    	$('.datamaps-subunit').css('fill', this.colorDefault);

    	this.map.updateChoropleth(data);
    };
  }]);
