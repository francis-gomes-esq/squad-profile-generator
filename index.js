const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const render = require('./src/page-template.js')

// Array to store team members
const team = []

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

			// This block adds a manager to the team array and then adds more team members.
		])
		.then(answer => {
			const manager = new Manager(
				answer.name,
				answer.id,
				answer.email,
				answer.officeNumber
			)
			team.push(manager)
			addTeamMember()
		})
}

const addTeamMember = () => {
	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'check',
				message: 'Add a team member:',
			},
		])
		.then(response => {
			if (response.check) {
				inquirer
					.prompt([
						{
							type: 'list',
							name: 'addMember',
							choices: ['Engineer', 'Intern', 'Complete'],
						},
					])
					.then(answer => {
						if (answer.addMember === 'Engineer') {
							engineerInfo()
						} else if (answer.addMember === 'Intern') {
							internInfo()
						} else {
							createHTML()
						}
					})
			} else {
				createHTML
			}
		})
}

// Function to gather information about an engineer
const engineerInfo = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: "Enter the Engineer's name:",
			},

			{
				type: 'input',
				name: id,
				message: "Enter the Engineer's ID",
			},

			{
				type: 'input',
				name: 'email',
				message: "Enter the Engineer's email",
			},

			{
				type: 'input',
				name: 'github',
				message: "Enter the Engineer's github",
			},
		])
		.then(answer => {
			const engineer = new Engineer(
				answer.name,
				answer.id,
				answer.email,
				answer.github
			)
			team.push(engineer)
			addTeamMember()
		})
}
// Function to gather information about an intern
const internInfo = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: "Enter the Intern's name:",
			},

			{
				type: 'input',
				name: 'id',
				message: "Enter the Intern's ID:",
			},

			{
				type: 'input',
				name: 'email',
				message: "Enter the Intern's email",
			},

			{
				type: 'input',
				name: 'github',
				message: "Enter the Intern's github",
			},
		])
		.then(answer => {
			const intern = new Intern(
				answer.name,
				answer.id,
				answer.email,
				answer.github
			)
			team.push(intern)
			addTeamMember()
		})
}

managerInfo()
// Function to create HTML file
const createHTML = () => {
	const htmlContent = render(team)

	// Check if output directory exists, if not, create it
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR)
	}

	// Write HTML content to file
	fs.writeFile(outputPath, htmlContent, err => {
		if (err) {
			console.error(err)
		}
		return
	})

	console.log('Your HTML is created')
}
