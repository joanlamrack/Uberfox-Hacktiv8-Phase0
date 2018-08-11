function clearScreen() {
	// Un-comment this line if you have trouble with console.clear();
	// return process.stdout.write('\033c');
	console.clear();
}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}

function generateRandomIntFromZeroTo(maxInt) {
	return Math.floor(Math.random() * Math.floor(maxInt + 1));
}

function printBoard(boardData) {
	for (let i = 0; i < boardData.length; i++) {
		process.stdout.write((i === 0 ? "    " : "   ") + (i + 1));
	}
	console.log();
	console.log("  +" + "---+".repeat(boardData.length));
	for (let i = 0; i < boardData.length; i++) {
		console.log(
			String.fromCharCode(65 + i) + " | " + boardData[i].join(" | ") + " |"
		);
		console.log("  +" + "---+".repeat(boardData.length));
	}
}

function generateEmptyBoardData() {
	let output = [];
	for (let i = 0; i < 10; i++) {
		output.push([]);
		for (let j = 0; j < 10; j++) {
			output[i].push(" ");
		}
	}
	return output;
}

//Randomize Placement of Enemies

function placeInThatPosition(
	boardData,
	fleetMark,
	fleetLength,
	placementRow,
	placementColumn,
	placementOrientation
) {
	if (placementOrientation === 1) {
		//sideways
		for (let i = placementColumn; i < placementColumn + fleetLength; i++) {
			boardData[placementRow][i] = fleetMark;
		}
	} else {
		//downward
		for (let i = placementRow; i < placementRow + fleetLength; i++) {
			boardData[i][placementColumn] = fleetMark;
		}
	}
}

function checkPlacement(
	boardData,
	placementRow,
	placementColumn,
	placementOrientation,
	fleetLength
) {
	if (placementOrientation) {
		//sideways

		for (let i = placementColumn; i < placementColumn + fleetLength; i++) {
			if (boardData[placementRow][i] !== " ") return false;
		}
	} else {
		//downway

		for (let i = placementRow; i < placementRow + fleetLength; i++) {
			if (boardData[i][placementColumn] !== " ") return false;
		}
	}

	return true;
}

function rollRandomPlacement(boardData, fleetLength) {
	//generate sideways / downward (1  = sideway, 0  = downward)
	let placementOrientation = generateRandomIntFromZeroTo(1);
	let placementRow;
	let placementColumn;
	if (placementOrientation) {
		//if sideway
		placementRow = generateRandomIntFromZeroTo(boardData.length - 1);
		placementColumn = generateRandomIntFromZeroTo(
			boardData.length - fleetLength
		);
	} else {
		placementRow = generateRandomIntFromZeroTo(boardData.length - fleetLength);
		placementColumn = generateRandomIntFromZeroTo(boardData.length - 1);
	}

	return [placementOrientation, placementRow, placementColumn];
}

function generateEnemyOnBoard(boardData, fleetData) {
	for (let fleetUnit in fleetData) {
		let placementIsValid = false;
		while (!placementIsValid) {
			let randomPLacementResult = rollRandomPlacement(
				boardData,
				fleetData[fleetUnit].size
			);
			let checkPlacementResult = checkPlacement(
				boardData,
				randomPLacementResult[1],
				randomPLacementResult[2],
				randomPLacementResult[0],
				fleetData[fleetUnit].size
			);
			if (checkPlacementResult) {
				placeInThatPosition(
					boardData,
					fleetData[fleetUnit].mark,
					fleetData[fleetUnit].size,
					randomPLacementResult[1],
					randomPLacementResult[2],
					randomPLacementResult[0]
				);
				break;
			}
		}
	}
}

///dealing with fleets

function getFleetNameFromFleetMark(fleetData, fleetMark) {
	for (let fleetUnit in fleetData) {
		if (fleetData[fleetUnit].mark === fleetMark) return fleetUnit;
	}
	return false;
}

function decreaseFleetUnitLife(fleetData, fleetMark) {
	fleetData[getFleetNameFromFleetMark(fleetData, fleetMark)].life--;
}

