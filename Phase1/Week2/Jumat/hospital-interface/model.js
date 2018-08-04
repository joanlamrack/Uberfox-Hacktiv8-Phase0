const fs = require("fs");
const DataController = require("./controller.js");

class Patient {
	constructor(id, name, diagnosis) {
		this.id=id;
		this.name = name;
		this.diagnosis = diagnosis;
	}
}
  
class Employee {
	constructor(id, username, password, position) {
		this.id = id;
		this.name =  username;
		this.position = position || "staff";
		this.username = username;
		this.password = password;
	}
}

class LoginSession{
	constructor( username, position, date ){
		this.username = username;
		this.position = position;
		this.date = date || new Date();
	}
}

class DataDealer{
	constructor(){
	}
	
	static parseData(fileDir, EndFormClass, newObjParameters,parseHandler){
		fs.readFile(fileDir, (err, data)=>{
			data = JSON.parse(data.toString());
			data = data.map(ObjLiteral => {
				let transformedObj = new EndFormClass();
				Object.assign(transformedObj, ObjLiteral);
				return transformedObj;
			});
			
			parseHandler(data);
		});
	}

	static saveData(fileDir, arrOfObjToSave, messageToPrint){
		fs.writeFile(fileDir,JSON.stringify(arrOfObjToSave, null, 2), (err)=>{
			if(err) throw err;
			console.log(messageToPrint);
		});
		
	}

	static addNew(fileDir, EndFormClass, newObjParameters){
		this.parseData(fileDir,EndFormClass,newObjParameters,(data)=>{
			data.push(new EndFormClass(data.length,...newObjParameters));
			this.saveData(fileDir,data,"Saved Successfully");
		});
	}

	static addNewEmployee(newObjParameters){
		this.addNew("./employee.json", Employee, newObjParameters);
	}

	static addNewPatient([name, ...diagnosis], newPatientCallback){
		DataDealer.loginInfo(function([logininfo]){
			if(logininfo.position ==="dokter"){
				DataDealer.addNew("./patient.json", Patient, [name, diagnosis]);
			}
			else{
				newPatientCallback("tidak memiliki akses untuk menambah pasien!");
			}
		});
	}

	static loginInfo(loginActionCallback){
		this.parseData("./loginSession.json", LoginSession,null,(data)=>{
			loginActionCallback(data);
		});
	}

	static verifyLogin(username, password, statuscallback){
		this.parseData("./employee.json",Employee,null, (data)=>{
			let found = false;
			for(let employer of data){
				if(employer.username === username && employer.password === password){
					found = true;
					this.loginInfo(([logininfo])=>{
						if(logininfo){
							statuscallback(`${logininfo.username} still logged on. please logout first`);
						}
						else{
							this.saveData("./loginSession.json",[new LoginSession(employer.username, employer.position)], `${employer.username} successfully logged in.`);
						}
					});
					if(found)break;
				}
			}
			
			if(!found)statuscallback("username / password salah");
		});
	}

	static logout(){
		return this.saveData("./loginSession.json", [], "Logged out successfully");
	}

}
module.exports = DataDealer;