//Exercise 2 Faktor Persekutuan terbesar

function fpb(angka1, angka2) {


  	function createFactor(InputAngka){
	  	var output = [];
	  	var LastValid = [];
	  	for(var i = 1 ; i < InputAngka+1; i++){
	  		
	  		//console.log("["+i+","+InputAngka/i+"]");
	  		if(InputAngka % i == 0){
	  			//console.log("You have passed!")

	  			if(InputAngka/i === i){
		  			output.push([i,i]);
		  			//console.log("Break from loop");
		  			break;
			  	}
			  	else if(InputAngka/i !== LastValid[0]){
			  		output.push([i,InputAngka/i]);
			  		LastValid = [i,InputAngka/i];
			  		//console.log("LastValid updated. LastValid is now: "+LastValid);
			  	}
			  	else {
			  		//console.log("Break from loop");
			  		break;
			  	}
		  	}

	  	}
	  	//console.log("DONE!");
	  	//console.log("Factor from "+InputAngka+" is "+String(output).split(",")+" with length "+String(output).split(",").length);
	  	return String(output).split(",");
  	}

  	var FirstNumberTable = createFactor(angka1);
  	var SecondNumberTable = createFactor(angka2);

  	var FPB = 0;
  	for(var i = 0; i< FirstNumberTable.length; i++){
  		for(var j = 0 ; j <SecondNumberTable.length; j++){
  			///console.log("Comparing "+FirstNumberTable[i]+" with "+SecondNumberTable[j]);
  			if (FirstNumberTable[i]===SecondNumberTable[j]){
  				console.log("Same found: "+FirstNumberTable[i]);
  				if (Number(FPB) < Number(FirstNumberTable[i])){
  					FPB = FirstNumberTable[i];
  					//console.log("FPB is "+FPB);
  				}
  			}
  		}
  	}

  	return Number(FPB);

}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1