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

function convertToObject (keys, values) {

  if(keys === '' || values === ''){
    return {}
  }

  var keysList = []
  var valuesList = []
  var word = ''
  var obj = {}

  //keys
  for(var i = 0; i < keys.length; i++){
    if(keys[i] === ','){
      keysList.push(word)
      word = ''
    } else {
      word += keys[i]
    }
  }
  keysList.push(word)
  word = ''

  //values
  for(var j = 0; j < values.length; j++){
    if(values[j] === ','){
      valuesList.push(word)
      word = ''
    } else {
      word += values[j]
    }
  }
  valuesList.push(word)

  for(var a = 0; a < keysList.length; a++){
    obj[keysList[a]] = valuesList[a]
  }
  return obj
}

console.log(convertToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(convertToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(convertToObject('', ''));
// { }
