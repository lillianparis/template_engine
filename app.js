const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

function startEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "Choose",
            message: "Choose new role you would like to add:",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {

            type: "input",
            name: "Name",
            message: "Enter employee's name:",
        },
        {
            type: "input",
            name: "Id",
            message: "Enter employee's ID:",
        },
        {
            type: "input",
            name: "Email",
            message: "Enter employee's email:",
        },
        
    ])
    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.
        .then(function (answers) {
            if (answers.Choose === "Manager") {
                inquirer.prompt([
                    {

                        type: "input",
                        name: "Office",
                        message: "Enter employee's office number",

                    }
                ])
                    .then(function (res) {
                        const manager = new Manager(answers.Name, answers.Id, answers.Email, res.Office);
                        employees.push(manager);
                        addRole();
                    })
            } else if (answers.Choose === "Engineer") {
                inquirer.prompt([
                    {

                        type: "input",
                        name: "Github",
                        message: "Enter employee's GitHub username:",

                    }
                ])
                    .then(function (res) {
                        const engineer = new Engineer(answers.Name, answers.Id, answers.Email, res.Github);
                        employees.push(engineer);
                        addRole();
                    })
            } else if (answers.Choose === "Intern") {
                inquirer.prompt([
                    {

                        type: "input",
                        name: "School",
                        message: "Enter employee's School:",

                    }
                ])
                    .then(function (res) {
                        const intern = new Intern(answers.Name, answers.Id, answers.Email, res.School);
                        employees.push(intern);
                        addRole();
                    })
            }
        })
}
// At the end the user will be prompted if they want to add another user to the list, if not.. the user will be displayed with and html file of the users they have entered.
function addRole() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "Add",
            message: "Would you like to add another employee?",
            // Starts with true but user can pick false
            default: true,
        }
        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!
    ]).then(function (res) {
        // displays response
        console.log(res)
        if (res.Add) {
            newEmployee();
        } else {
            const employeeData = render(employees);
            fs.writeFile(outputPath, employeeData, function (err) {
                if (err) throw err;
                console.log("Added new employee(s)")
            })
        }
    })
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
startEmployee();




// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work! ```