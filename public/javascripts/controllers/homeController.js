;(function () {
  'use strict';

  angular.module('homeControllers', [])
    .controller('homeController', homeController);

  function homeController() {
    var homeCtrl = this;

    homeCtrl.socialMedisSites = [
      {
        class: "fa fa-twitter-square",
        link: "https://twitter.com/architMahto276"
      },
      {
        class: "fa fa-linkedin-square",
        link: "https://www.linkedin.com/in/architmahto"
      },
      {
        class: "fa fa-github-square",
        link: "https://github.com/architMahto"
      },
      {
        class: "fa fa-stack-overflow",
        link: "https://careers.stackoverflow.com/architmahto"
      },
      {
        class: "fa fa-envelope",
        link: "mailto:architmahto@gmail.com"
      }
    ];
  }
})();
