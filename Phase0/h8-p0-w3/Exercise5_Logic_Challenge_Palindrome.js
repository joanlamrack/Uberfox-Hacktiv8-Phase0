//Exercise 5 Palindrome

function palindrome(kata){
	if(kata == kata.split("").reverse().join('')){
		return true;
	}
	else{
		return false;
	}
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false