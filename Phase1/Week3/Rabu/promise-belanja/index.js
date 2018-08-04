const beli = require("./beli.js");

class objectToBuy{
    constructor(namaItem, harga, waktu){
        this.item = namaItem;
        this.harga = harga;
        this.waktu = waktu;
    }
}

let hapeObj = new objectToBuy("hape", 50000, 2000);
let buncis = new objectToBuy("buncis", 3000, 1000);
let brokoli = new objectToBuy("brokoli", 4000, 3000);
let rendang = new objectToBuy("rendang", 60000, 4000);
let mobil = new objectToBuy("mobile", 90000, 7000);


beli(200000, hapeObj)
.then((response)=> beli(response.uang, buncis))
.then((response)=> beli(response.uang, brokoli))
.then((response)=> beli(response.uang, rendang))
.then((response)=> beli(response.uang, mobil))
.catch((response)=> console.error(response.output));