// link to JS files in lib
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

test('officenumber using constructor properties', () => {
    const testing = 112;
    const x = new Manager("Nick Fury", 1, "example@gmail.com", testing);
    expect(x.officeNumber).toBe(testing);
});

test('getRole() for manager', () => {
    const testing = "Manager";
    const x = new Manager("Nick Fury", 1, "example@gmail.com", 112);
    expect(x.getRole()).toBe(testing);
});

test('office number using getOffice()', () => {
    const testing = 112;
    const x = new Manager("Nick Fury", 1, "example@gmail.com", testing);
    expect(x.getOfficeNumber()).toBe(testing);
});