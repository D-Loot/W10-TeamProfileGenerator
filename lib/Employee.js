// The first class is an Employee parent class with the following properties and methods:

// const inquirer = require('inquirer');

class Employee {
  constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
  }
    // Add the questions here and in the subclasses then run the inquirer in the main index.html file.
    // REF: https://stackoverflow.com/questions/55959659/return-answer-of-inquirer-prompt-inside-of-another-function

  getName(){
    return {
        type:"input",
        message: `What is the ${this.getRole()}'s name? \n`,
        name: "name",
    }
  }
  getId(){
    return {
        type:"input",
        message: `What is the ${this.getRole()}'s Id? \n`,
        name: "id",
    }
  }

  getEmail(){
    return {
        type:"input",
        message: `What is the ${this.getRole()}'s email? \n`,
        name: "email",
    }
  }

  getRole(){
    // console.log("Employee")
    return "Employee"
  }
}

// -------------------------------------------------
// Start Over and append the questions to an array.
// Then do a single inquiry in index and return the values to the object.

// The Immediate inquiries are not registering. Something else will have to be done.
// -------------------------------------------------

//   getName(){
//     inquirer.prompt([
//       {
//         type:"input",
//         message: "What is the Employee's name? \n",
//         name: "name",
//       }
//     ]).then((response) => {
//       Employee.name = response})
//   }

//   getId(){
//     inquirer.prompt([
//       {
//         type:"input",
//         message: "What is the Employee's name? \n",
//         name: "name",
//       }
//     ]).then((response) => {
//       Employee.id = response})
//   }

//   getEmail(){
//     inquirer.prompt([
//       {
//         type:"input",
//         message: "What is the Employee's email? \n",
//         name: "email",
//       }
//     ]).then((response) => {
//       Employee.id = response})
//   }

//   getRole(){
//     return "Employee"
//   }
// }

module.exports = Employee