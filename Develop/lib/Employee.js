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

class employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Now the information needs to print 
    printInfo() {
        for (const key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}


module.exports = employee;