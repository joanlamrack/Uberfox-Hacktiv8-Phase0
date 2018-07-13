/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*

---------------
Students Report
---------------

PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
    let kelas = []
    let count = 1
    let result = []

    for(let a = 0; a < grades1.length; a++){
        for(let b = 0; b < kelas.length; b++){
            if(grades1[a].classCode !== kelas[b]){
                count *= 1
            } else {
                count *= 0
            }
        }
        if(count === 1){
            kelas.push(grades1[a].classCode)
        }
    }
    
    for(let x = 0; x < kelas.length; x++){
        var obj = {}
        obj.classCode = kelas[x]
        obj.passed = []
        obj.failed = []

        for(let p = 0; p < grades1.length; p++){
            if(obj.classCode === grades1[p].classCode){
                if(grades1[p].score >= 70){
                    obj.passed.push(grades1[p].name)
                } else {
                    obj.failed.push(grades1[p].name)
                }
            }
        }
        result.push(obj)
    }
    return result
}

var grades1 = [
    { name: 'John', score: 80, classCode: 'A' },
    { name: 'Mike', score: 60, classCode: 'B' },
    { name: 'Budi', score: 70, classCode: 'C' },
    { name: 'Siti', score: 50, classCode: 'A' },
    { name: 'Aaron', score: 10, classCode: 'A' },
    { name: 'Arthur', score: 10, classCode: 'C' },
    { name: 'Osass', score: 10, classCode: 'B' },
    { name: 'Yolo', score: 90, classCode: 'C' },
    { name: 'Ari Supriatna', score: 90, classCode: 'B' }
];

console.log(getReport(grades1));

  /*
  [
    { classCode: 'A', passed: [ 'Siti', 'Aaron' ], failed: [ 'John' ] },
    { classCode: 'B', passed: [ 'Mike', 'Osass' ], failed: [] },
    { classCode: 'C', passed: [ 'Arthur' ], failed: [ 'Budi', 'Yolo' ] },
  ]
  */