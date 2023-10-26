function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license === "None") {
    return "";
  }
}

function generateMarkdown(answers) {
  return `# ${answers.title}
  
  ##Description
  - ${answers.description}
  - ${answers.about}
  
  ##Table on Contents
  
  -[Installation](#installation)
  -[Collaborators](#collaborators)
  -[Code](#code)
  -[License](#license)
  -[Tests](#tests)
  -[Questions](#questions)
  
  ## Installation
    -${answers.intallation}
   
  ## Collaborators
    -${answers.collaborators}
  
  ## Code
    -${answers.code}
  
  ## License
    -${renderLicenseBadge(answers.license)}
    
  ## Tests
    -${answers.test}
    
  ## Questions
    If you have any questions about this project. Please reach me at ${answers.userEmail}. You can also find my work for this project and others at my GitHub profile [${answers.userName}](https://github.com/${answers.userName}) repo(${answers.repo})
  
  `;

}

module.exports = generateMarkdown;