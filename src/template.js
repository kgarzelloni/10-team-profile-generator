const Employee = require("../lib/employee");

const generateTeam = function (team) {
  //create empty array to store HTML chunks in
  const htmlArray = [];

    //generate HTML for manager
  const generateManager = function (manager) {
    return ` <div class="card" style="width: 18rem;">
    <div class="card-header">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${manager.getName()} </li>
      <li class="list-group-item">ID: ${manager.getId()} </li>
      <li class="list-group-item">Email: ${manager.getEmail()} </li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
    </ul>
  </div>`;
  };
  
  //push html chunks into array after calling thier corresponding funtion
  htmlArray.push(team.map((manager) => generateManager(manager)));
  console.log(htmlArray);

    // //generate HTML for engineer
    const generateEngineer = function (engineer) {
        return ` <div class="card" style="width: 18rem;">
        <div class="card-header">
          Engineer
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${engineer.getName()} </li>
          <li class="list-group-item">ID: ${engineer.getId()} </li>
          <li class="list-group-item"> Email: ${engineer.getEmail()} </li>
          <li class="list-group-item"> GitHub: ${engineer.getGithub()} </li>
        </ul>
      </div>`;
      };
      
      //push html chunks into array after calling thier corresponding funtion
      htmlArray.push(team.map((engineer) => generateEngineer(engineer)));
      console.log(htmlArray);

    //     //generate HTML for intern
    const generateIntern = function (intern) {
        return ` <div class="card" style="width: 18rem;">
        <div class="card-header">
          Intern
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Name: ${intern.getName()} </li>
          <li class="list-group-item">ID: ${intern.getId()} </li>
          <li class="list-group-item"> Email: ${intern.getEmail()} </li>
          <li class="list-group-item"> School: ${intern.getSchool()} </li>
        </ul>
      </div>`;
      };
      
      //push html chunks into array after calling thier corresponding funtion
      htmlArray.push(team.map((intern) => generateIntern(intern)));
      console.log(htmlArray);
  // return all html chunks joined together as a string instead of sep inside of an array
  return htmlArray.join("");
};
// export function with base html and plug in generateTeam which contains the string of the html chunks joined together
module.exports = function (team) {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>Team Profile Generator</title>
    </head>
    
    <body>
      <header>
        <h1>Team Profile
        </h1>
      </header>
    
      <section class="card-container">
      ${generateTeam(team)}
    
      </section>
     
    </body>
    
    </html>`;
};
