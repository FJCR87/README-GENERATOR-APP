// function that returns a license badge

function renderLicenseBadge(license){
  if (license =="none") {
    return "![Github license](https://img.shields.io/badge/license-${license-${license}-blue.svg)";
  }
  return "";
}

// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Desployed Application URL
${data.link}
## Demo
![alt-text](${data.demo})
## Table of Contents
*[Features](#features)
*[Languages and Methodology](#languagesandmethodology)
*[Demo](#Demo)
*[How to Use This Aplication](#HowtoUseThisApplication)
*[Contributing](#contributing)
*[Testing](#testing)
*[Questions](#questions)
## features
${data.features}
## languages & Methodology
${data.languagesandmethodology}
## How to Use This Aplication:
${data.usage}
## contributing
${data.contributing}
## testing
${data.tests}
## questions
For any questions, please contact me with the information below:

[here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}