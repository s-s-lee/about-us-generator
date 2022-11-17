# About Us Generator
A Node.js command line app that shows all your team members, their roles, and contact info.

## Installation

To use this app, copy the repo, then use the following command in the terminal:

```bash
node index.js
```

## Site Preview

PENDING: Video of About Us Generator

![screenshot of about us generator](dist/assets/about-us-generator-screenshot.png)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Tech used
* Node.js
* Bootstrap
* Inquirer
* Jest

## Contact

For questions about the repo, contact [Susan](https://github.com/s-s-lee/).

## License

This repo uses the MIT license.