const Controller = require("./controllers/main_controller.js");

let [mainCommand, secondCommand, ...commandArgs] = process.argv.slice(2);

Controller(mainCommand, secondCommand, commandArgs);



