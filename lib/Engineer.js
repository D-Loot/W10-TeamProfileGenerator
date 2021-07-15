// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// ----------------- REPLACEMENT --------------------
// Super class calls with super
// The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} roars.`);
//   }
// }

// let l = new Lion('Fuzzy');
// l.speak();
// // Fuzzy makes a noise.
// // Fuzzy roars.