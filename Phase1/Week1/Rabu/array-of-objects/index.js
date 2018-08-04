let arr = [];

function createObj(name, phase, gender){
	arr.push({"name": name, "phase": phase, "gender":gender});
}

createObj("Akbar", 1, "male");
createObj("Icha", 1, "female");

console.log(arr);

function getData(name){
	for(let person of arr){
		if (person.name === name) return person;
	}

	return "Not Found";
}

console.log(getData("Icha"));