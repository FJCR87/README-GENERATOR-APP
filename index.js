
const util = require('node:util');
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type : "input",
      name : "Title",
      message: "What is the Title of your project?.",  
    },
    {
        type : "input",
        name : "Description",
        message : "Describe the purpose and funcionality of your project.",
    },
    {
        type : "input",
        name : "Demo",
        message : "Provide the screenshot and/or short video how to run the application",
    },
    {
        type: "input",
        name: "Languages and Methodology",
        message: "Provide list of language and methodology used in your project",
      },
      {
        type: "input",
        name: "features",
        message: "Provide a description the main features of your project",
      },
    {
        type : "input",
        name : "Usage",
        message : "Provide instructions and examples of your project",
    },
    {
        type : "checkbox",
        name : "License",
        message : "Choose one the following licences for your project",
        choices : ["MIT","Apache 2.0","Boost1.0","MPL2.0","BSD2","BSD3","none"],
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
    {
        type : "input",
        name : "Contributing",
        message : "Provide guideline on how other developers can contribute to your project",
    },
    {
        type : "input",
        name : "Tests",
        message : "Provide walkthrough of required test of your applications and examples how run them",
    },
];

//function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, (err) => {
        err
        ? console.log(err)
        : console.log("You did good job");
     });
 }
        

// initializing app

const init = () => {
     inquirer.prompt(questions).then((responses) => {
        console.log("Your Readme.md has been generated");
         writeToFile("Readme.md", generateMarkdown(responses));
    });
};


init();