const Manager = require("../lib/Manager.js");

describe("getName", () => {
  it('Get the name of the Manager', () => {
    const getNameObject = {
      type:"input",
      message: `What is the Manager's name? \n`,
      name: "name",
  };
  const testGetNameObject = new Manager().getName();
    expect(getNameObject).toEqual(testGetNameObject);
    });
});

describe("getID", () => {
  it('Get the ID of the Manager', () => {
    const getIdObject = {
      type:"input",
      message: `What is the Manager's Id? \n`,
      name: "id",
  };
  const testGetIdObject = new Manager().getId();
    expect(getIdObject).toEqual(testGetIdObject);
    });
});

describe("getEmail", () => {
  it('Get the email of the Manager', () => {
    const getEmailObject = {
      type:"input",
      message: `What is the Manager's email? \n`,
      name: "email",
    };
    const testGetEmailObject = new Manager().getEmail();
    expect(getEmailObject).toEqual(testGetEmailObject);
  });
});

describe("getOfficeNumber", () => {
  it('Get the Office Number', () => {
    const getOfficeNumberObject = {
      type:"input",
      message: "What is the Office Number? \n",
      name: "officeNumber",
    };
    const testGetOfficeNumberObject = new Manager().getOfficeNumber();
    expect(getOfficeNumberObject).toEqual(testGetOfficeNumberObject);
  });
});

describe("getRole", () => {
  it('Get the role of the Manager', () => {
    const getRoleString = "Manager";
    const testGetRoleString = new Manager().getRole();
    expect(getRoleString).toEqual(testGetRoleString);
    });
});