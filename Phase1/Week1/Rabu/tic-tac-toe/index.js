function tictactoe(){
	let board = [[],[],[]];
	let xSum = 0;
	let oSum = 0;
	
	for(let i = 0 ; i < board.length ; i++){
		for(let j = 0 ; j < board.length ; j++){
			let player = Math.round(Math.random());
			if(player && (xSum <= 4 || xSum <= 5)){
				board[i][j] = "X";
				xSum++;
			}
			else{
				if(oSum <= (4||5)){
					board[i][j] = "O";
					oSum++;
				}
				
				
			}

		}
	}
	return board;
}

console.log(tictactoe());