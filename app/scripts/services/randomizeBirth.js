'use strict';

angular.module('lotteryOfBirthApp')
  .service('randomizeBirth', function() {
  	this.countryList = getCountryList();
  	this.numCountries = getCountryList().length;
  });

var getCountryList = function() {
	var world = Datamap.prototype.worldTopo.objects.world.geometries;
	
	var names = _.pluck(world, 'id');
	var countryList = _.without(names, '-99');
	
	return countryList;
}