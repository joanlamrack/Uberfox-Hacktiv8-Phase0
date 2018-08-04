const DataController = require("./controller.js");

let [command, commandArgs] = process.argv.slice(2);

switch(command){
case "register": DataController.register(commandArgs); break;
case "addPatient": DataController.addPatient(commandArgs); break;
case "logout": DataController.logout(); break;
case "login":DataController.login(commandArgs); break;
case "help": DataController.help(); break;
}