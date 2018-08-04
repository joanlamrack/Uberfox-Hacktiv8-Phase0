"use strict";

function diceRoll(row) {
	//the value of dice is 1 to half of the track length
	return 1 + Math.floor(Math.random() * Math.floor(row/2));
}

function sleep (milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}

function printBoard (playerPosData, trackLength) {
	for(let playerName in playerPosData){
		console.log(printLine(playerName,playerPosData[playerName],trackLength));
	}
}

function printLine (playerName, pos,trackLength) {
	//print a player on track based on input position 
	let line = [];
	for(let j = 0 ; j < trackLength; j++){
		line.push(j===pos ? playerName : " ");
	}
	return "|"+line.join("|")+"|"+(pos>trackLength-1 ? playerName:"");
}

function advance (playerName, playerPosData, trackLength) {
	//edit player position based on advancement
	let advancement = diceRoll(trackLength);
	playerPosData[playerName] += advancement;
}

function finished(winnerPlayer) {
	//What to do after finished?
	console.log(`Player ${winnerPlayer} is the Winner`);
}

function winner (playerPosData, trackLength) {
	//check who is the winner
	for(let playerName in playerPosData){
		if(playerPosData[playerName] >= trackLength) return playerName;
	}
	return false;
}

function clearScreen () {
	// Un-comment this line if you have trouble with console.clear();
	// return process.stdout.write('\033c');
	console.clear();
}

function generatePLayer(howManyPlayer){
	//generate player position data
	let output = {};
	for(let i = 0 ; i < howManyPlayer; i++){
		output[String.fromCharCode(i+97)] = 0;
	}
	return output;
}

function startJsRacer(terminalInput){
	let howManyPlayer = terminalInput[2];
	let trackLength =  terminalInput[3];
	let playerPosData = generatePLayer(howManyPlayer);
	let winnerPlayer = "";
	let stopGame = false;

	while(!stopGame){
		for(let player = 0 ; player < howManyPlayer ; player++){
			advance(String.fromCharCode(player+97), playerPosData, trackLength);
			clearScreen();
			printBoard(playerPosData, trackLength);
			if(winner(playerPosData,trackLength) !== false){
				stopGame = true;
				winnerPlayer = winner(playerPosData, trackLength);
				break;
			}
			sleep(1000);
		}
	}
	
	finished(winnerPlayer);
}

startJsRacer(process.argv)


