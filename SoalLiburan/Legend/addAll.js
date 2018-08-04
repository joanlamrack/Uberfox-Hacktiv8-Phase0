//Legend addALL

/*
    diberikan sebuah array angka dimana , angka - angka tersebut adalah 
    increment dari angka sebelumnya sebesar 1 . 
    tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
    - Tidak boleh memakai perulangan 
    - Tidak boleh memakai function magic apapun kecuali .length pada array
    - Tidak boleh memakai rekursif 
*/


function addAll(numArray)
{
	var step = numArray[1] - numArray[0];
    return (numArray.length/2)*(2*numArray[0]+(numArray.length-1)*step);
}

function addAll2(numArray){
	return ((numArray[0]+numArray[numArray.length-1])/2)*numArray.length;
}

console.log(addAll([1,2,3,4,5]))
// 15

console.log(addAll([5,6,7,8,9,10]));
// 45

console.log(addAll([2,3,4,5,6]));
// 20

console.log(addAll([8,7,6,5,4,3,2])); 
// 35