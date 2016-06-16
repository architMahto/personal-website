;(function () {
  'use strict';

  angular.module('historyControllers', [])
    .controller('historyController', historyController);

  function historyController() {
    var historyCtrl = this;

    historyCtrl.employmentHistory = [
      {
        title        : "Teaching Assistant",
        organization : "Artiv Controls Ltd.",
        timeframe    : "May 2016 - present",
        description  : [
          "<span>Assist students<span> gain a better understanding of web development principles.",
          "<span>Ensure students maintain their timeline for midterm and final projects</span> in time for delivery.",
          "<span>Continue to expand</span> my web development and computer science knowledge."
        ]
      },
      {
        title        : "Sales Assistant",
        organization : "Artiv Controls Ltd.",
        timeframe    : "May 2010 - August 2010",
        description  : [
          "<span>Assisted in completing sales projects</span> including proposal and marketing.",
          "Entered orders, debit, and credit memos into company database.",
          "<span>Ensured accuracy of entries</span> with accounting department.",
          "<span>Maintained internal record-keeping system</span> for employer to easily access and navigate."
        ]
      },
      {
        title        : "Technical Support",
        organization : "Tempotech Controls Ltd.",
        timeframe    : "July 2008 - August 2008",
        description  : [
          "<span>Programmed temperature transmitters and indicators</span> which involved specifying inputs, setting relays and alarms.",
          "<span>Used AutoCad to prepare GA (general arrangement) drawings</span> for thermocouple assembly.",
          "Assisted technician of duty in assembly and <span>testing of RTDs and thermocouples.</span>",
          "<span>Prepared and updated customer database</span> for the employer to easily access and navigate customer contact information."
        ]
      }
    ]

    historyCtrl.voluteeringHistory = [
      {
        title        : "Secretary",
        organization : "Carelton Toastmasters",
        timeframe    : "July 2015 - January 2016",
        description  : [
          "<span>Wrote notes on every agenda</span> discussed during the meeting.",
          "<span>Maintained copies of Carleton Toastmasters club documents</span> such as Club Constitution, club files, and minutes of executive meetings.",
          "<span>Reported newly sworn-in club officers</span> to Toastmasters International World Headquarters.",
          "<span>Delivered minutes of previous club meetings</span> to fellow club officers."
        ]
      },
      {
        title        : "Tutor",
        organization : "Carelton University",
        timeframe    : "September 2014 - April 2015",
        description  : [
          "<span>Improved grades and performance of students</span> in Calculus, Linear Algebra, Data Structures, and Fundamentals of Web Applications."
        ]
      },
      {
        title        : "Sergeant-At-Arms",
        organization : "Carelton Toastmasters",
        timeframe    : "July 2012 - July 2013",
        description  : [
          "<span>Organized meetings</span> before they started.",
          "<span>Introduced the chair of meeting</span> at the start of meeting."
        ]
      }
    ]
  }
})();
