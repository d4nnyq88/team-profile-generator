module.exports = team => {
const generateTeam = team => {
    const generateManager = (manager)=> {
        return `
        <ul class="list-group">
                <h2 class="card-title">${manager.getName()} Manager</h2>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</a></li>
        </ul>
        `;
    };
    const generateEngineer = (engineer) => {
        return `        
        <ul class="list-group">
                <h2 class="card-title">${engineer.getName()} Engineer</h2>        
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
        </ul>
        `;
    };
    const generateIntern = (intern) => {
        return `
        <ul class="list-group">
                <h2 class="card-title">${intern.getName()} Intern</h2>
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        `;
    };
    
    const htmlArr = [];
    console.log(htmlArr);

    // const htmlArr = [generateManager(team[0]), generateEngineer(team[1]), generateEngineer(team[2])]
    htmlArr.push(
        team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
        .join("")
    );

    htmlArr.push(
        team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );

    htmlArr.push(
        team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
    console.log(htmlArr);
    return htmlArr.join("");
}

    return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>My Team</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(team)}
        </div>
    </div>
</div>
</body>
</html>
`;
};