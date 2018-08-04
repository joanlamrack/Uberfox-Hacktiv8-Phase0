class Oven{

	constructor(){
		this._cookies = [];
		this.minutes = 0;
	}

	addCookie(cookieObj){
		this._cookies.push(cookieObj);
	}

	bake(minutes){
		for(let cookie of this._cookies){
			cookie.bake(minutes);
		}
	}

	cookiesInside(){
		return this._cookies;
	}

	reset(){
		this.minutes =0;
	}
}

module.exports = new Oven();