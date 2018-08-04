const TaskController = require("./task-controller.js");

let argumentsFromConsole = process.argv.slice(2);
let command = argumentsFromConsole[0];
let commandArguments = argumentsFromConsole.slice(1);

switch (command) {
case "help" || undefined:
	TaskController.help(command);
	break;
case "list":
	TaskController.viewAllTask();
	break;
case "add":
	TaskController.addTaskToList(commandArguments.join(" "));
	break;
case "findById":
	TaskController.findTaskById(Number(commandArguments[0]));
	break;
case "delete":
	TaskController.removeTaskFromListById(commandArguments[0]);
	break;
case "complete":
	TaskController.setCompletedStatusbyTaskId(commandArguments[0], true);
	break;
case "uncomplete":
	TaskController.setCompletedStatusbyTaskId(commandArguments[0], false);
	break;
case "tag": {
	let [taskId, ...taskTags] = commandArguments;
	TaskController.setTagByTaskId(taskId, taskTags);
	break;
}
case "list:created":
	TaskController.sortTasksByCreatedDateView(commandArguments[0]);
	break;
case "list:completed":
	TaskController.sortTasksByCompletedDateView(commandArguments[0]);
	break;
case "filter":
	TaskController.filterByTaskTag(commandArguments[0]);
	break;
}