function checkIfFleetSink(fleetData, fleetMark) {
	let shipLife =
		fleetData[getFleetNameFromFleetMark(fleetData, fleetMark)].life;

	if (shipLife === 0) {
		return true;
	} else {
		return false;
	}
}

function checkIfAllFleetSink(fleetData) {
	for (let fleetUnit in fleetData) {
		let fleetStatus = checkIfFleetSink(fleetData, fleetData[fleetUnit].mark);
		if (!fleetStatus) return false;
	}
	return true;
}

//dealing with user targets

function interactWithTheTarget(boardData, fleetData, targetRow, targetColumn) {
	if (boardData[targetRow][targetColumn] === "X") {
		return "That Target is already hit!";
	} else if (boardData[targetRow][targetColumn] !== " ") {
		let fleetThatisHit = boardData[targetRow][targetColumn];
		decreaseFleetUnitLife(fleetData, fleetThatisHit);
		boardData[targetRow][targetColumn] = "X";
		if (checkIfFleetSink(fleetData, fleetThatisHit)) {
			return getFleetNameFromFleetMark(fleetData, fleetThatisHit) + " sunk!";
		} else {
			return (
				"You Hit " +
				getFleetNameFromFleetMark(fleetData, fleetThatisHit) +
				" fleet!"
			);
		}
	} else {
		boardData[targetRow][targetColumn] = "/";
		return "Your shot missed";
	}
}

function convertPlayerGuessIntoCoordinate(onePLayerGuess) {
	//Argument Format A10 B5
	let targetRowRaw = onePLayerGuess.match(/[A-J]/);
	let targetColumnRaw = onePLayerGuess.match(/[1-9]|10/);

	let targetRowProcessed = targetRowRaw[0].charCodeAt(0) - 65;
	let targetColumnProcessed = targetColumnRaw[0] - 1;

	//check if conversion valid
	if (targetRowRaw && targetColumnRaw) {
		return [targetRowProcessed, targetColumnProcessed];
	} else {
		return false;
	}
}

//Main game loop

function startBattleShip(playerGuesses) {
	let boardData = generateEmptyBoardData();
	const fleetData = {
		AirCraftCarrier: { fleet: 1, size: 5, life: 5, mark: "A" },
		Battleship: { fleet: 1, size: 4, life: 4, mark: "B" },
		Cruiser: { fleet: 1, size: 3, life: 3, mark: "C" },
		Destroyer: { fleet: 1, size: 2, life: 2, mark: "D" }
	};

	if (playerGuesses.length >= 10) {
		generateEnemyOnBoard(boardData, fleetData);
		printBoard(boardData);
		for (let onePLayerGuess of playerGuesses) {
			clearScreen();
			let targetRow = convertPlayerGuessIntoCoordinate(onePLayerGuess)[0];
			let targetColumn = convertPlayerGuessIntoCoordinate(onePLayerGuess)[1];

			let message = interactWithTheTarget(
				boardData,
				fleetData,
				targetRow,
				targetColumn
			);
			printBoard(boardData);
			console.log("Target Coordinate : " + onePLayerGuess);
			console.log("Target Status : ", message);
			sleep(3000);
		}

		if (checkIfAllFleetSink(fleetData)) {
			console.log("Good Job Admiral! All Fleet Destroyed.");
		} else {
			console.log("You lose.");
		}
	} else {
		if (playerGuesses[0] === "/help") {
			console.log(
				"Sink your opponent fleet by giving targets to shot at.\nMinimum Target amount : 10\nExample: node battleship B6 D8 B3 etc.\nA fleet will sink if you shoot all of the ship part.\n\n MAP: \n"
			);
			printBoard(boardData);
		} else {
			console.log(
				"You have to give 10 Coordinates, minimum.\nPlease run node battleship.js /help for viewing Battleship map and instructions"
			);
		}
	}
}

startBattleShip(process.argv.slice(2));

//startBattleShip(["","","B8","A7","C8", "B5", "I9", "A3", "D7", "E6", "F9", "H8"].slice(2));
