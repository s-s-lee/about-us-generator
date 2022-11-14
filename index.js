const inquirer = require('inquirer');
const fs = require('fs');
const createTeam = require('./src/team-template');

// link with employee modules in lib subfolder
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// to select role within inquirer
let allRoles = ['Manager', 'Engineer', 'Intern'];

const employeeInfo = [];

const aboutEmployee = async () => {
    inquirer.prompt([
        {
            message: 'What is the employee\'s name?',
            name: 'name'
        },
        {
            message: 'What is the employee\'s id?',
            name: 'id'
        },
        {
            message: 'What is the employee\'s email?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'What is the employee\'s role?',
            name: 'role',
            choices: allRoles
        }
    ]).then((answer) => {
        if(answer.role === 'Manager') {
            const addManager = new Manager(answer.name, answer.id, answer.email);
            inquirer.prompt([
                {
                    message: 'What is the manager\'s office number?',
                    name: 'officeNumber'
                }
            ]).then((managerInfo) => {
                addManager.officeNumber = managerInfo.officeNumber;
                createManagerCard(addManager.getName(), addManager.getId(), addManager.getEmail(), addManager.getRole(), addManager.getOfficeNumber());
            })
            employeeInfo.push(addManager);
        } else if(answer.role === 'Engineer') {
            const addEngineer = new Engineer(answer.name, answer.id, answer.email);
            inquirer.prompt([
                {
                    message: 'What is the engineer\'s GitHub username?',
                    name: 'github'
                }
            ]).then((engineerInfo) => {
                addEngineer.github = engineerInfo.github;
                createEngineerCard(addEngineer.getName(), addEngineer.getId(), addEngineer.getEmail(), addEngineer.getRole(), addEngineer.getGitHub());
            })
            employeeInfo.push(addEngineer);
        } else {
            const addIntern = new Intern(answer.name, answer.id, answer.email);
            inquirer.prompt([
                {
                    message: 'What is the intern\'s school?',
                    name: 'school'
                }
            ]).then((internInfo) => {
                addIntern.school = internInfo.school;
                createInternCard(addIntern.getName(), addIntern.getId(), addIntern.getEmail(), addIntern.getRole(), addIntern.getSchool());
            })
            employeeInfo.push(addIntern);
        }
    });
}

// function to ask user info about employee
aboutEmployee();

// function to see if done creating team
async function nextEmployee() {
    await aboutEmployee()
    const addNextEmployee = await inquirer.prompt([
        {
            type: 'list',
            message: 'Do you need to add another employee?',
            name: 'nextemployee',
            choices: ['Add next employee', 'I\'m finished']
        }
    ])
    if(addNextEmployee.nextemployee === 'Add next employee') {
        return aboutEmployee()
    }
    return addTeamMember();
}

nextEmployee();

function addTeamMember() {
    console.log('new staff', employeeInfo)
    fs.writeFileSync('./dist/index.html', createTeam(aboutEmployee), 'utf-8');
}