;(function () {
  'use strict';

  angular.module('projectsControllers', [])
    .controller('projectsController', projectsController);

  function projectsController() {
    var projectsCtrl = this;

    projectsCtrl.projects = [
      {
        title        : "personal-website",
        link         : "https://github.com/architMahto/personal-website-3.git",
        techs        : ['NodeJS', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Bower'],
        description  : [
          "This project is the website you are currently visiting. It is built using Node.js with content being loaded from the server. JQuery is used to change the DOM to display any section you want to see.",
          "This website was built to be viewed on any device as a responsible mobile design.",
        ]
      },
      {
        title        : "draw-simulator",
        link         : "https://github.com/architMahto/RU-Midterm-Project_draw-simulator.git",
        techs        : ['Angular', 'HTML', 'CSS', 'Materialize'],
        description  : [
          "This is an app I'm developing for soccer fans and fans of the FIFA series around the world. The idea was conceived as I was playing Career Mode in FIFA 15 and I had to conduct a draw for the Champions League in my first season in Career Mode. Doing this by paper was a chore, which made me think about using programming.",
          "As more ideas came in for how to enter clubs and how to conduct draws, the decision was made to use Node.js and JavaScript. Because the draw has to be conducted on the server, Node.js will be the best framework for this app. The clubs will be entered by the client and then sent to the server. Backbone.js will be used for the UI for ease in deciding what clubs will be used and MongoDB will be to store a database of all the clubs in UEFA.",
          "The website is also designed with Bootstrap for mobile use as well. Once a hosting solution is found, this website will be available to everyone."
        ]
      },
      {
        title        : "Pietalk",
        link         : "https://github.com/architMahto/RU-Midterm-Project_draw-simulator.git",
        techs        : ['Python', 'TKinter'],
        description  : [
          "For COMP 3203 (Principles of Computer Networks) at Carleton University - Fall 2014",
          "Pietalk is a IRC-like chat messenger program that was built and designed with Python. With the use of the TKinter library, I was personally responsible for designing the GUI of the program for the client. A Python shell was used as the server to connect two or more clients.",
          "<em>Code private due to University plagiarism regulations.</em>"
        ]
      },
      {
        title        : "kings-and-things",
        link         : "https://github.com/architMahto/RU-Midterm-Project_draw-simulator.git",
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
