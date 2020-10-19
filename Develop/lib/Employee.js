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

class Employee {
    constructor(name, email, id) {
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