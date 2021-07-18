const Employee = require("../lib/Employee.js");

describe("getName", () => {
  it('Get the name of the Employee', () => {
    const getNameObject = {
      type:"input",
      message: `What is the Employee's name? \n`,
      name: "name",
  };
  const testGetNameObject = new Employee().getName();
    expect(getNameObject).toEqual(testGetNameObject);
    });
});

describe("getID", () => {
  it('Get the ID of the Employee', () => {
    const getIdObject = {
      type:"input",
      message: `What is the Employee's Id? \n`,
      name: "id",
  };
  const testGetIdObject = new Employee().getId();
    expect(getIdObject).toEqual(testGetIdObject);
    });
});

describe("getEmail", () => {
  it('Get the email of the employee', () => {
    const getEmailObject = {
      type:"input",
      message: `What is the Employee's email? \n`,
      name: "email",
    };
    const testGetEmailObject = new Employee().getEmail();
    expect(getEmailObject).toEqual(testGetEmailObject);
  });
});

describe("getRole", () => {
  it('Get the role of the Employee', () => {
    const getRoleString = "Employee";
    const testGetRoleString = new Employee().getRole();
    expect(getRoleString).toEqual(testGetRoleString);
    });
});