const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getgithub() {
    return this.github;
  }

  getrole() {
    return "Engineer";
  }
}
module.exports = Engineer;
