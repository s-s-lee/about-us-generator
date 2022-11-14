const createTeam = (team) => {
    // creating a new HTML card for a manager
    const createManager = (manager) => {
        return `<div class="card employee-card border-info" style="width: 18rem;">
                <div class="card-body">
                  <h2 class="card-title">${manager.getName()}</h2>
                  <h5 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h5>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${manager.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
              </div>`;
    };
    // creating a new HTML card for an engineer
    const createEngineer = (engineer) => {
        return `<div class="card employee-card border-info" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h5 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`
    };
    // creating a new HTML card for an intern
    const createIntern = (intern) => {
        return `<div class="card employee-card border-info" style="width: 18rem;">
        <div class="card-body">
          <h2 class="card-title">${intern.getName()}</h2>
          <h5 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
      </div>`
    };
}

const arr = [];

// need to add code to tie responses to creating new cards

// creates basic html template of team
module.exports = (team) => {
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>The S.H.I.E.L.D. Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
      </head>

      <body>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 text-center">The S.H.I.E.L.D. Team</h1>
          </div>
        </div>
        <div class="container-fluid d-flex justify-content-center team-content">
          <div class="row">
            ${createTeam(team)}
          </div>
        </div>
      </body>
      </html>
    `;
};