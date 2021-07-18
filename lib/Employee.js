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

module.exports = Employee