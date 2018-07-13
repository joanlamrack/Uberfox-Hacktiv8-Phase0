//generator

let newGame = new TicTacToeGameSession("X", "O", 3, " ");
let board = document.getElementById("board");
document.getElementById("status").innerText = newGame.getGameStatus();;

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		let divEl = document.createElement("div");
		let value = i+","+j;
		divEl.setAttribute("class", "board_section");
		divEl.setAttribute("id", value);
		divEl.innerText = " ";
		divEl.addEventListener("click", function(){
			let turn  = newGame.currentTurn;
			if(newGame.TakeTurn(i,j)){
				document.getElementById(value).innerText = turn;
				document.getElementById("status").innerText = newGame.getGameStatus();
				console.log(newGame.getGameStatus());
			}
		});
		console.log(divEl);
		board.appendChild(divEl);
	}
}