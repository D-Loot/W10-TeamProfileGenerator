// GIVEN a command-line application that accepts user input
    // WHEN I am prompted for my team members and their information
        // THEN an HTML file is generated that displays a nicely formatted team roster based on user input

    // WHEN I click on an email address in the HTML
        // THEN my default email program opens and populates the TO field of the email with the address

    // WHEN I click on the GitHub username
        // THEN that GitHub profile opens in a new tab

    // WHEN I start the application
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

    // WHEN I enter the team manager’s name, employee ID, email address, and office number
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

    // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

    // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

    // WHEN I decide to finish building my team
        // THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');

// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = []

const checkIfIdExists = (id) => employees.find((emp) => emp.id === id);

function addManager(){
  let questions = [];

  const newEmployee = new Manager();

  questions.push(newEmployee.getName())
  questions.push(newEmployee.getId())
  questions.push(newEmployee.getEmail())
  questions.push(newEmployee.getOfficeNumber())

  inquirer.prompt(
    questions
  )
  .then((response) =>
    {
      newEmployee.name = response.name;
      newEmployee.id = response.id;
      newEmployee.email = response.email;
      newEmployee.officeNumber = response.officeNumber;
// TODO - log the new employee to an array of employees
      console.log(
        `${newEmployee.name}
        ${newEmployee.id}
        ${newEmployee.email}
        ${newEmployee.officeNumber}
        ${newEmployee.getRole()}`
      )
      employees.push(newEmployee)
      addTeamMembers()
    }
  )
}

function addEngineer(){
  let questions = [];

  const newEmployee = new Engineer();

  questions.push(newEmployee.getName())
  questions.push(newEmployee.getId())
  questions.push(newEmployee.getEmail())
  questions.push(newEmployee.getGithub())

  inquirer.prompt(
    questions
  )
  .then((response) =>
    {
      if (checkIfIdExists(response.id)){
        console.log(`\n\nEmployee ID: ${response.id} already exists and was not added. Submit a different Employee.\n\n`);
      } else {
        newEmployee.name = response.name;
        newEmployee.id = response.id;
        newEmployee.email = response.email;
        newEmployee.github = response.github;
// TODO - log the new employee to an array of employees
        console.log(
        `${newEmployee.name}
        ${newEmployee.id}
        ${newEmployee.email}
        ${newEmployee.github}
        ${newEmployee.getRole()}`
      )
      employees.push(newEmployee)
      }
      addTeamMembers();
    }
  )
}

function addIntern(){
  let questions = [];

  const newEmployee = new Intern();

  questions.push(newEmployee.getName())
  questions.push(newEmployee.getId())
  questions.push(newEmployee.getEmail())
  questions.push(newEmployee.getSchool())

  inquirer.prompt(
    questions
  )
  .then((response) =>
    {
      if (checkIfIdExists(response.id)){
        console.log(`\n\nEmployee ID: ${response.id} already exists and was not added. Submit a different Employee.\n\n`);
      } else {
        newEmployee.name = response.name;
        newEmployee.id = response.id;
        newEmployee.email = response.email;
        newEmployee.school = response.school;
  // TODO - log the new employee to an array of employees
        console.log(
          `${newEmployee.name}
          ${newEmployee.id}
          ${newEmployee.email}
          ${newEmployee.school}
          ${newEmployee.getRole()}`
        )
        employees.push(newEmployee)
      }
      addTeamMembers();
    }
  )
}

function addTeamMembers(){
  inquirer.prompt(
    [{
      type:"list",
      message: "What is the Employee's position? \n",
      choices: ["Engineer", "Intern","Finish"],
      name: "type",
    },
    ]
  )
  .then((response) =>
    {
      if (response.type === "Engineer"){
        addEngineer();
      } else if (response.type === "Intern"){
        addIntern();
      } else {
        console.log(employees);
        return
      }
    }
  )
}

function init(){
  addManager();
}
init()
