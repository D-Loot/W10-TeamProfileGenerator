const Engineer = require("../lib/Engineer.js");

describe("getName", () => {
  it('Get the name of the Engineer', () => {
    const getNameObject = {
      type:"input",
      message: `What is the Engineer's name? \n`,
      name: "name",
  };
  const testGetNameObject = new Engineer().getName();
    expect(getNameObject).toEqual(testGetNameObject);
    });
});

describe("getID", () => {
  it('Get the ID of the Engineer', () => {
    const getIdObject = {
      type:"input",
      message: `What is the Engineer's Id? \n`,
      name: "id",
  };
  const testGetIdObject = new Engineer().getId();
    expect(getIdObject).toEqual(testGetIdObject);
    });
});

describe("getEmail", () => {
  it('Get the email of the Engineer', () => {
    const getEmailObject = {
      type:"input",
      message: `What is the Engineer's email? \n`,
      name: "email",
    };
    const testGetEmailObject = new Engineer().getEmail();
    expect(getEmailObject).toEqual(testGetEmailObject);
  });
});

describe("getGithub", () => {
  it('Get the github username of the Engineer', () => {
    const getGithubObject = {
      type:"input",
      message: `What is the Engineer's github username? \n`,
      name: "github",
    };
    const testGetGithubObject = new Engineer().getGithub();
    expect(getGithubObject).toEqual(testGetGithubObject);
  });
});

describe("getRole", () => {
  it('Get the role of the Engineer', () => {
    const getRoleString = "Engineer";
    const testGetRoleString = new Engineer().getRole();
    expect(getRoleString).toEqual(testGetRoleString);
    });
});