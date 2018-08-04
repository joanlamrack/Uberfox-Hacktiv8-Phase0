//Exercise 15 Mengelompokkan Hewan version 3

function groupAnimals(animals) {
	var output = [];
	animals.sort();
	for (var i = 0; i < animals.length; i++) {
		if (output.length==0) {
			output.push(new Array(animals[i]))
		}
		else{
			var existGroup= false;
			for(var j=0; j<output.length; j++){
				if(animals[i][0] == output[j][0][0]){
					output[j].push(animals[i]);
					existGroup = true;
				}
			}
			if (existGroup == false){
				output.push(new Array(animals[i]));
			}
		}
	}
	return output;
	
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]