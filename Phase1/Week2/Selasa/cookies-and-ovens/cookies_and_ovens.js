const Cookie = require("./cookies.js");
const Oven = require("./oven.js");

let chocoCookie = new Cookie("cokelat",20);
let peanutCookie = new Cookie("kacang",30);
let cheeseCookie = new Cookie("keju",35);

Oven.addCookie(chocoCookie);
Oven.addCookie(peanutCookie);
Oven.addCookie(cheeseCookie);

for(let minutes = 0 ; minutes<=35 ; minutes+=5){
	console.log(`Menit ke ${minutes} :`);
	for(let cookie of Oven.cookiesInside()){
		if(minutes!== 0)cookie.bake(5);
		console.log(`\t Kue ${cookie.nama} : ${cookie.cookieStatus}`);
	}
}

