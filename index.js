const inquirer = require('inquirer');
const fs = require('fs');
const createTeam = require('./src/team-template');

// link with employee modules in lib subfolder
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// to select role within inquirer
let staffRoles = ['Manager', 'Engineer', 'Intern'];

const employeeInfo = [];

const employeeQs = async () => {
    const answer = await inquirer.prompt([
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
            choices: staffRoles
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
            nextEmployee();
        }
    });
};

employeeQs();
// function to ask user info about employee
// aboutEmployee();

// function to see if done creating team
function nextEmployee() {
    // await employeeQs()
    inquirer.prompt([
        {
            type: 'list',
            message: 'Do you need to add another employee?',
            name: 'nextemployee',
            choices: ['Add next employee', 'I\'m finished']
        }
    ]).then(function(response){
    if(response.answer === 'Add next employee') {
        employeeQs();
    } else {
        employeeInfo.push(...internInfo);
        fs.readFile('./dist/index.html', 'utf-8', function(err, data){
            if (err) {
                console.log(err);
              } data = data.replace('{{ content }}', employeeInfo.join(''));

        fs.writeFile('./src/index.html', function(err){
            if (err) {
                console.log(err);
            } 
            console.log("HTML updated");
          });
        });
       }
    })
}

function createManagerCard(name, email, id, role, officeNumber) {
    fs.readFile('./src/manager.html', 'utf-8', function(err, data){
        if (err) {
            console.log(err);
        }
        data = data.replace('{{ name }}', name).replace('{{ email }}', email).replace('{{ id }}', id).replace('{{ role }}', role).replace('{{ officeNumber }}', officeNumber);
        employeeInfo.push(data);
    });
}

function createEngineerCard(name, email, id, role, github) {
    fs.readFile('./src/manager.html', 'utf-8', function(err, data){
        if (err) {
            console.log(err);
        }
        data = data.replace('{{ name }}', name).replace('{{ email }}', email).replace('{{ id }}', id).replace('{{ role }}', role).replace('{{ github }}', github);
        employeeInfo.push(data);
    });
}

function createInternCard(name, email, id, role, school) {
    fs.readFile('./src/manager.html', 'utf-8', function(err, data){
        if (err) {
            console.log(err);
        }
        data = data.replace('{{ name }}', name).replace('{{ email }}', email).replace('{{ id }}', id).replace('{{ role }}', role).replace('{{ school }}', school);
        employeeInfo.push(data);
    });
}


// function addTeamMember() {
//     console.log('New staff info is', employeeInfo)
//     fs.writeFileSync('./dist/index.html', createTeam(employeeInfo), 'utf-8');
// }