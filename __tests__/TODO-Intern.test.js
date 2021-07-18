const Intern = require("../lib/Intern.js");

describe("getName", () => {
  it('Get the name of the Intern', () => {
    const getNameObject = {
      type:"input",
      message: `What is the Intern's name? \n`,
      name: "name",
  };
  const testGetNameObject = new Intern().getName();
    expect(getNameObject).toEqual(testGetNameObject);
    });
});

describe("getID", () => {
  it('Get the ID of the Intern', () => {
    const getIdObject = {
      type:"input",
      message: `What is the Intern's Id? \n`,
      name: "id",
  };
  const testGetIdObject = new Intern().getId();
    expect(getIdObject).toEqual(testGetIdObject);
    });
});

describe("getEmail", () => {
  it('Get the email of the Intern', () => {
    const getEmailObject = {
      type:"input",
      message: `What is the Intern's email? \n`,
      name: "email",
    };
    const testGetEmailObject = new Intern().getEmail();
    expect(getEmailObject).toEqual(testGetEmailObject);
  });
});

describe("getSchool", () => {
  it('Get the school of the Intern', () => {
    const getSchoolObject = {
      type:"input",
      message: `What is the Intern's school? \n`,
      name: "school",
    };
    const testGetSchoolObject = new Intern().getSchool();
    expect(getSchoolObject).toEqual(testGetSchoolObject);
  });
});

describe("getRole", () => {
  it('Get the role of the Intern', () => {
    const getRoleString = "Intern";
    const testGetRoleString = new Intern().getRole();
    expect(getRoleString).toEqual(testGetRoleString);
    });
});