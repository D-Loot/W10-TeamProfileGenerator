const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name,id,email);
  }

  getSchool(){
    return {
      type:"input",
      message: `What is the ${this.getRole()}'s school? \n`,
      name: "school",
    }
  }

  getRole(){
    return "Intern";
  }
}

module.exports = Intern