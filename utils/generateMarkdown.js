// function to generate markdown for README
function generateMarkdown(data, url) {
  return `# ${data.title}
  ${url}
  ## Description 
  ${data.description}
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  Run this to install
  <pre><code>${data.install}</code></pre>
  
  ## Usage
  ${data.usage}

  ## Credits
  Contributors: ${data.credit}
  
  ## License
  This program is licensed under <code>${data.license}</code>
  
  ## Contributing
  After forking this repository, contributions in the form of issues and pull requests are welcomed and encouraged.

  ## Tests
  To test this application, run the following command
  <pre><code>${data.test}</code></pre>

  ## Questions
  If there are any questions about this application, <br>
  please contact me through email at ${data.email}  <br>
  Github : https://github.com/${data.github}
  
`;
}

module.exports = generateMarkdown;
