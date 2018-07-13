//KOE
//Number Processing
//
// RULES
// - Wajib Pseudocode
// - Tidak boleh menggunakan Function bawaan Math apapun.
// - Jika mean dalam bentuk desimal, bulatkan kebawah.
//
// Lihat test case.
//
//

/*
	SET numberArr WITH ANY ARRAY OF NUMBERS
	STORE min AND max WITH FIRST ELEMENT numberArr
	STORE odds WITH EMPTY ARRAY
	STORE evens WITH EMPTY ARRAY
	STORE mean WITH ZERO

	FOR EACH number of numberArr
		IF number MOD 2 EQUALS TO 1
			APPEND number INTO odds
		ELSE
			APPEND number INTO evens
		ENDIF


		IF number GREATER THAN max
			SET max WITH number
		ENDIF

		IF number SMALLER THAN max
			SET min WITH number
		ENDIF

		SET mean WITH mean + number
	ENDFOR 

	SET mean WITH mean DIVIDED BY LENGTH OF numberArr
	SET mean WITH mean CONVERTED INTO STRING
	SET mean WITH FIRST ELEMENT OF mean

	RETURN "Min: "+min+", Max: "+max+", Mean: "+mean+", Odds: "+odds.join("-")+", Evens: "+evens.join("-");

*/
function numberProcessing(numberArr) {
	var min = max = numberArr[0];
	var odds = [];
	var evens = [];
	var mean = 0;

	for (var number of numberArr){
		if(number%2){
			odds.push(number);
		}
		else{
			evens.push(number);
		}

		if(number > max){
			max = number;
		}

		if(number < min){
			min = number;
		}

		mean+= number;
	}
	mean= mean / numberArr.length;
	mean = mean.toString();
	mean = mean[0];

	return "Min: "+min+", Max: "+max+", Mean: "+mean+", Odds: "+odds.join("-")+", Evens: "+evens.join("-");
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
