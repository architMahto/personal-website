;(function () {
  'use strict';

  angular.module('projectsControllers', [])
    .controller('projectsController', projectsController);

  function projectsController() {
    var projectsCtrl = this;

    projectsCtrl.projects = [
      {
        title        : "personal-website",
        showLink     : true,
        link         : "https://github.com/architMahto/personal-website-3.git",
        techs        : ['NodeJS', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Bower'],
        description  : [
          "This project is the website you are currently visiting. It is built using Node.js with the home pageloaded from the server. Angular is used for loading information to every page. Angular UI Routing is used for routing to various pages. Bower was used to install client-side packages.",
          "This website was built to be viewed on any device responsively.",
        ]
      },
      {
        title        : "draw-simulator",
        showLink     : true,
        link         : "https://github.com/architMahto/RU-Midterm-Project_draw-simulator.git",
        techs        : ['Angular', 'HTML', 'CSS', 'Materialize', 'Firebase'],
        description  : [
          "This is an app I'm developing for soccer fans and fans of the FIFA series around the world. The idea was conceived as I was playing Career Mode in FIFA 15 and I had to conduct a draw for the Champions League in my first season in Career Mode. Doing this by paper was a chore, which made me think about using programming.",
          "As more ideas came in for how to enter clubs and how to conduct draws, the decision was made to use Angular and JavaScript. AngularJS was chosen because it was most adept at conducting draws. The clubs will be entered by the client and then sent to the server. A Firebase database was used to store teams entered into a tournament.",
          "The website is also designed with Materialize for mobile use as well. Once a hosting solution is found, this website will be available to everyone."
        ]
      },
      {
        title        : "pietalk",
        showLink     : false,
        techs        : ['Python', 'TKinter'],
        description  : [
          "For COMP 3203 (Principles of Computer Networks) at Carleton University - Fall 2014",
          "Pietalk is a IRC-like chat messenger program that was built and designed with Python. With the use of the TKinter library, I was personally responsible for designing the GUI of the program for the client. A Python shell was used as the server to connect two or more clients.",
          "<em>Code private due to University plagiarism regulations.</em>"
        ]
      },
      {
        title        : "kings-and-things",
        showLink     : false,
        techs        : ['Java', 'UML', 'JUnit'],
        description  : [
          "For COMP 3004 (Object Oriented Software Engineering) at Carleton University - Winter 2014",
          "<em>Kings and Things</em> is a classic board game designed by Tom Wham. It is about warring kingdoms in a fantasy land and the legion of things that inhabit them. The project called for the design of this board game as software using object-oriented programming, computer networking principles, design patterns, and software design principles.",
          "<em>Code private due to University plagiarism regulations.</em>"
        ]
      }
    ]
  }
})();
