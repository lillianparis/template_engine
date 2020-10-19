// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// * github  // GitHub username

// * getGithub()

// * getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
    }
}
github.printInfo()
module.ecports = Engineer