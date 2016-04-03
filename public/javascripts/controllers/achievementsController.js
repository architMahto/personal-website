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
          "As a Competent Communicator, prepared and delivered speech projects of great difficulty in areas such as interpersonal communication and humor enabling cordial and friendly interactions with future co-workers.",
          "In speech projects involving interpersonal communication, performed skits with another member dealing with interpersonal skills such as small talk, negotiation, verbal criticism, mentoring, and assertion.",
          "Before meetings, mentored fellow members who were attempting to attain the Competent Communicator Certificate which helped them achieve their goals in the process."
        ]
      },
      {
        title        : "Competent Communicator Certificate",
        organization : "Carleton Toastmasters",
        location     : "Ottawa, Ontario, Canada",
        date         : "April 2012",
        description  : [
          "As a member of Carleton Toastmasters, prepared and delivered speeches to improve public speaking skills.",
          "Joining a Toastmasters club for the first time, networked with various members."
        ]
      }
    ]
  }
})();
