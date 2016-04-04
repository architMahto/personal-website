;(function () {
  'use strict';

  angular.module('historyControllers', [])
    .controller('historyController', historyController);

  function historyController() {
    var historyCtrl = this;

    historyCtrl.employmentHistory = [
      {
        title        : "Sales Assistant",
        organization : "Artiv Controls Ltd.",
        timeframe    : "May 2010 - August 2010",
        description  : [
          "<strong>Assisted in completing sales projects</strong> including proposal and marketing.",
          "Entered orders, debit, and credit memos into company database.",
          "<strong>Ensured accuracy of entries</strong> with accounting department.",
          "<strong>Maintained internal record-keeping system</strong> for employer to easily access and navigate."
        ]
      },
      {
        title        : "Technical Support",
        organization : "Tempotech Controls Ltd.",
        timeframe    : "July 2008 - August 2008",
        description  : [
          "<strong>Programmed temperature transmitters and indicators</strong> which involved specifying inputs, setting relays and alarms.",
          "<strong>Used AutoCad to prepare GA (general arrangement) drawings</strong> for thermocouple assembly.",
          "Assisted technician of duty in assembly and <strong>testing of RTDs and thermocouples.</strong>",
          "<strong>Prepared and updated customer database</strong> for the employer to easily access and navigate customer contact information."
        ]
      }
    ]

    historyCtrl.voluteeringHistory = [
      {
        title        : "Secretary",
        organization : "Carelton Toastmasters",
        timeframe    : "July 2015 - January 2016",
        description  : [
          "<strong>Wrote notes on every agenda</strong> discussed during the meeting.",
          "<strong>Maintained copies of Carleton Toastmasters club documents</strong> such as Club Constitution, club files, and minutes of executive meetings.",
          "<strong>Reported newly sworn-in club officers</strong> to Toastmasters International World Headquarters.",
          "<strong>Delivered minutes of previous club meetings</strong> to fellow club officers."
        ]
      },
      {
        title        : "Tutor",
        organization : "Carelton University",
        timeframe    : "September 2014 - April 2015",
        description  : [
          "<strong>Improved grades and performance of students</strong> in Calculus, Linear Algebra, Data Structures, and Fundamentals of Web Applications."
        ]
      },
      {
        title        : "Sergeant-At-Arms",
        organization : "Carelton Toastmasters",
        timeframe    : "July 2012 - July 2013",
        description  : [
          "<strong>Organized meetings</strong> before they started.",
          "<strong>Introduced the chair of meeting</strong> at the start of meeting."
        ]
      }
    ]
  }
})();
