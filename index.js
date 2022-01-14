const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMembers = [];
const path = require('path');
const dist = path.resolve (__dirname, "dist");
const indexFile = path.join (dist, "index.html");
const render = require("./src/template.js");

function generateTeam() {
  function createTeam() {
    inquirer.prompt([
      {
        type: "list",
        message: "What is the role of the employee?",
        choices: [
          "manager",
          "engineer",
          "intern",
          "I don't want to add any more employees",
        ],
        name: "employeeList",
      },
    ])
    .then((choice) => {
        if (choice.employeeList === "manager") {
          createManager () 
        } else if (choice.employeeList === "engineer") {
          createEngineer ()
        }
        else if (choice.employeeList === "intern") {
          createIntern ()
        }
        else {
          buildHtml ()
        }
    })
  }
  createTeam ()
  //function for creating a manager
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is the manager's ID number?",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is manager's email address?",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "what is manager's office number?",
          name: "officeNumber",
        },
    
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.officeNumber
        );
        console.log (manager.getRole())
        teamMembers.push(manager);
        console.log(teamMembers);
        createTeam ()
      });
  }
  //replicate functionality of manager for intern and engineer

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is engineer's ID number?",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is engineer's email address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "what is engineer's Github username?",
          name: "github",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.github
        );
        teamMembers.push(engineer);
        console.log(teamMembers);
        createTeam ()
      });
  }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is intern's ID number?",
          name: "internId",
        },
        {
          type: "input",
          message: "What is intern's email address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "what is intern's school?",
          name: "school",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.school
        );
        teamMembers.push(intern);
        console.log(teamMembers);
        createTeam ()
      });
      
  }
  function buildHtml (){
    fs.writeFileSync (indexFile, render(teamMembers), "utf-8")
  }
}
generateTeam();
