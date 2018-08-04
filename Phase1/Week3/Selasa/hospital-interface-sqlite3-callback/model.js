const db = require("./db.js");

class DataDealer{
	constructor(){}

	//COLUMN TYPES

	static loadColumnInfo(tableName, loadColumnInfoCallback, withId = false){
		db.all(`PRAGMA table_info(${tableName})`,(err, rows)=>{
			loadColumnInfoCallback((withId? rows: rows.slice(1)));
		});
	}

	static loadColumnTypes(tableName, loadColumnTypesCallback, withId){
		DataDealer.loadColumnInfo(tableName,(columnInfo)=>{
			loadColumnTypesCallback(columnInfo.map(x=>x.type));
		}, withId);
	}

	static loadColumnTypeFromColumnName(tableName, columnName,loadColumnTypeFromColumnNameCallBack, withId){
		DataDealer.loadColumnInfo(tableName, (columnInfo)=>{
			loadColumnTypeFromColumnNameCallBack(columnInfo.filter(x => x.name === columnName)[0].type);
		}, withId);
	}

	static addQuoteOrNotMultipleColumns(columnInfoTypes, arrayOfArgs){
		//console.log("Addquote",arguments);
		for(let argIndex in arrayOfArgs){
			arrayOfArgs[argIndex] = DataDealer
				.addQuoteOrNotOneColumn(columnInfoTypes[argIndex], arrayOfArgs[argIndex]);
		}
		return arrayOfArgs;
	}

	static addQuoteOrNotOneColumn(columnInfo, arg){
		if(columnInfo.match(/CHAR/g) || columnInfo=== "TEXT"){
			return `"${arg}"`;
		}
		return arg;
	}


	//CRUD

	static insertIntoTable(tableName, newRowArgs, insertTableCB,withId){
		DataDealer.loadColumnInfo(tableName,(columnsInfo)=>{
			//console.log("columnInfo", columnsInfo);
			let converted = DataDealer.addQuoteOrNotMultipleColumns(columnsInfo.map(x=>x.type),newRowArgs);
			db.run(`INSERT INTO ${tableName} (${columnsInfo.map(x=>x.name)}) VALUES (${converted})`, (err)=>{
				if(err) throw err;
				insertTableCB("Insert Success");
			}, withId);
		},withId);
	}

	static updateIntoTable(tableName, columnNameToUpdate,
		newValue, dataIdColumnName, dataId, updateTableCB, withId){
		DataDealer.loadColumnTypeFromColumnName(tableName, columnNameToUpdate,(columnName)=>{
			newValue = DataDealer.addQuoteOrNotOneColumn(columnName, newValue);
			db.run(`UPDATE ${tableName} SET ${columnNameToUpdate} = ${newValue} WHERE ${dataIdColumnName} = ${dataId}`, (err)=>{
				if (err) throw err;
				else updateTableCB(`${columnNameToUpdate} Updated`);
			},withId);
		},withId);
	}

	//ADD EMPLOYEE AND PATIENT

	static addEmployee(params, addEmployeeCB){
		DataDealer.insertIntoTable("Employees", params, addEmployeeCB);
	}

	static addPatient([first_name, last_name, gender, age, ...diagnoses], addPatientCB){
		DataDealer.getCurrentLoginRole((currentRole)=>{
			///console.log(currentRole);
			if(currentRole.position ==="dokter"){
				DataDealer.insertIntoTable("Patients",[first_name, last_name, gender, age, diagnoses], addPatientCB);
				addPatientCB("Patient ditambah");
			}
			else{
				addPatientCB("Tidak mempunyai hak untuk menambah data pasien!");
			}
		});
	}

	//LOGIN

	static getCurrentLoginRole(LoginRoleCB){
		DataDealer.getLastLogin((row)=>{
			//console.log("getlastLoginResult",row);
			if(row && row.active){
				LoginRoleCB(row);
			}
			else{
				LoginRoleCB("User");
			}
		});
	}

	static getLastLogin(lastLoginCallback){
		db.get("SELECT * FROM LoginSessions JOIN Employees on Employees.employeeId = LoginSessions.employeeId ORDER BY loginSessionId DESC LIMIT 1", (err, row)=>{
			if(err) throw err;
			lastLoginCallback(row);
		});
	}

	static login(username, password, loginCallback){
		db.get(`SELECT * FROM Employees WHERE username = "${username}";`,(err, row)=>{
			if (err) throw err;
			DataDealer.getCurrentLoginRole((x)=>{
				if(x==="User"){
					if(row && row.password === password){
						DataDealer.insertIntoTable("LoginSessions", [row.employeeId, new Date(), 1], loginCallback);
						loginCallback(`${username} successfully login`);
					}
					else{
						loginCallback("username/password salah");
					}
				}
				else{
					loginCallback("Harus logout dahulu");
				}
			});
			
		});
		
	}

	static logout(logoutCallback){
		DataDealer.getCurrentLoginRole((currentRole)=>{
			if(currentRole.position!=="User" && currentRole.active){
				DataDealer.updateIntoTable("LoginSessions", "active", 0, "loginSessionId",currentRole.loginSessionId, (x)=>{
					//logoutCallback("Successfully logged out");
				}, true);
				logoutCallback("Successfully logged out");
				
			}
			else{
				logoutCallback("You already logged out");
			}
			
		});
	}
}

module.exports = DataDealer;