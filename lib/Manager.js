const Employee = require("./Employee");
const inquirer = require("inquirer");

//MANAGER CLASS
class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = role;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
