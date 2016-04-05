;(function () {
  'use strict';

  angular.module('achievementsControllers', [])
    .controller('achievementsController', achievementsController);

  function achievementsController() {
    var achievementsCtrl = this;

    achievementsCtrl.extracurriculars = [
      {
        title        : "Advanced Bronze Communicator Certificate",
        organization : "Carleton Toastmasters",
        location     : "Ottawa, Ontario, Canada",
        date         : "May 2013",
        description  : [
          "<span>Prepared and delivered speech projects</span> of great difficulty in areas such as <span>interpersonal communication</span> and <span>humor</span>.",
          "<span>Prepared and performed skits with other members</span> for interpersonal communication projects.",
          "<span>Mentored fellow members</span> who were attempting to attain the Competent Communicator Certificate before meetings."
        ]
      },
      {
        title        : "Competent Communicator Certificate",
        organization : "Carleton Toastmasters",
        location     : "Ottawa, Ontario, Canada",
        date         : "April 2012",
        description  : [
          "As a member of Carleton Toastmasters, <span>prepared and delivered speeches</span> to improve public speaking skills.",
          "Joining a Toastmasters club for the first time, <span>networked with various members</span>."
        ]
      }
    ]
  }
})();
