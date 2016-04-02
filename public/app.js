(function() {
  'use strict';

  angular.module('personalApp', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/home.html'
      })
      $urlRouterProvider.otherwise('/');
  }
})();
