'use strict';

/**
 * @ngdoc overview
 * @name lotteryOfBirthApp
 * @description
 * # lotteryOfBirthApp
 *
 * Main module of the application.
 */
angular
  .module('lotteryOfBirthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
