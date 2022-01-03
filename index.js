const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const template = require("./src/pagetemplate");
const fs = require("fs");

const engineerQuestions = [];
const managerQuestions = [];
const internQuestions = [];
