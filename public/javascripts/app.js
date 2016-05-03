(function() {
  'use strict';

  angular.module('personalApp', ['navControllers', 'homeControllers', 'aboutControllers', 'projectsControllers', 'technicalSkillsControllers', 'softSkillsControllers', 'historyControllers', 'educationControllers', 'achievementsControllers', 'ngAnimate', 'ngSanitize', 'ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {

    // $locationProvider.html5Mode(true);

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
        templateUrl: 'views/projects.html',
        controller: 'projectsController as projectsCtrl'
      })
      .state('technical-skills',{
        url: '/technical-skills',
        templateUrl: 'views/technical-skills.html',
        controller: 'technicalSkillsController as technicalSkillsCtrl'
      })
      .state('soft-skills',{
        url: '/soft-skills',
        templateUrl: 'views/soft-skills.html',
        controller: 'softSkillsController as softSkillsCtrl'
      })
      .state('history',{
        url: '/history',
        templateUrl: 'views/history.html',
        controller: 'historyController as historyCtrl'
      })
      .state('education',{
        url: '/education',
        templateUrl: 'views/education.html',
        controller: 'educationController as educationCtrl'
      })
      .state('achievements',{
        url: '/achievements',
        templateUrl: 'views/achievements.html',
        controller: 'achievementsController as achievementsCtrl'
      })
      $urlRouterProvider.otherwise('/');
  }
})();
