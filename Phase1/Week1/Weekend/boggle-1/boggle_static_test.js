let BoggleBoard  = require("./boggle.js");
const wordsFromGlossary = require('./data.js');


let boggle = new BoggleBoard();

let board = [
	["B","R","D","W"],
	["I","E","E","F"],
	["A","R","I","T"],
	["H","T","I","I"],
];

let words = ["BRIE", "ERI", "BREE", "GRAY", "HOI","DER","SUSAN", "GUSTI"];


for(let word of words){
	console.log(`${word} is found : `,boggle.isThisWordFound(word,board));
}