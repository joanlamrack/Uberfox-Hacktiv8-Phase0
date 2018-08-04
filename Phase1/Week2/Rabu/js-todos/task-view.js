//user sees view, view is being updated by model.

class TaskView{
	constructor(){

	}

	static printListOfTask(listOfTask){
		for(let index = 0; index<listOfTask.length ; index++){
			this.printTask(index, listOfTask[index]);
		}
	}

	static printTask(indexArr, taskObj){
		this.printMessage(`${indexArr+1}. [${taskObj.completedStatus?"X":" "}]  ${taskObj.taskDescription} #tags : ${taskObj.tags}`);
		//console.log(`${index+1}. [${taskObj.completedStatus?"X":" "}]  ${taskObj.taskDescription} Date : ${taskObj.date} #tags : ${taskObj.tags} `);
	}

	static printTaskByIds(listOfTaskOriginal, modifedListOfTask){
		for(let taskObj of modifedListOfTask){
			let originalIndex = listOfTaskOriginal.indexOf(taskObj);
			this.printMessage(`${originalIndex+1}. [${taskObj.completedStatus?"X":" "}]  ${taskObj.taskDescription} #tags : ${taskObj.tags}`);
		}
	}

	static printMessage(strMSG){
		console.log(strMSG);
	}

	static printHelp(){
		this.printMessage("node todo.js help");
	}

	static printAllCommand(){
		const listOfCommands = ["list",
			"add <task description>",
			"findById <taskid>",
			"delete <taskid>",
			"complete <taskid>",
			"uncomplete <taskid>",
			"tag <taskid> <tags..1> <tags..2>",
			"list:[created|completed] [asc|desc]",
			"filter <taskTag>"];

		for(let command of listOfCommands){
			this.printMessage(`node todo.js ${command}`);
		}
	}

}

module.exports = TaskView;