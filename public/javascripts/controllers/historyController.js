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
          "When sales projects were not complete, assisted in completing sales projects including proposal and marketing.",
          "After transactions were completed, entered orders, debit, and credit memos in the system and interacted with the accounting department to ensure accuracy.",
          "In order to keep all records of transactions and records, maintained internal record-keeping system for employer to easily access and navigate."
        ]
      },
      {
        title        : "Technical Support",
        organization : "Tempotech Controls Ltd.",
        timeframe    : "July 2008 - August 2008",
        description  : [
          "While dealing with products related to the oil industry, programmed temperature transmitters and indicators which involved specifying inputs, setting relays and alarms.",
          "In order to design a thermocouple, prepared GA (general arrangement) drawings for thermocouple assemblies using AutoCad.",
          "Before readying RTDs and thermocouples for delivery, extended helping hand to technician on duty in assembly and testing of RTDs and thermocouples.",
          "When the employer’s customers were not in a computerized database, prepared and updated customer database for the employer to easily access and navigate customer contact information."
        ]
      }
    ]

    historyCtrl.voluteeringHistory = [
      {
        title        : "Secretary",
        organization : "Carelton Toastmasters",
        timeframe    : "July 2015 - January 2016",
        description  : [
          "During the procession of executive meetings, wrote notes on every agenda discussed during the meeting.",
          "Maintained copies of Carleton Toastmasters club documents such as Club Constitution, club files, and minutes of executive meetings.",
          "As new club officers are sworn into the list of club executives, reported club officers to Toastmasters International World Headquarters.",
          "Before club executive meetings, posted minutes of previous club meetings online and notified club members that minutes are available for review."
        ]
      },
      {
        title        : "Tutor",
        organization : "Carelton University",
        timeframe    : "September 2014 - April 2015",
        description  : [
          "Worked with students for whom Linear Algebra and Calculus were not strong suits, and helped them achieve better grades and perform strongly in midterms and final exams.",
          "Invited students, who were struggling with understanding Data Structures, to my house and helped them achieve better grades in their assignments.",
          "Helped students who were struggling with their understanding of web applications and allowed them to achieve better grades in their assignments."
        ]
      },
      {
        title        : "Sergeant-At-Arms",
        organization : "Carelton Toastmasters",
        timeframe    : "July 2012 - July 2013",
        description  : [
          "Before Toastmasters meetings, organized meeting by placing equipment where they had to be set across the room.",
          "At the start of the meeting, introduced the Chair of the night’s meeting making the Chair feel welcome and comfortable in the room."
        ]
      }
    ]
  }
})();
