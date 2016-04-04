;(function () {
  'use strict';

  angular.module('homeControllers', [])
    .controller('homeController', homeController);

  function homeController() {
    var homeCtrl = this;

    homeCtrl.socialMedisSites = [
      {
        stackClass: "fa fa-square fa-stack-2x",
        stackColor: "#3A5795",
        iconClass: "fa fa-facebook fa-stack-1x",
        iconColor: "#FFFFFF",
        link: "https://www.facebook.com/archit.mahto"
      },
      {
        stackClass: "fa fa-square fa-stack-2x",
        stackColor: "#55ACEE",
        iconClass: "fa fa-twitter fa-stack-1x",
        iconColor: "#FFFFFF",
        link: "https://twitter.com/architMahto276"
      },
      {
        stackClass: "fa fa-square fa-stack-2x",
        stackColor: "#0077B5",
        iconClass: "fa fa-linkedin fa-stack-1x",
        iconColor: "#FFFFFF",
        link: "https://www.linkedin.com/in/architmahto"
      },
      {
        stackClass: "fa fa-circle fa-stack-2x",
        stackColor: "#FFFFFF",
        iconClass: "fa fa-github fa-stack-2x",
        iconColor: "#000000",
        link: "https://github.com/architMahto"
      },
      {
        stackClass: "fa fa-circle fa-stack-2x",
        stackColor: "#FFA500",
        iconClass: "fa fa-stack-overflow fa-stack-1x",
        iconColor: "#FFFFFF",
        link: "https://careers.stackoverflow.com/architmahto"
      },
      {
        stackClass: "fa fa-envelope fa-stack-2x",
        stackColor: "#FFFFFF",
        iconClass: "fa fa-envelope-o fa-stack-2x",
        iconColor: "#E93E30",
        link: "mailto:architmahto@gmail.com"
      }
    ];
  }
})();
