/**
=======================
British National Crisis
=======================
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris
dengan melakukan pengeboman di tempat-tempat yang berbeda.

Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh
ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan
angka 2,3,4,6,7, atau 8  yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan
beberapa kata berupa angka dalam bahasa Inggris.

District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8

Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi:
TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!

Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi:
 SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!

Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi:
 FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!

Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi:
 TWO => 2. Maka targetnya District 2! 

HINT: Urutan angka mana yang keluar lebih dulu tidak penting!
 Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea(code) {
  wCount = 0;
  tCount = 0;
  oCount = 0;
  hCount = 0;
  rCount = 0;
  eCount = 0;
  fCount = 0;
  uCount = 0;
  sCount = 0;
  iCount = 0;
  xCount = 0;
  vCount = 0;
  nCount = 0;
  gCount = 0;

  for (i = 0; i <= code.length - 1; i++) {
    if (code[i] === 'W') {
      wCount++;
    }
    else if (code[i] === 'T') {
      tCount++;
    }
    else if (code[i] === 'O') {
      oCount++;
    }
    else if (code[i] === 'H') {
      hCount++;
    }
    else if (code[i] === 'R') {
      rCount++;
    }
    else if (code[i] === 'E') {
      eCount++;
    }
    else if (code[i] === 'F') {
      fCount++;
    }
    else if (code[i] === 'U') {
      uCount++;
    }
    else if (code[i] === 'S') {
      sCount++;
    }
    else if (code[i] === 'I') {
      iCount++;
    }
    else if (code[i] === 'X') {
      xCount++;
    }
    else if (code[i] === 'V') {
      vCount++;
    }
    else if (code[i] === 'N') {
      nCount++;
    }
    else {
      gCount++;
    }
  }

  var hasil = [];

  while (tCount > 0 && wCount > 0 && oCount > 0) {
    hasil.push(2);
    oCount--;
    wCount--;
    tCount--;
  }

  while (tCount > 0 && hCount > 0 && rCount > 0 && eCount > 1) {
    hasil.push(3);
    eCount = eCount - 2;
    rCount--;
    hCount--;
    tCount--;
  }

  while (fCount > 0 && rCount > 0 && oCount > 0 && uCount > 0) {
    hasil.push(4);
    rCount--;
    uCount--; 
    oCount--;
    fCount--;
  }

  while (sCount > 0 && iCount > 0 && xCount > 0) {
    hasil.push(6);
    xCount--;
    iCount--;
    sCount--;
  }

  while (sCount > 0 && eCount > 1 && vCount > 0 && nCount > 0) {
    hasil.push(7);
    nCount--;  
    vCount--;
    eCount = eCount - 2;
    sCount--;
  }
  
  while (eCount > 0 &&  iCount > 0 && gCount > 0 && hCount > 0 && tCount > 0) {
    hasil.push(8);
    tCount--;
    hCount--;  
    gCount--;
    iCount--;
    eCount--;
  }
  var jumlah = 0 ;
  if (hasil.length === 1) {
    jumlah = hasil[0];
    return 'District ' + jumlah + ' is the next target!';
  }
  else {
    for (var i = 0; i <= hasil.length - 1; i++) {
      jumlah = jumlah + hasil[i];
    }
    return 'District ' + jumlah + ' is the next target!';
  }
  // Code Hanya Disini!
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"