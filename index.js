const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/page-template.js');

// Array to store team members
const team = [];

// Function to gather information about the manager
const managerInfo = () => {
	inquirer
		.prompt([
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
		])
		// This block adds a manager to the team array and then adds more team members.
		.then(answer => {
			const manager = new manager(
				answer.name,
				answer.id,
				answer.email,
				answer.officeNumber
			);
			team.push(manager);
			addTeamMemeber();
		});
};
