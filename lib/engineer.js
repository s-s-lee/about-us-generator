// import parent class
const Employee = require('./employee');

// create intern child class that extends employee class
class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getRole(){
        return 'Engineer'
    }
    getGitHub(){
        return this.github
    }
}

module.exports = Engineer;