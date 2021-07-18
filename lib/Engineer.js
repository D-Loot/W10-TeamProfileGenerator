const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name,id,email);
  }

  getGithub(){
    return {
      type:"input",
      message: `What is the ${this.getRole()}'s github username? \n`,
      name: "github",
    }
  }

  getRole(){
    return "Engineer";
  }
}

module.exports = Engineer