// function to generate markdown for README
function generateMarkdown(data, url) {
  return `# ${data.title}
  ${url}
  ## Description 
  ${data.description}
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## Installation
  Run this to install <br>
  ${data.install}
  
  ## Usage
  ${data.usage}

  ## Credits
  Contributors: ${data.credit}
  
  ## License
  This program is licensed under ${data.license}
  
  ## Contributing
  After forking this repository, contributions in the form of issues and pull requests are welcomed and encouraged.

  ## Tests
  To test this application, run the following command <br>
  ${data.test}

  ## Questions
  If there are any questions about this application, <br>
  please contact me through email at ${data.email}  <br>
  Github : https://github.com/${data.github}
  
`;
}

module.exports = generateMarkdown;
