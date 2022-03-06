// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the project?"
            },

            {
                type: 'input',
                name: 'description',
                message: 'Please write a description of your project',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'How do you install this project?',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'usage',
                message: 'How do you use this app?',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }
                }
            },

            {
                type: 'list',
                name: 'license',
                message: 'What license does your application have?',
                choices: ['MIT', 'GNU', 'ISC', 'APACHE'],
                default: ["MIT"],

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please select a choice');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'contribute',
                message: 'Enter guidelines for contributing to this application:',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be used to run tests?',

                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Enter your response again');
                        return false;
                    }
                }
            },
        ])
};





// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been created.")
        }
    })
}; 


// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then( data => {
        return writeFile(data);    })

};

// Function call to initialize app
init();

// ------
// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// ------------
// https://www.npmjs.com/package/inquirer#documentation







// // problem is here



