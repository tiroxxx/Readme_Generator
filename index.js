const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        message: "What is the Title of this application?",
        name: "title"
    },

    {
        type: "input",
        message: "Give a description for this application",
        name: "description"
    },
    {
        type: "input",
        message: "How would you install this application?",
        name: "install"
    },
    {
        type: "input",
        message: "How do you use this application?",
        name: "usage"
    },
    {
        type: "list",
        message: ["GNU GPLv3", "MIT License", "Apache License 2.0"],
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed to this application?",
        name: "credit"
    },
    {
        type: "input",
        message: "What command do you use to run tests",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
])
.then(response => {

    const markdownFile = generateMarkdown(response);

   
   
   
    fs.writeFile("README.md", markdownFile, function(err){
        if(err) throw err;
    })
})