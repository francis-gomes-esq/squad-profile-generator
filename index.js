const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/page-template.js');

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const team = [];

const managerInfo = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "Enter the Manager's name: ",
		},
		{
			type: 'input',
			name: 'id',
			message: "Enter the Manager's ID:",
		},
		{
			type: 'input',
			name: 'email',
			message: "Enter the Manager's email address:",
		},
		{
			type: 'input',
			name: 'officeNumber',
			message: "Enter the Manager's office number:",
		},
	]);
};
