//user uses controller, controller manipulate model

const imports = require("./task-model.js");
const TaskView = require("./task-view.js");
const fs = require("fs");
const Task = imports.Task;

class TaskController {
	constructor(taskListJSONFileDir) {
		this._listOfTaskArr = [];
		this._dir = taskListJSONFileDir;
		this.parseJSONFromFile(taskListJSONFileDir);
	}


	sortTasksByCreatedDateView(sortKind) {
		TaskView.printTaskByIds(this._listOfTaskArr ,this.sortTasksBy("_created_date", sortKind));
	}

	sortTasksByCompletedDateView(sortKind) {
		TaskView.printTaskByIds(this._listOfTaskArr, this.sortTasksBy("_completed_date", sortKind));
	}

	sortTasksBy(dateKind, sortKind = "asc"){
		let toBeSorted = this._listOfTaskArr.slice();
		if(dateKind === "_completed_date")toBeSorted=toBeSorted.filter(x => x.completedStatus === true);
		return toBeSorted.sort((a, b) => (sortKind === "desc" ?  b[dateKind] - a[dateKind] : a[dateKind] - b[dateKind]));
	}

	

	filterByTaskTag(taskTag) {
		let outputArr = this._listOfTaskArr
			.slice()
			.filter(x => x.isThisTagFound(taskTag))
			.sort((a, b) => b._created_date - a._created_date);
		TaskView.printTaskByIds(this._listOfTaskArr, outputArr);
	}

	findTaskById(taskId) {
		if (taskId.length === 1 &&this.inputIsValidTaskId(Number(taskId))){
			TaskView.printTask(taskId - 1, this._listOfTaskArr[taskId - 1]);
		}
	}


	setCompletedStatusbyTaskId(taskId, newStatus) {
		if (this.inputIsValidTaskId(taskId) && typeof newStatus == "boolean") {
			this._listOfTaskArr[taskId - 1].completedStatus = newStatus;
			this.save();
			this.viewAllTask();
		}
	}

	setTagByTaskId(taskId, taskTags) {
		if (this.inputIsValidTaskId(taskId)) {
			this._listOfTaskArr[taskId - 1].tags = taskTags;
			TaskView.printMessage(`Tagged task "${this._listOfTaskArr[taskId-1].taskDescription}" with tags:${taskTags}`);
			this.save();
		}
	}



	parseJSONFromFile(taskListJSONFileDir) {
		let dataJSON = JSON.parse(fs.readFileSync(taskListJSONFileDir));
		for (let taskData of dataJSON) {
			this.addTaskToList(taskData._taskDescription, taskData._completed, taskData._created_date, taskData._tags, true);
		}
	}

	addTaskToList(taskDescription, completedStatus, tags, date, fromJSON) {
		this._listOfTaskArr.push(new Task(taskDescription, completedStatus, tags, date));
		this.save();
		if (!fromJSON) TaskView.printMessage(`Added "${taskDescription}" to your TODO List`);
	}

	removeTaskFromListById(taskId) {
		if (taskId.length ===1 && this.inputIsValidTaskId(taskId)) {
			let taskDescription = this._listOfTaskArr[taskId - 1]._taskDescription;
			this._listOfTaskArr.splice(taskId - 1, 1);
			this._listOfTaskArr.filter(x => x !== undefined);
			this.save();
			TaskView.printMessage(`Deleted "${taskDescription}" from your TODO list`);
		}

	}



	inputIsValidTaskId(taskId) {
		if (taskId > 0 && taskId <= this.taskListCount) {
			return true;
		}
		return false;
	}

	get taskListCount() {
		return this._listOfTaskArr.length;
	}

	get taskList() {
		return this._listOfTaskArr;
	}

	viewAllTask() {
		TaskView.printListOfTask(this.taskList);
	}

	save() {
		fs.writeFileSync(this._dir, JSON.stringify(this.taskList, null, 2));
	}

	help(args) {
		if (args) {
			TaskView.printAllCommand();
		} else {
			TaskView.printHelp();
		}
	}
}


module.exports = new TaskController("./data.json");