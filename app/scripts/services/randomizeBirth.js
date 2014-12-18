'use strict';

angular.module('lotteryOfBirthApp')
  .service('randomizeBirth', function() {
  	this.countryList = getCountryList();
  	this.numCountries = getCountryList().length;
  	this.countryKeyPair = getCountryKeyPair();

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

var getCountryKeyPair = function() { 
	var world = Datamap.prototype.worldTopo.objects.world.geometries;

	var keys = _.pluck(world, 'id');
	var properties = _.pluck(world, 'properties');
	var names = _.pluck(properties, 'name');

	var countryKeyPair = _.object(keys, names);

	return countryKeyPair;
}