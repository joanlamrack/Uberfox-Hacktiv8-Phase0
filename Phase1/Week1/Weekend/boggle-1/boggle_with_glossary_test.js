let BoggleBoard  = require("./boggle.js");
const wordsFromGlossary = require('./data.js');

let boggle = new BoggleBoard();

let board = boggle.shake(4);

for(let word of wordsFromGlossary){
	if(boggle.isThisWordFound(word,board)){
		console.log(`${word} is found`);
	}
}

console.log(board);
