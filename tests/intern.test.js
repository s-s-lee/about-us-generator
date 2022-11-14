// link to intern JS files in lib
const Intern = require('../lib/intern');

test('school using constructor properties', () => {
    const testing = "Drexel";
    const x = new Intern("Peter Parker", 3, "example@gmail.com", testing);
    expect(x.school).toBe(testing);
});

test('getRole() should say intern', () => {
    const testing = "Intern";
    const x = new Intern("Peter Parker", 3, "example@gmail.com", "Drexel");
    expect(x.getRole()).toBe(testing);
});

test('getSchool() should say Drexel', () => {
    const testing = "Drexel";
    const x = new Intern("Peter Parker", 3, "example@gmail.com", testing);
    expect(x.getSchool()).toBe(testing);
});