const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const fs = require("fs");

const employees = [];

let cardsHtml = "";

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

      employees.push(newEmployee)

      let card =`<div class="card text-white bg-primary mb-3 d-flex justify-content-center m-3" style="max-width: 18rem; min-width: 12rem;">
        <div class="card-header">${newEmployee.getRole()}
        </div>
        <div class="card-body bg-light">
          <h5 class="card-title text-dark">${newEmployee.name}</h5>
          <p class="card-text text-dark border p-1">ID: ${newEmployee.id}</p>
          <p class="card-text text-dark border p-1">Email: <a href="mailto: ${newEmployee.email}" class="hover-text">${newEmployee.email}</a></p>
          <p class="card-text text-dark border p-1">Office #: ${newEmployee.officeNumber}</p>
        </div>
      </div>`
      cardsHtml += card

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
        console.log(`\n\nEmployee ID: ${response.id} already exists and was not added. Submit a different Employee.\n`);
      } else {
        newEmployee.name = response.name;
        newEmployee.id = response.id;
        newEmployee.email = response.email;
        newEmployee.github = response.github;
// TODO - log the new employee to an array of employees

        employees.push(newEmployee)

        const card =`<div class="card text-white bg-primary mb-3 d-flex justify-content-center m-3" style="max-width: 18rem; min-width: 12rem;">
          <div class="card-header">${newEmployee.getRole()}
          </div>
          <div class="card-body bg-light">
            <h5 class="card-title text-dark">${newEmployee.name}</h5>
            <p class="card-text text-dark border p-1">ID: ${newEmployee.id}</p>
            <p class="card-text text-dark border p-1">Email: <a href="mailto: ${newEmployee.email}" class="hover-text">${newEmployee.email}</a></p>
            <p class="card-text text-dark border p-1">GitHub #: <a href="https://github.com/${newEmployee.github}" class="hover-text">${newEmployee.github}</a></p>
          </div>
        </div>`
        cardsHtml += card
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
        employees.push(newEmployee)

        const card =`<div class="card text-white bg-primary mb-3 d-flex justify-content-center m-3" style="max-width: 18rem; min-width: 12rem;">
          <div class="card-header">${newEmployee.getRole()}
          </div>
          <div class="card-body bg-light">
            <h5 class="card-title text-dark">${newEmployee.name}</h5>
            <p class="card-text text-dark border p-1">ID: ${newEmployee.id}</p>
            <p class="card-text text-dark border p-1">Email: <a href="mailto: ${newEmployee.email}" class="hover-text">${newEmployee.email}</a></p>
            <p class="card-text text-dark border p-1">School #: ${newEmployee.school}</p>
          </div>
        </div>`
        cardsHtml += card
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
        completeCode(cardsHtml)
        return
      }
    }
  )
}

function completeCode(renderedCards){

  const code = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>My Team</title>
      </head>
      <body>
        <header class="text-center text-white bg-danger mb-3 h3 pt-3 pb-3">
          My Team
        </header>
        <section class="d-flex justify-content-center flex-wrap">
        ${renderedCards}
        </section>
      </body>
    </html>`

  fs.writeFile(`./dist/MyTeam.html`,code, function (err) {
    if (err) throw err;
    console.log(`Website Created!`);
  })
}

function init(){
  addManager()
}

init()
