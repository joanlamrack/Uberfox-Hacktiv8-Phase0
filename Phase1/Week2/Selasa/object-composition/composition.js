"use strict";

class Cookie{
	constructor(nama, ingredientsArr){
		this.nama = nama;
		this.status = "mentah";
		this.ingredients = ingredientsArr;
	}

	bake(){
		this.status = "selesai dimasak";
	}
}
class PeanutButter extends Cookie{
	constructor(nama, ingredientsArr){
		super(nama, ingredientsArr);
		this.peanut_count = 100;
	}
}
class ChocolateChip extends Cookie{
	constructor(nama, ingredientsArr){
		super(nama, ingredientsArr);
		this.choc_chip_count = 200;
	}
}

class ChocolateChipCrumbled extends ChocolateChip{
	constructor(nama, ingredientsArr){
		super(nama,ingredientsArr);
		this.form = "crumbled";
	}
}

class PeanutButterCrumbled extends ChocolateChip{
	constructor(nama, ingredientsArr){
		super(nama,ingredientsArr);
		this.form = "crumbled";
	}
}

class OtherCookie extends Cookie{
	constructor(nama, ingredientsArr){
		super(nama, ingredientsArr);
		this.other_count = 150;
	}
}

class CookieFactory{
	static create(options){
		let cookies = [];
		for(let option of options){
			let cookieName = option[0].trim();
			let ingredientsStr = option[1].split(",")
				.map(x => x.split(":"))
				.map(x => new Ingredient(x[1].trim(),x[0].trim()));

			if(cookieName === "peanut butter"){
				cookies.push(new PeanutButter(cookieName, ingredientsStr));
			}
			else if(cookieName === "chocolate chip"){
				cookies.push(new ChocolateChip(cookieName, ingredientsStr));
			}
			else{
				cookies.push(new OtherCookie(cookieName, ingredientsStr));
			}
		}
		return cookies;
	}

	static cookieRecommendation(day, batchOfCookieData){
		let recommendedCookies =[];

		for(let cookie of batchOfCookieData){
			let ingredientsOfCookie = cookie.ingredients;
			if(day === "tuesday"){
				let sugarFound = false;
				for(let ingredient of ingredientsOfCookie){
					if(ingredient.name === "sugar") sugarFound = true;
				}
				if(!sugarFound) recommendedCookies.push(cookie);
			}
			else if(day === "monday"){
				for(let ingredient of ingredientsOfCookie){
					if(ingredient.name === "gluten free flour") recommendedCookies.push(cookie);
				}
			}
		}

		return recommendedCookies;
		
	}
}

class Ingredient {
	constructor(name, amount){
		this.name = name;
		this.amount = amount;
	}
}

module.exports = {
	PeanutButter : PeanutButter,
	ChocolateChip : ChocolateChip,
	OtherCookie : OtherCookie,
	Cookie : Cookie,
	CookieFactory : CookieFactory
}

