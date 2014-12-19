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
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'LotteryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
