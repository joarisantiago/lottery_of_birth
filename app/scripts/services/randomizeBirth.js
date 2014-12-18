'use strict';

angular.module('lotteryOfBirthApp')
  .service('randomizeBirth', function() {
  	this.countryList = getCountryList();
  	this.numCountries = getCountryList().length;

  	this.get = function () { 
  		var countries = this.countryList;
  		var rand = countries[Math.floor(Math.random() * countries.length)];
  		return rand;
  	};
  });

var getCountryList = function() {
	var world = Datamap.prototype.worldTopo.objects.world.geometries;
	
	var names = _.pluck(world, 'id');
	var countryList = _.without(names, '-99');
	
	return countryList;
};