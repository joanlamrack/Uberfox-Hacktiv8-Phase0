"use strict";

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

	solveSudoku(boardData){
		if(this.checkIsBoardFull(boardData) === true){
			return true;
		}
	
		let blankSudokuSpace = this.checkIsBoardFull(boardData);
		let row = blankSudokuSpace[0];
		let col = blankSudokuSpace[1];
	
		for(let num = 1 ; num <=9 ; num++){
			if(this.checkIfNumPlacementIsValid(boardData,row,col,num)){
				boardData[row][col] = num;
	
				if(this.solveSudoku(boardData)){
					return true;
				}
	
				boardData[row][col] = " ";
			}
		}
		return false;
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
		let boardSolved = this.solveSudoku(this.boardInitial.slice());
		return this.printBoard(boardSolved);
	}
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs');
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[13];

var game = new Sudoku(board_string);

// Remember: this will just fill out what it can and not "guess"
game.solve();

console.log(game.board());
