const fs = require("fs");
const db = require("./db.js");

class DataDealer{
	constructor(){

	}

	static loadDataFromCSV(fileCSVDir){
		let [columnName, ...data] = fs.readFileSync(fileCSVDir, "utf8").split("\n").map(x=>x.split(","));
		return [columnName,data];
	}

	static loadColumnsInfo(tableName, withId=false, loadColumnInfoHandler){
		console.log(db)
		db.all(`PRAGMA table_info(${tableName});`, (err, rows)=>{
			let columnInfos = rows;
			if(!withId){
				columnInfos = columnInfos.slice(1);
			}
			loadColumnInfoHandler(columnInfos);
		});
	}

	static loadColumnsTypes(tableName, withId, loadColumnTypeHandler){
		DataDealer.loadColumnsInfo(tableName, withId, (columnInfos)=>{
			loadColumnTypeHandler(columnInfos.map(x=>x.type));
		});
	}

	static loadColumnsNames(tableName, withId, loadColumnNameHandler){
		DataDealer.loadColumnsInfo(tableName, withId,(columnInfos)=>{
			loadColumnNameHandler(columnInfos.map(x=>x.name));
		});
	}

	static AddQuotesOrNot(columnDataType, dataArgs){
		for(let dataKey in dataArgs){
			if(columnDataType[dataKey].match(/CHAR/g) || columnDataType[dataKey] === "TEXT"){
				dataArgs[dataKey] = `"${dataArgs[dataKey]}"`;
			}
		}
		return dataArgs;
	}

	static insertIntoTable(tableName, newRowArgs, insertCallBack,withId){
		this.loadColumnsInfo(tableName, withId, (columnInfo)=>{
			let convertedForQuery = DataDealer.AddQuotesOrNot(columnInfo.map(x=>x.type), newRowArgs);
			let query = `INSERT INTO ${tableName}(${columnInfo.map(x=>x.name)}) VALUES (${convertedForQuery.join(",")})`;
			DataDealer.runQuery(query,function(err, lastId, query){
				console.log("-------")
				insertCallBack(err, lastId);
			});
		});
	}

	static insertIntoTableFromCSV(tableName, fileCSVDir, withId){
		let dataArrFromCSV = this.loadDataFromCSV(fileCSVDir);
		
		this.loadColumnsInfo(tableName, withId,(columnInfo)=>{
			let convertedForQuery = [];

			for(let data of dataArrFromCSV[1]){
				convertedForQuery.push(`(${DataDealer.AddQuotesOrNot(columnInfo.map(x=>x.type), data)})`);
			}

			let query = `INSERT INTO ${tableName}(${columnInfo.map(x=>x.name)}) VALUES ${convertedForQuery.join(",")}`;
			//DataDealer.runQuery(query, console.log);

			DataDealer.runQuery(query, console.log);
		});
	}

	static updateIntoTable(tableName, targetColumn, newData, columnIdName, idDataToUpdate){
		DataDealer.loadColumnsInfo(tableName, false, (columnsInfo)=>{
			for(let columnInfo of columnsInfo){
				if(columnInfo.name === targetColumn){
					let dataType = columnInfo.type;
					let convertedArgs = DataDealer.AddQuotesOrNot([dataType],[newData]);
					let query = `UPDATE ${tableName} SET ${targetColumn} = ${convertedArgs} WHERE ${columnIdName} = ${idDataToUpdate};`;
					DataDealer.runQuery(query, console.log);
				}
			}
		});
		
		
	}

	static deleteFromTable(tableName, idData, columnIdName){
		let query = `DELETE FROM ${tableName} WHERE ${columnIdName} = ${idData}`;
		DataDealer.runQuery(query, console.log);
		
	}

	static runQuery(query, errCallback){
		
		db.run(query,function(err){
			if (!err) {
				errCallback(this.lastID);
			} else {
				errCallback(err);
			}
			// console.log("insert Object",this);
			// errCallback(err, this.lastId, query);
		});
	}

}

module.exports= DataDealer;