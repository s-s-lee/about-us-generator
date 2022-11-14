// import parent class
const Employee = require('./employee');

// create manager child class that extends employee class
class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager;