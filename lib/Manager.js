// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//  * officeNumber
//   * getRole() // Overridden to return 'Manager'

// Refering to activity 20, day 3, rectangle.js

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
getOfficeNumber() {
    return this.officeNumber;
}
    getRole() {
        return "Manager";
    }
}

module.exports = Manager