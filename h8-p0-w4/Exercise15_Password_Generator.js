//Exercise 15 Password Generator

function changeVocals (str) {
  	var output="";
	for(var i = 0; i<str.length; i++){
		if(str[i].match(/[aieuoAIUEO]/)){
			output+=String.fromCharCode(str.charCodeAt(i) + (str[i] === 'z' || str[i] === 'Z' ? -25 : 1));
		}
		else{
			output+=str[i];
		}
  	}
  	return output;
}

function reverseWord (str) {
	var output = ""
	for(var i = str.length-1 ; i >= 0 ; i--){
		output += str[i];
	}
	return output;
}

function setLowerUpperCase (str) {
  	var output = "";
	for (var i = 0 ; i < str.length ; i++){
		output += (str[i]=== str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase());
	}
	return output;
}

function removeSpaces (str) {
 	var output='';
 	for(var i = 0; i < str.length ; i++){
 		output+=(str[i]===" " ? "" : str[i]);
 	}
 	return output;
}

function passwordGenerator (name) {
	return (name.length < 5 ? "Minimal karakter yang diinputkan adalah 5 karakter" : removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))) 
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'