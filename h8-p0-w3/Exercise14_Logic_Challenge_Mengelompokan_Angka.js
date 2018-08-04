//Exercise 14 Mengelompokkan Angka

function mengelompokkanAngka(arr) {
  var output = [[],[],[]];

  for(var value of arr){
  	if ( value % 3 == 0){
  		output[2].push(value);
  	}
  	else if( value % 2 ==0 ){
  		output[0].push(value);
  	}
  	else{
  		output[1].push(value);
  	}

  }
  return output;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]