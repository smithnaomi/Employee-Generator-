const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const template = require("./src/pagetemplate");
const fs = require("fs");

const engineerQuestions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's Email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's Github username?",
    name: "github",
  },
];
const managerQuestions = [];
const internQuestions = [];
