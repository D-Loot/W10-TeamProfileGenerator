const Employee = require('./Employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name,id,email);
  }

  getOfficeNumber(){
    return {
      type:"input",
      message: "What is the Office Number? \n",
      name: "officeNumber",
    }
  }

  getRole(){
    return "Manager";
  }
}

module.exports = Manager