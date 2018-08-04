const Controller = require("./studentcontroller");


let [command, ...commandArgs] = process.argv.slice(2);

switch(command){
case "createStudent" : Controller.create(...commandArgs); break;
case "deleteStudent" : Controller.deleteById(commandArgs);break;
case "getAllFemaleStudent" : Controller.getAllFemaleStudent();break;
case "getStudentById" : Controller.getStudentbyId(commandArgs);break;
case undefined : Controller.help();break;
}