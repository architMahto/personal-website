(function() {
  'use strict';

  angular.module('personalApp', ['homeControllers', 'aboutControllers', 'ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController as homeCtrl'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'aboutController as aboutCtrl'
      })
      .state('projects',{
        url: '/projects',
        templateUrl: 'views/projects.html'
      })
      .state('technical-skills',{
        url: '/technical-skills',
        templateUrl: 'views/technical-skills.html'
      })
      .state('soft-skills',{
        url: '/soft-skills',
        templateUrl: 'views/soft-skills.html'
      })
      .state('history',{
        url: '/history',
        templateUrl: 'views/history.html'
      })
      .state('education',{
        url: '/education',
        templateUrl: 'views/education.html'
      })
      .state('achievements',{
        url: '/achievements',
        templateUrl: 'views/achievements.html'
      })
      $urlRouterProvider.otherwise('/');
  }
})();
