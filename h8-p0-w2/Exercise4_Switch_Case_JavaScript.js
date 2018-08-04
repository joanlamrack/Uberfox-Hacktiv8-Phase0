//Exercise 4

/*Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!*/

//CATATAN: JAWABAN TERMASUK HANDLE TANGGAL TIDAK VALID DAN TAHUN KABISAT

var tanggal = 100;
var bulan = 8;
var tahun = 2012;
var bulanPrinted;

if (
	tanggal >= 1 &&
	bulan >= 1 &&
	bulan <= 12 &&
	tahun >= 1990 &&
	tahun <= 2200
) {
	switch (true) {
		case (bulan === 1 || bulan % 2 != 0) && tanggal <= 31:
			switch (bulan) {
				case 1:
					bulanPrinted = 'Januari';
					break;
				case 3:
					bulanPrinted = 'Maret';
					break;
				case 5:
					bulanPrinted = 'Mei';
					break;
				case 7:
					bulanPrinted = 'Juli';
					break;
				case 9:
					bulanPrinted = 'September';
					break;
				case 11:
					bulanPrinted = 'November';
					break;
			}
			break;

		case bulan != 2 && bulan % 2 == 0 && tanggal <= 30:
			switch (bulan) {
				case 4:
					bulanPrinted = 'April';
					break;
				case 6:
					bulanPrinted = 'Juni';
					break;
				case 8:
					bulanPrinted = 'Agustus';
					break;
				case 10:
					bulanPrinted = 'October';
					break;
				case 12:
					bulanPrinted = 'Desember';
					break;
			}
			break;

		case bulan === 2:
			if (
				tahun % 4 === 0 &&
				(tahun % 100 !== 0 || (tahun % 100 === 0 && tahun % 400 === 0))
			) {
				if (tanggal <= 29) {
					bulanPrinted = 'Februari';
				}
			} else {
				if (tanggal <= 28) {
					bulanPrinted = 'Februari';
				}
			}
	}
	if (bulanPrinted !== undefined) {
		console.log(tanggal + ' ' + bulanPrinted + ' ' + tahun);
	} else {
		console.log(
			'Input tidak valid. Cek Batasan input dan format tanggal(1-31), bulan(1-12), tahun(1990-2200) dan atau Tahun kabisat.'
		);
	}
}
