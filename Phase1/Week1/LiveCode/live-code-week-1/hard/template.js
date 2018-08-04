function findUberOnMap(map){
	for(let row = 0 ; row < map.length ; row++){
		for(let col = 0 ; col < map[row].length ; col++){
			if(map[row][col] === "UBER") return [row,col];
		}
	}
}

function findFox(map) {
	let directions = [];

	let positionNow = findUberOnMap(map);
  
	let uberCurrentRow = positionNow[0];
	let uberCurrentCol = positionNow[1];

	let free = " ";
  let character = "UBER";
  let characterToSeek = "FOX"


	while(true){

		if(map[uberCurrentRow][uberCurrentCol+1] && map[uberCurrentRow][uberCurrentCol+1]===free){
			//kanan
			directions.push("kanan");
			map[uberCurrentRow][uberCurrentCol] = character;
			uberCurrentCol++;
		}
		else if(map[uberCurrentRow][uberCurrentCol-1]&&map[uberCurrentRow][uberCurrentCol-1]===free){

			directions.push("kiri");
			map[uberCurrentRow][uberCurrentCol] = character;
			uberCurrentCol--;
		}
		else if(map[uberCurrentRow+1]&& map[uberCurrentRow+1][uberCurrentCol]===free){
			directions.push("bawah");
			map[uberCurrentRow][uberCurrentCol] = character;
			uberCurrentRow++;
		} 
		else if( map[uberCurrentRow-1] && map[uberCurrentRow-1][uberCurrentCol]===free){

			directions.push("atas");
			map[uberCurrentRow][uberCurrentCol] = character;
			uberCurrentRow--;
		}
		else if( map[uberCurrentRow][uberCurrentCol+1] && map[uberCurrentRow][uberCurrentCol+1]===characterToSeek){
			directions.push("kanan");
			break;
		}
		else if( map[uberCurrentRow][uberCurrentCol-1]&&  map[uberCurrentRow][uberCurrentCol-1]===characterToSeek){
			directions.push("kiri");
			break;
		}
		else if( map[uberCurrentRow+1]&& map[uberCurrentRow+1][uberCurrentCol]===characterToSeek){
			directions.push("bawah");
			break;
		} 
		else if(map[uberCurrentRow-1] && map[uberCurrentRow-1][uberCurrentCol]===characterToSeek){

			directions.push("atas");
			break;
		}
	}  
	console.log(directions.join(", "));

}

//driver code

let mapOne = [
	['UBER', ' ', 'X', 'X', 'X'],
	['X', ' ', 'X', 'X', 'X'],
	[' ', ' ', 'X', ' ', 'FOX'],
	[' ', 'X', 'X', ' ', 'X'],
	[' ', ' ', ' ', ' ', 'X'],
];

findFox(mapOne);
// kanan, bawah, bawah, kiri, bawah, bawah, kanan, kanan, kanan, atas, atas, kanan

let mapTwo = [
	['X', 'X', 'X', 'X', 'X'],
	['X', 'X', 'X', 'X', 'X'],
	['X', 'UBER', 'X', ' ', 'X'],
	['X', ' ', 'X', 'FOX', 'X'],
	['X', ' ', ' ', ' ', 'X'],
]

findFox(mapTwo);
// bawah, bawah, kanan, kanan, atas
