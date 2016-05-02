;(function () {
  'use strict';

  angular.module('technicalSkillsControllers', [])
    .controller('technicalSkillsController', technicalSkillsController);

  function technicalSkillsController() {
    var technicalSkillsCtrl = this;

    technicalSkillsCtrl.skills = [
      {
        category  : "Programming Languages",
        techs     : ["C", "C++", "C#", "Java", "PHP", "Prolog", "Python", "Ruby", "Scheme", "UML"]
      },
      {
        category  : "Markup Languages",
        techs     : ["HTML", "LaTeX", "Markdown"]
      },
      {
        category  : "Style Sheet Languages",
        techs     : ["CSS"]
      },
      {
        category  : "Source Code Management Systems",
        techs     : ["Git", "SVN"]
      },
      {
        category  : "Database Management Systems",
        techs     : ["Firebase", "MongoDB" , "MySQL"]
      },
      {
        category  : "Operating Systems",
        techs     : ["Android OS", "Linux/Unix", "Microsoft Windows", "Mac OSX"]
      },
      {
        category  : "Software",
        techs     : ["Eclipse", "Microsoft Visual Studio", "Qt Creator", "XCode", "Unity"]
      },
      {
        category  : "Text Editors",
        techs     : ["Atom", "Brackets", "Emacs", "Geany", "Notepad++", "Sublime Text", "Vim"]
      },
      {
        category  : "JavaScript Libraries",
        techs     : ["AngularJS", "Backbone.js", "Express.js", "JQuery", "Node.js", "Videogular"]
      },
      {
        category  : "Web Frameworks",
        techs     : ["Bootstrap", "Django", "Google Web Toolkit", "Materialize", "Spring"]
      },
      {
        category  : "Testing Frameworks",
        techs     : ["Cucumber", "JUnit", "Jasmine", "Selenium"]
      },
      {
        category  : "Programming Paradigms",
        techs     : ["Functional", "Imperative", "Object-Oriented", "Procedural"]
      },
      {
        category  : "Software Development Processes",
        techs     : ["Agile", "Behavior-Driven-Development", "Scrum", "Test-Driven-Development"]
      }
    ]
  }
})();
