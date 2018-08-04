const imports = require("./composition.js");
const CookieFactory = imports.CookieFactory;
const fs = require("fs");

let options = fs.readFileSync("./ingredients.txt")
	.toString()
	.split("\n")
	.map(x=> x.split("="));

let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);

let sugarFreeCookies = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);

console.log("sugar free cookies are :");

for(let freeSugarCookie of sugarFreeCookies){
	console.log(freeSugarCookie.nama);
}