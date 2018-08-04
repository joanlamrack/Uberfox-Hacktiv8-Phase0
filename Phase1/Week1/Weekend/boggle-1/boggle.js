class BoggleBoard{
	constructor(){
	}

	generateRandomIntFromZeroTo(maxInt){
		return Math.floor(Math.random() * Math.floor(maxInt+1));
	}

	generateRandomString(){
		return String.fromCharCode( 65 + this.generateRandomIntFromZeroTo(25));
	}

	shake(num){
		let output = [];
		for(let row  = 0 ; row < num ; row++){
			output.push([]);
			for(let col = 0 ; col < num ; col++){
				output[row].push(this.generateRandomString());
			}
		}
		this.boardData = output;
		return output;
	}

	printBoard(boardData=this.boardData){
		let appendedBoard = "";
		appendedBoard+= " +"+"---+".repeat(boardData.length)+"\n";

		for(let i = 0 ; i < boardData.length ; i++){
			appendedBoard+="  | "+boardData[i].join(" | ")+" |\n";
			appendedBoard+="  +"+"---+".repeat(boardData.length)+"\n";
		}
		return appendedBoard;
	}

	isThisCoordinateAlreadyPassedBefore(coordinatesAlreadyPassed, row, column){
		for(let coordinate of coordinatesAlreadyPassed){
			let rowPassed = coordinate[0];
			let columnPased = coordinate[1];

			if(row === rowPassed && column === columnPased) return true;
		}
		return false;
	}

	solve(){
		const wordsFromGlossary = require('./data.js');
		let wordsFound =[];
		let boardData = this.boardData;
		for(let word of wordsFromGlossary){
			if(boggle.isThisWordFound(word,boardData)){
				wordsFound.push(word);
			}
		}

		console.log(`${wordsFound.length} word${(wordsFound>1 ? "s":"")} found:\n${wordsFound.join("\n")}`)
	}

	isThisWordFound(wordToSearch, boardData){
		for(let i = 0 ; i < boardData.length ; i++){
			for(let j = 0 ; j< boardData[i].length ; j++){
				if(boardData[i][j]=== wordToSearch[0]){
					let coordinatesAlreadyPassed = [[i,j]];
					if(this.searchAroundGivenCoordinate(i,j,wordToSearch.slice(1),boardData,coordinatesAlreadyPassed)=== true){
						return true;
					}
				}
			}
		}
		return false;
	}

	searchAroundGivenCoordinate(row, column, wordToSearch, boardData, coordinatesAlreadyPassed){
		const directions = {
			right 		: {row : 0, column : 1, directionRestiction : "left"},
			down_right 	: {row : 1, column : 1, directionRestiction : "upper_left"},
			down 		: {row : 1, column : 0, directionRestiction : "up"},
			down_left 	: {row : 1, column :-1, directionRestiction : "upper_right"},
			left 		: {row : 0, column :-1, directionRestiction : "right"},
			upper_left	: {row :-1, column :-1, directionRestiction : "down_right"},
			up 			: {row :-1, column : 0, directionRestiction : "down"},
			upper_right	: {row :-1, column : 1, directionRestiction : "down_left"}
		};
		

		for(let direction in directions){
			let rowTranslationAmount = directions[direction]["row"];
			let columnTranslationAmount = directions[direction]["column"];
			let directionRestiction = directions[direction]["directionRestiction"];

			let rowAfterTranslation = row + (rowTranslationAmount);
			let columnAfterTranslation = column + (columnTranslationAmount);

			if(!this.isThisCoordinateAlreadyPassedBefore(coordinatesAlreadyPassed, 
				rowAfterTranslation, 
				columnAfterTranslation)
			)
			{
				if(
					boardData[rowAfterTranslation] && 
					boardData[rowAfterTranslation][columnAfterTranslation] && 
					boardData[rowAfterTranslation][columnAfterTranslation] === wordToSearch[0]
				)
				{
	
					if(wordToSearch.length ===1){
						return true;
					}
					else{
						coordinatesAlreadyPassed.push([rowAfterTranslation,columnAfterTranslation]);
						return true && 
						this.searchAroundGivenCoordinate(rowAfterTranslation, 
							columnAfterTranslation, 
							wordToSearch.slice(1), 
							boardData, 
							coordinatesAlreadyPassed);
					}
				}
			}
			
		}
		return false;
	}

}

let boggle = new BoggleBoard();

//Generate 4x4 boogle board.

boggle.shake(4);
console.log("Board: \n", boggle.printBoard());

boggle.solve();

module.exports = BoggleBoard;
