// Array 2 Competency Test
// RULES (KOE)
// - Gunakan algoritma / pseudocode sebelum mengerjakan soal!
// - tidak boleh menggunakan function bawaan built-in, kecuali push

/*
  STORE studentArr WITH ANY ARRAY OF STRING
  STORE output WITH EMPTY ARRAY
  FOR EACH student IN studentArr
    STORE found WITH FALSE
    FOR EACH elementkey OF output
      IF FIRST LETTER in ELEMENT elementkey IN ARRAY output EQUALS TO FIRST LETTER IN student
        SET found WITH TRUE
        APPEND student INTO OUTPUT AT ELEMENT elementkey
      ENDIF
    ENDFOR
    IF found EQUAL TO FALSE
      APPEND ARRAY CONTAINING FIRST LETTER OF student AND student INTO OUTPUT
    ENDIF
  ENDFOR

  RETURN output
*/

function initialGrouping(studentsArr) {
  var output = [];
  for(var student of studentsArr){
    var found = false;
    for(var key in output){
      if(output[key][0]=== student[0]){
        found = true;
        output[key].push(student);
      }
    }
    if(!found)output.push([student[0], student]); 
  }
  return output;
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
