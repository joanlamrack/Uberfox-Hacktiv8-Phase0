function isBoardFull(paramArray, defaultvalue) {
	for (let column of paramArray) {
		for (let row of column) {
			if (row === defaultvalue) {
				return false;
			}
		}
	}
	return true;
}

function whoIsWinningTicTacToe(paramArray, player) {
	let score = 0;
	let score2 = 0;

	for (let i = 0; i < paramArray.length; i++) {
		for (let j = 0; j < paramArray.length; j++) {
			if (paramArray[i][j] === player) {
				score++;
			}
			if (paramArray[j][i] === player) {
				score2++;
			}
		}
		if (score === paramArray.length || score2 === paramArray.length) {
			return true;
		}
		score = 0;
		score2 = 0;
	}

	for (let i = 0, j = paramArray.length - 1; i < paramArray.length; i++, j--) {
		if (paramArray[i][i] === player) {
			score++;
		}
		if (paramArray[i][j] === player) {
			score2++;
		}
	}
	return score === paramArray.length || score2 === paramArray.length;
}

function generateBoard(num, default_value = []) {
	let output = [];
	for (let i = 0; i < num; i++) {
		output.push([]);
		for (let j = 0; j < num; output[i].push(default_value), j++);
	}
	return output;
}

function TicTacToeGameSession(
	firstPlayer,
	SecondPlayer,
	boardSize,
	defaultvalue = []
) {
	this.currentTurn = firstPlayer;
	this.board = generateBoard(boardSize, defaultvalue);

	this.TakeTurn = function(x, y) {
		console.log("Taking turn for " + this.currentTurn);
		if (this.board[x][y] === defaultvalue) {
			this.board[x][y] = this.currentTurn;
			if (whoIsWinningTicTacToe(this.board, this.currentTurn)) {
				console.log(this.currentTurn + " wins");
			}
			if (isBoardFull(this.board, defaultvalue)) {
				console.log("no one wins");
			}
			this.NextTurn();
		} else {
			console.log("Wrong place");
		}
	};
	this.NextTurn = function() {
		this.currentTurn = this.currentTurn === firstPlayer
			? SecondPlayer
			: firstPlayer;
	};
	this.PrintBoard = function() {
		for (let row of this.board) {
			console.log(row);
		}
	};
}

let newGame = new TicTacToeGameSession("X", "O", 3, " ");
//newGame.PrintCurrentTurn();
newGame.TakeTurn(1, 0);
newGame.TakeTurn(1, 1);
newGame.TakeTurn(1, 2);
newGame.TakeTurn(2, 2);
newGame.TakeTurn(0, 2);
newGame.TakeTurn(0, 1);
newGame.TakeTurn(2, 1);
newGame.TakeTurn(2, 0);
newGame.TakeTurn(0, 0);
newGame.PrintBoard();
