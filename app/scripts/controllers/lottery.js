'use strict';

/**
 * @ngdoc function
 * @name lotteryOfBirthApp.controller:LotteryCtrl
 * @description
 * # LotteryCtrl
 * Controller of the lotteryOfBirthApp
 */
angular.module('lotteryOfBirthApp')
  .controller('LotteryCtrl', ['$scope', 'randomizeBirth', function ($scope, randomizeBirth) {

  	$scope.colorSelected = '#0FA0FA';
  	$scope.colorDefault = '#ABDDA4';

  	$scope.chosenCountryName = '';
  	$scope.chosenCountryDescription = '';

    $scope.mapInit = function() { 
    	this.map = new Datamap({ element: document.getElementById('map') });
    };

    $scope.birth = function() {
    	var countryKey = randomizeBirth.get();
    	var countryEntry = _.findWhere(randomizeBirth.countryList, { id: countryKey })
    	var chosenCountryName = countryEntry['name'];
    	var chosenCountryDescription = countryEntry['description'];

    	// Update the map
    	this.updateMap(countryKey);

    	// Update the country name and description to be displayed
    	this.chosenCountryName = chosenCountryName;
    	this.chosenCountryDescription = chosenCountryDescription;

      // Regenerate tweet button
      $('.tweet-btn iframe').remove();
      var tweetBtn = $('<a></a>')
          .addClass('twitter-share-button')
          .attr('href', 'http://twitter.com/share')
          .attr('data-url', 'https://lottery-of-birth.herokuapp.com/')
          .attr('data-text', 'I took a #LotteryOfBirth and was born in ' + chosenCountryName + '. Where will you be born?');
      $('.tweet-btn').append(tweetBtn);
      twttr.widgets.load();

    };

    $scope.updateMap = function(country) { 
    	var data = {};
    	data[country] = this.colorSelected;

    	// Unhighlight previously selected countries
    	$('.datamaps-subunit').css('fill', this.colorDefault);

    	this.map.updateChoropleth(data);
    };
  }]);
