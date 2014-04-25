'use strict';

var delphiApp = angular.module('delphiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'delphiControllers'
  ])
  delphiApp.config(['$routeProvider',
      function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Angular', {
        templateUrl: 'views/Angular.html',
        controller: 'EmptyCtrl'
      })
      .when('/Quartiles', {
        templateUrl: 'views/Quartiles.html',
        controller: 'QuartsCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  }]);






