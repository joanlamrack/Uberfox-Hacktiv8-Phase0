function goToFitness(peopleArr){
	let startDate = 7
	let listperson = {};

	for(let person of peopleArr){
		listperson[person[0]] = {dateGotoGym: startDate, interval : person[1]}
	}

	

	for(let i = startDate ; i <= 31 ; i++){
		let output = "Tanggal "+i+":";
		let peopleGoing = [];
		for(let personName in listperson){
			if(listperson[personName].dateGotoGym === i){
				peopleGoing.push(" "+personName);
				listperson[personName].dateGotoGym += listperson[personName].interval;
			}
		}
		if(!(i%5)){
			output+=" Tempat Fitnes Tutup";
		}else{
			output+=peopleGoing.toString();
		}

		console.log(output);
	}
}

console.log(goToFitness([["Anton", 4], ["Tono", 2], ["Budi", 5], ["Eri", 2]]));