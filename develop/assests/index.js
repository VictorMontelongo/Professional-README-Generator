// Installed inquirer and fs also going to import the 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generate/markdowngenerated');
// Generating quetions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    message: "Please enter a brief description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please tell us about the practical use of the project:",
    name: "about",
  },
  {
    type: "input",
    message: "How do you install the proiject?",
    name: "intallation",
  },
  {
    type: "input",
    message: "Who worked on the project?",
    name: "collaborators",
  },
  {
    type: "checkbox",
    name: "code",
    message: "Please list the code used in the Project",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.Js",
    ],
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you used for this project.",
    choices: [
      "Apache",
      "Boost",
      "MIT",
      "Mozilla",
      "None",
    ],
  },
  {
    type: "input",
    name: "test",
    message: "How do you test the App?",
  },

  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your email?",
  },
  {
    // this one should not work since we are not doing a true upload
    type: "input",
    name: "URL",
    message: "What is the URL of the live site?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the URL of the github repo?",
  },
];
inquirer.prompt(questions).then(answers => {
  console.log(answers)
  fs.writeFile("README.md", generateMarkdown(answers), (error) => {
    error ? console.log("Please fill all the information") : console.log("README generated")
  })
})