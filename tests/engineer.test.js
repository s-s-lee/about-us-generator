// link to engineer JS files in lib
const Engineer = require('../lib/engineer');

test('GitHub username using constructor properties', () => {
    const testing = "username";
    const x = new Engineer("Tony Stark", 2, "example@gmail.com", testing);
    expect(x.github).toBe(testing);
});

test('getRole() should be engineer', () => {
    const testing = "Engineer";
    const x = new Engineer("Tony Stark", 2, "example@gmail.com", "username");
    expect(x.getRole()).toBe(testing);
});

test('getGitHub() username', () => {
    const testing = "username";
    const x = new Engineer("Tony Stark", 2, "example@gmail.com", testing);
    expect(x.getGitHub()).toBe(testing);
});