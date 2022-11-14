// link to employee file in lib
const Employee = require('../lib/employee');

test('create an employee', () => {
    const x = new Employee();
    expect(typeof(x)).toBe('object');
});

test('name using constructor properties', () => {
    const name = "Nick Fury";
    const x = new Employee(name);
    expect(x.name).toBe(name);
});

test('id using constructor properties', () => {
    const testing = 1;
    const x = new Employee("Nick Fury", testing);
    expect(x.id).toBeGreaterThanOrEqual(1);
});

test('email using constructor properties', () => {
    const testing = "example@gmail.com";
    const x = new Employee("Nick Fury", 1, testing);
    expect(x.email).toBe(testing);
});

test('getName() method', () => {
    const testing = "Nick Fury";
    const x = new Employee(testing);
    expect(x.getName()).toBe(testing);
});

test('getId() method', () => {
    const testing = 1;
    const x = new Employee("Nick Fury", testing);
    expect(x.getId()).toBe(testing);
});

test('getEmail() method', () => {
    const testing = "example@gmail.com";
    const x = new Employee("Nick Fury", 1, testing);
    expect(x.getEmail()).toBe(testing);
});

test('getRole() method', () => {
    const testing = "Employee";
    const x = new Employee("Nick Fury", 1, "example@gmail.com");
    expect(x.getRole()).toBe(testing);
});