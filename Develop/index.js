// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe what the project is or does.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install it.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter any useful information regarding how to use it. (usage section)',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How does someone contribute to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How does someone test this project?',
      },
      {
        type: 'list',
        name: 'licenses',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None','In Progress', 'Not Sure'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('README successful')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('REDME.md', generateMarkdown(answers))
    })
}

function generateMarkdown(text) {
    return `

        # ${answers.title}

        ## Table of Contents

            - [Description](#description)
            - [Installation Instructions](#installation-instructions)
            - [Usage](#usage)
            - [Contributing](#contributing)
            - [Testing](#testing)
            - [Licenses](#licenses)
            - [Questions](#questions)

        ## Description

        ${answers.description}

        ## Installation Instructions

        ${answers.installation}

        ## Usage

        ${answers.usage}

        ## Contributing

        ${answers.contributing}

        ## Testing

        ${answers.tests}

        ## Licenses

        ${answers.licenses}

        ## Questions

        ${answers.name}

        ${answers.email}

        `
}

// Function call to initialize app
init();
