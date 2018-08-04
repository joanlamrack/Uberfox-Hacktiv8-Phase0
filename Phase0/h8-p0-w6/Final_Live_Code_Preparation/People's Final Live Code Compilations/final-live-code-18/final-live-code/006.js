/**
Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia
Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi JAM, MENIT DAN DETIK).
Contoh:
  formatDuration(62)    // "1 menit 2 detik"
  formatDuration(3665)  //  "1 jam 1 menit 5 detik"
  formatDuration(60) // "1 menit 0 detik"
NOTE: Tidak masalah jika 0 detik ditampilkan.
*/

function recursiveFormatDuration (seconds) {
  if(seconds == 0){
    return seconds + ' detik '
  } 

  let jam = Math.round(seconds / 3600)
  let menit = Math.round(seconds / 60)

  if(seconds >= 3600){
    return jam + ' jam ' + recursiveFormatDuration(Math.round(seconds % 3600))
  }
  
  if(seconds >= 60){
    return menit + ' menit ' + recursiveFormatDuration(Math.round(seconds % 60))
  } 

  if(seconds < 60){
    return seconds + ' detik '
  }
}

console.log(recursiveFormatDuration(3660)); // 1 jam 1 menit 0 detik
console.log(recursiveFormatDuration(62)); // 1 menit 2 detik
console.log(recursiveFormatDuration(7324)); // 2 jam 2 menit 4 detik
console.log(recursiveFormatDuration(0)); // 0 detik
