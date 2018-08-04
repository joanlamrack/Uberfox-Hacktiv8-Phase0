//model is being manipulated by controller, model updates view

class Task{
	constructor(taskDescription, completed, date, tags, completed_date){
		this._taskDescription = taskDescription;
		this._completed = completed || false;
		this._tags = tags || [];
		if(date){
			this._created_date = new Date(date);
		}
		else{
			this._created_date = new Date();
		}
		this._completed_date = completed_date;
	}

	get date(){
		return this._created_date;
	}

	get tags(){
		return this._tags;
	}

	set tags(values){
		for(let value of values){
			if(this._tags.indexOf(value) === -1) this._tags.push(value);
		}
	}

	get taskDescription(){
		return this._taskDescription;
	}

	get completedStatus(){
		return this._completed;
	}

	set completedStatus(value){
		if(value){
			this._completed_date = new Date();
		}
		else{
			this._completed_date = undefined;
		}
		this._completed = value;
	}

	isThisTagFound(taskTag){
		return (this._tags.indexOf(taskTag)=== -1 ? false : true);
	}
}

module.exports = {
	Task : Task
};