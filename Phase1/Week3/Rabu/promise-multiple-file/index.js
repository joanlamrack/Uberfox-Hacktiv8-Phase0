const fs = require("fs");
const sleep = require("sleep");

function match_data(parent_file, children_file) {
	readFilePromise(parent_file)
	.then((responseFromParent)=>{
		readFilePromise(children_file)
		.then((responseFromChildren)=>{
			for(let i = 0 ; i < responseFromParent.length; i++){
				responseFromParent[i].children = [];
 				for(let child of responseFromChildren){
 					if(responseFromParent[i+1].last_name === child.family)responseFromParent[i].children.push(child);
 				}
 			}
 			console.log(responseFromParent);
		})
		.catch((response)=>console.error(response));
	})
	.catch((response)=>console.error(response));
}

function readFilePromise(fileDirToRead){
	return new Promise((resolve, reject)=>{
		fs.readFile(fileDirToRead, (err,data)=>{
			if(err)reject("Terjadi error pada proses pembacaan");
			else if(!data)reject("Terjadi error pada proses pembacaan");
			else{
				sleep.sleep(5);
				resolve(JSON.parse(data.toString()));
			}
			
		})
	});
}

match_data("./parents.json", "./children.json");
console.log("Notification : Data sedang diproses !");
