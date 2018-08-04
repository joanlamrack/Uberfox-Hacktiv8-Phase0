/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {
  let sentenceSplit = sentence.split(' ')
  //let reverse = ''
  let hasil = []
  for(var a = sentenceSplit.length-1; a >= 0 ; a--){
    var reverse = ''
    for(var b = sentenceSplit[a].length-1; b >= 0; b--){
      reverse += sentenceSplit[a][b]
    }
    hasil.push(reverse)
  }

  // console.log('hasil: '+hasil)
  // console.log('sentenceSplit: ' + sentenceSplit)
  // let result = []
  // let count = 0
  // for(var x = hasil.length-1; x >= 0; x--){
  //   result = []
  //   for(var y = 0; y < sentenceSplit.length; y++){
  //     if(hasil[x] !== sentenceSplit[y]){
  //       result.push(sentenceSplit[y])
  //     }
  //   }
  // }

  // return result
  let hasilAkhir1 = ''
  let hasilAkhir2 = ''
  let arr1 = []
  let arr2 = []

  for(var b = 0; b < sentenceSplit.length; b++){
    hasilAkhir1 = sentenceSplit[b]
    arr1.push(hasilAkhir1)
  }

  let result1 =  arr1.sort()
  
  for(var x = hasil.length-1; x >= 0; x--){
    hasilAkhir2 = hasil[x]
    arr2.push(hasilAkhir2)
  }
  let result2 =  arr2.sort()
  let hasilAkhir = []
  for(var c = 0; c < result1.length; c++){
    for(var d = 0; d < result2.length; d++){
      if(result1[c] !== result2[d]){
        hasilAkhir.push(result1[c])
      }
    }
  }
  return hasilAkhir
}

//console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

// console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
// //['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
// //['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
