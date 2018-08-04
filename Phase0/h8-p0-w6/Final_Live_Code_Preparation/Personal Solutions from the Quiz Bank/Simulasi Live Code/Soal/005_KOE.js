/**
CSV to Object
-------------
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }

  RULES
  =====
  - Dilarang menggunakan built in function .split

*/

function split(str, splitter){
	var output = [];
	var buffer = "";
	for(var char of str){
		if(char === splitter){
			output.push(buffer);
			buffer = "";
		}
		else{
			buffer+= char
		}
	}
	output.push(buffer);
return output;
}

function convertToObject (keys, values) {
	var output = {}
	if(keys==="" || values ===""){
		return output;
	}
	else{
		var keys = split(keys, ",");
		var values = split(values, ",");

		for(var key in keys){
			output[keys[key]] = values[key];
		}

		return output;
	}
}

console.log(convertToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(convertToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(convertToObject('', ''));
// { }
