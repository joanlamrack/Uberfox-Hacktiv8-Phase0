function generateDominoNumber(){
	return 1+ Math.floor(Math.random() * Math.floor(9));
}

function domino(size) {

	let middleDominoFirst = (size% 2 ? (size-1)/2 : size/2);
	let middleDominoSecond = (size%2 ? middleDominoFirst : middleDominoFirst-1); 

	let dominoNumberCol = middleDominoFirst;
	let dominoNumberRowUp = Math.floor((middleDominoFirst)/2);
	let dominoNumberRowDown = Math.floor(dominoNumberRowUp + middleDominoFirst);

	for(let row = 0 ; row < size ; row++){
		let buffer = "";
		for(let col = 0 ; col < size ; col++){
			if(row === 0 || row === size-1 || row === middleDominoFirst || row === middleDominoSecond){
				buffer+="#";
			}
			else if((col === dominoNumberCol && row === dominoNumberRowUp )|| (col === dominoNumberCol &&row=== dominoNumberRowDown)){
				buffer+=generateDominoNumber();
			}
			else if(col === 0 || col === size-1){
				buffer+="#";
			}
			else{
				buffer+=" ";
			}

		}
		console.log(buffer);
	}
}

generateDominoNumber();

domino(9);
/*
NOTE: angka di dalam domino bisa berbeda

#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########

*/

domino(12);
/*
NOTE: angka di dalam domino bisa berbeda

############
#          #
#    5     #
#          #
#          #
############
############
#          #
#    1     #
#          #
#          #
############

*/

domino(10);
/*
NOTE: angka di dalam domino bisa berbeda

##########
#        #
#    6   #
#        #
##########
##########
#        #
#    6   #
#        #
##########

*/

domino(21);
/*
NOTE: angka di dalam domino bisa berbeda

#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################

*/