;(function () {
  'use strict';

  angular.module('softSkillsControllers', [])
    .controller('softSkillsController', softSkillsController);

  function softSkillsController() {
    var softSkillsCtrl = this;

    softSkillsCtrl.skills = [
      {
        category : "Communication Skills",
        types    : ["Documentation", "Humorously Speaking Skills", "Interpersonal Communication", "Networking", "Storytelling", "Toastmaster"]
      },
      {
        category : "Analytical Skills",
        types    : ["Debugging", "Problem Solver"]
      },
      {
        category : "Leadership Skills",
        types    : ["Mentoring"]
      },
      {
        category : "Languages",
        types    : ["English", "French", "Hindi"]
      }
    ]
  }
})();
