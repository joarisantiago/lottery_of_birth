'use strict';

angular.module('lotteryOfBirthApp')
  .service('randomizeBirth', ['country', function(country) {
  	this.countryList = country.countryList;
  	this.numCountries = this.countryList.length;

  	this.get = function () { 
  		var countries = this.countryList;
  		var rand = countries[Math.floor(Math.random() * countries.length)];
  		var countryKey = rand['id']
  		return countryKey;
  	};
  }]);