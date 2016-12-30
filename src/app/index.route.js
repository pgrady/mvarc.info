(function() {
  'use strict';

  angular
    .module('mvarcInfo')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'app/main/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'app/main/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
