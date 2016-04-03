;(function () {
  'use strict';

  angular.module('educationControllers', [])
    .controller('educationController', educationController);

  function educationController() {
    var educationCtrl = this;

    educationCtrl.schools = [
      {
        speciality  : "Full Stack Web Development",
        name        : "RefactorU",
        location    : "Boulder, Colorado, USA",
        timeframe   : "February 2016 - present (expected April 2016)",
        description : "Studies to date include front-end development, object-oriented programming, functional programming, web frameworks, and web application development."
      },
      {
        speciality  : "Bachelor of Computer Science: Major",
        name        : "Carleton University",
        location    : "Ottawa, Ontario, Canada",
        timeframe   : "July 2012 - January 2016",
        description : "Studies to date include object-oriented programming, web application development, discrete mathametics, algorithm and data structure analysis, non-relational database design, relational database design, operating systems, functional programming, network programming, and software quality assurance."
      },
      {
        speciality  : "Electrical Engineering",
        name        : "Carleton University",
        location    : "Ottawa, Ontario, Canada",
        timeframe   : "September 2008 - June 2012",
        description : "Studies to date include introduction to engineering problem solving, circuits and signals, numerical algorithms, object-oriented programming, semiconductor physics, digital electronics, electromagnetics, and assembly language."
      }
    ]
  }
})();
