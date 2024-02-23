// TODO: Write code to define and export the Employee class
class Employee {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}

	getId() {
		return this.getId;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return 'Employee';
	}
}

module.exports = Employee;
