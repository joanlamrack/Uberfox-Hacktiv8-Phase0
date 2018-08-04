"use strict"

class Sudoku{
	constructor(board_string){
		this.boardInitial = this.generateSudokuBoard(board_string);
	}

	generateSudokuBoard(puzzleInput=""){
		puzzleInput = Array.from(puzzleInput).map(x => Number(x));
		let blank = " ";
		let board = [];
		if(puzzleInput ===""){
			for(let i = 0 ; i < 9; i++){
				board.push([]);
				for(let j = 0 ; j < 9 ; j++){
					board[i].push(blank);
				}
			}
		}
		else{
			for(let i = 0 ; i < 9; i++){
				board.push([]);
				for(let j = 0 ; j < 9 ; j++){
					let firstElement = puzzleInput.shift();
					if(firstElement){
						board[i].push(firstElement);
					}
					else{
						board[i].push(blank);
					}
					
				}
			}
		}
	
		return board;

	}

	numUsedInRow(boardData, row, num){
		for(let column = 0 ; column < boardData.length ; column++){
			if(boardData[row][column]=== num) return true;
		}
		return false;
	}

	numUsedInColumn(boardData, column, num){
		for(let row = 0 ; row < boardData.length ; row++){
			if(boardData[row][column] === num) return true;
		}
		return false;
	}

	numUsedInBox(boardData, startRow, startColumn, num){
		for(let row = 0 ; row < 3 ; row++){
			for(let col = 0 ; col < 3 ; col++){
				if(boardData[row+startRow][col+startColumn] === num){
					return true;
				}
			}
		}
	}

	checkIfNumPlacementIsValid(boardData, row, column, num){
		return !(this.numUsedInRow(boardData, row, num)) && !(this.numUsedInColumn(boardData, column, num)) && !(this.numUsedInBox(boardData, row-row%3, column-column%3, num));
	}

	checkIsBoardFull(boardData){
		for(let row = 0 ; row < boardData.length; row++){
			for(let col = 0 ; col < boardData.length; col++){
				if(boardData[row][col] === " "){
					return [row, col];
				}
			}
		}
		return true;
	}

	// for moving backward
	getPreviousColumnCoordinate(row, column, boardData){
		if(column === 0 && row === 0){
			return false;
		}
		else if(column === 0){
			return [row-1, boardData.length-1];
		}
		else if(row === 0){
			return [0, column];
		}
		else{
			return [row-1, column-1];
		}
	}

	solveSudoku(boardData){

		while(this.checkIsBoardFull(boardData) !== true){
			let emptySpaces = this.checkIsBoardFull(boardData);
			
			let row = emptySpaces[0];
			let column = emptySpaces[1];

			let previous = this.getPreviousColumnCoordinate(row,column, boardData);

			let previousRow = previous[0];
			let previousColumn = previous[1];

			for(let i = 1 ;i <=9; i++){
				if(this.checkIfNumPlacementIsValid(boardData, row, column,i)){
					boardData[emptySpaces[0]][emptySpaces[1]] = i;
					this.solveSudoku(boardData);
				}
				

				boardData[emptySpaces[0]][emptySpaces[1]] = " ";
				
			}
		}

	}

	printBoard(boardData){
		let appendedBoard = "";
		appendedBoard+= "  +"+"---+".repeat(boardData.length)+"\n";

		for(let i = 0 ; i < boardData.length ; i++){
			appendedBoard+="  | "+boardData[i].join(" | ")+" |\n";
			appendedBoard+="  +"+(i=== 2 || i === 5? "===+" :"---+").repeat(boardData.length)+"\n";
		}
		return appendedBoard;
	}

	board(){
		return this.printBoard(this.boardInitial);
	}

	solve(){
		this.solveSudoku(this.boardInitial);
		let boardSolved = this.boardInitial;
		return this.printBoard(boardSolved);
	}
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
//var fs = require('fs');
//var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
//  .toString()
//  .split("\n")[0];

var board_string = "53  7    6  195    98    6 8   6   34  8 3  17   2   6 6    28    419  5    8  79";

var game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
game.solve();

console.log(game.board());
