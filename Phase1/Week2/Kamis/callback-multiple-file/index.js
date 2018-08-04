const fs = require("fs");
const sleep = require("sleep");

function match_data(parent_file, children_file) {
	fs.readFile(parent_file, (err, data)=>{
		let parent_data = JSON.parse(data.toString());
		sleep.sleep(5);
		fs.readFile(children_file, (err2, data2) =>{
			let children_data = JSON.parse(data2.toString());
			sleep.sleep(5);

			for(let i = 0 ; i < parent_data.length; i++){
				parent_data[i].children = [];
				for(let child of children_data){
					if(parent_data[i].last_name === child.family)parent_data[i].children.push(child);
				}
			}

			console.log(parent_data);
		});

	});
}

match_data("./parents.json", "./children.json");
console.log("Notification : Data sedang diproses !");
