class Cookie{
	constructor(nama, waktuMatang){
		this.nama = nama;
		this.status = "mentah";
		this.waktuMatang = waktuMatang;
		this._time = 0;
	}

	get waktuHampirMatang(){
		return this.waktuMatang - 5;
	}

	get cookieStatus(){
		return this.status;
	}

	bake(minutes){
		this._time+=minutes;
		this.updateCookieStatus();
	}

	updateCookieStatus(){
		if(this._time<this.waktuMatang && this._time >= this.waktuHampirMatang){
			this.status = "hampir matang";
		}
		else if(this._time === this.waktuMatang){
			this.status = "matang";
		}
		else if (this._time>this.waktuMatang){
			this.status = "hangus";
		}
	}
}

module.exports = Cookie;