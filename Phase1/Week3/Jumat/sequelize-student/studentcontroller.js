const Model = require("./models");
const View = require("./studentview.js");

class StudentController{
	constructor(){

	}

	static create(first_name, last_name, gender, birthday, email, phone, height){
		Model.Student.create(
			{
				first_name: first_name,
				last_name: last_name,
				gender:gender,
				birthday: new Date(birthday),
				email: email,
				phone:phone,
				height:Number(height)
			}
		)
			.then((response)=>View.printMessage("Added!"))
			.catch(View.printErr);

	}

	static getAllFemaleStudent(){
		Model.Student.getFemaleStudent()
			.then((students)=>{
				students = students.map(x=>{
					return {
						id:x.id,
						name: x.getFullName(),
						age: x.getAge(),
						height: x.height,
						email: x.email,
						phone: x.phone,
						birthday: x.birthday
					};
				
				});
				View.printTable(students);
			})
			.catch(View.printMessage);
	}

	static getStudentbyId(id){
		Model.Student.getStudentById(id)
			.then((currentStudent)=>{
				let output = {
					id:currentStudent.id,
					name: currentStudent.getFullName(),
					age: currentStudent.getAge(),
					height: currentStudent.height,
					email: currentStudent.email,
					phone: currentStudent.phone,
					birthday: currentStudent.birthday
				};
				View.printTable(output);
				
			})
			.catch(View.printErr);
	}



	static deleteById(id){
		Model.Student.deleteById(id)
			.then((response)=>View.printMessage(`Deleted Student with ID: ${id}`))
			.catch(View.printErr);
	}

	static help(){
		View.help();
	}
}

module.exports = StudentController;
	
	


