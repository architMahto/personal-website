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
        timeframe   : "February 2016 - April 2016",
        description : "Studies to date include <span>front-end development</span>, <span>object-oriented programming</span>, <span>functional programming</span>, <span>web frameworks</span>, and <span>web application development</span>."
      },
      {
        speciality  : "Bachelor of Computer Science: Major",
        name        : "Carleton University",
        location    : "Ottawa, Ontario, Canada",
        timeframe   : "July 2012 - January 2016",
        description : "Studies to date include <span>object-oriented programming</span>, <span>web application development</span>, <span>discrete mathametics</span>, <span>algorithm and data structure analysis</span>, <span>non-relational database design</span>, <span>relational database design</span>, <span>operating systems</span>, <span>functional programming</span>, <span>network programming</span>, and <span>software quality assurance</span>."
      },
      {
        speciality  : "Electrical Engineering",
        name        : "Carleton University",
        location    : "Ottawa, Ontario, Canada",
        timeframe   : "September 2008 - June 2012",
        description : "Studies to date include introduction to <span>engineering problem solving</span>, <span>circuits and signals</span>, <span>numerical algorithms</span>, <span>object-oriented programming</span>, <span>semiconductor physics</span>, <span>digital electronics</span>, <span>electromagnetics</span>, and <span>assembly language</span>."
      }
    ]
  }
})();
