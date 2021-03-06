// TODO: Write code to define and export the Employee class
// refer to activity 20 = shape.js
// parent is employee
//   * name
//   * id
//   * email
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'
var inquirer = require('inquirer');
class Employee {
    // changed order! to fix tests
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Now the information needs to print 
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}


module.exports = Employee;