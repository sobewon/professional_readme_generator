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
];

// TODO: Create a function to write README file



// Function call to initialize app
init();
