/*
Hactiv8 Final Live Coding 4
Joker's Poker
Tersedia sebuah function bernama DealWithTheJoker yang menampung 2 parameter,
1. Merupakan hasil 5 kartu dari penjudi
2. Merupakan hasil 5 kartu dari joker
*masing-masing parameter adalah array
Function akan memproses kedua parameter dan pemain dengan score tertinggi
akan menang.
*/

function DealWithTheJoker(playerResultArr, jokerResultArr) {
	var game = [playerResultArr, jokerResultArr];
	var player_score = joker_score = 0;
	for(var key in game){
		for(var score_key in game[key]){

			if(game[key].indexOf(game[key][score_key])!== Number(score_key)){
				//console.log(game[key][score_key]);
				//console.log("Duplicate!")
				if(key === "0"){
					player_score++;
				}
				else{
					joker_score++;
				}
			}
		}
	}

	if(player_score>joker_score){
		return "WIN"
	}
	else if(player_score<joker_score){
		return "LOSE"
	}
	else{
		return "DRAW";
	}
}

console.log(DealWithTheJoker([2, 2, 3, 3, 5], [5, 5, 5, 5, 2])); // LOSE
console.log(DealWithTheJoker([3, 2, 3, 3, 2], [2, 3, 4, 5, 6])); // WIN
console.log(DealWithTheJoker([5, 2, 5, 5, 5], [2, 2, 2, 3, 7])); // WIN
console.log(DealWithTheJoker([3, 8, 3, 3, 8], [3, 4, 5, 6, 7])); // WIN
console.log(DealWithTheJoker([8, 8, 8, 8, 9], [2, 2, 2, 2, 6])); // DRAW
console.log(DealWithTheJoker([5, 5, 3, 4, 2], [8, 7, 2, 4, 7])); // DRAW
console.log(DealWithTheJoker([9, 3, 2, 2, 9], [5, 5, 5, 5, 2])); // LOSE