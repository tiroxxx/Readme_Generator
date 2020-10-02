// getting the required libraries to create this app
const inquirer = require("inquirer");
const fs = require("fs");
// hooking the generateMarkdown file to this one
const generateMarkdown = require("./utils/generateMarkdown");
// asking the necessary questions to create a readme
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
        choices: ["GNU GPLv3", "MIT License", "Apache License 2.0"],
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
        // choosing the correct license badge depending on the user's choice
        let badgeURL;
        if (response.license === "GNU GPLv3") {
            badgeURL = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        }
        if (response.license === "MIT License") {
            badgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
        if (response.license === "Apache License 2.0") {
            badgeURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        }
        // generating readme
        const markdownFile = generateMarkdown(response, badgeURL);
        // creating readme.md file with the generated readme
        fs.writeFile("README.md", markdownFile, function (err) {
            if (err) throw err;
        })
    })