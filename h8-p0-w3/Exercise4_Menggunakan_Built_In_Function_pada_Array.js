//Exercise 4 

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(inputArray){
	inputArray.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	inputArray.splice(4,1,"Pria","SMA International Metro");
	console.log(inputArray);
	var tanggal = inputArray[3].split('/');
	var tanggalLain = tanggal.slice();//copy the array
	switch(Number(tanggal[1])){
		case 1:
			console.log("Januari");
			break;
		case 2:
			console.log("Februari");
			break;
		case 3:
			console.log("Maret");
			break;
		case 4:
			console.log("April");
			break;
		case 5:
			console.log("Mei");
			break;
		case 6:
			console.log("Juni");
			break;
		case 7:
			console.log("Juli");
			break;
		case 8:
			console.log("Agustus");
			break;
		case 9:
			console.log("September");
			break;
		case 10:
			console.log("Oktober");
			break;
		case 11:
			console.log("November");
			break;
		case 12:
			console.log("Desember");
			break;
	}

	tanggal.sort(function(a,b){return b-a});
	console.log(tanggal);
	console.log(tanggalLain.join("-"));
	console.log(inputArray[1].slice(0,15));
}