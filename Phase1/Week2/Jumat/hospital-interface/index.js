const DataController = require ("./controller.js");


let [command, ...commandArgs] = process.argv.slice(2);

switch(command){
case ("help" || undefined) : DataController.help(); break;
case "register": DataController.register(commandArgs); break;
case "login" : DataController.login(...commandArgs); break;
case "addPatient" : DataController.addPatient(...commandArgs); break;
case "logout" : DataController.logout(); break;
case "user" : DataController.greetUser(); break;
}