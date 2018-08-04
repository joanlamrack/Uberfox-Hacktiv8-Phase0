class Hero{
	constructor(name, type, damage, strength, intelligence, agility){
		this.name = name;
		this.damage = damage;
		this.strength = strength; 
		this.intelligence = intelligence;
		this.agility = agility;

		this.type = type;

		this.basic_mana = 75;
		this.basic_money = 500;
		let basic_health = 200;
		switch(type){
		case "strength": this.health = basic_health + 562.5; break;
		case "intelligence": this.health = basic_health + 405; break;
		case "agility": this.health = basic_health + 450; break;
		}

		
		this.items=[];
	}

	set health(amount){
		if(amount<0){
			this._health = 0;
		}
		else{
			this._health = amount;
		}
	}

	get health(){
		return this._health;
	}

	get hasHealingSalve(){
		for(let item of this.items){
			if(item.name === "Healing Salve") return true;
		}
		return false;
	}

	consumeHealingSalve(){
		for(let index = 0 ; index < this.items.length ; index++){
			if(this.items[index].name === "Healing Salve"){
				this.items.splice(index,1);
				this.health = this.health + 400;
			}
		}
	}

	buyItem(Obj_item){
		if(Obj_item.price<=this.basic_money){
			this.basic_money -= Obj_item.price;
			this.items.push(Obj_item);
			for(let bonusPerk in Obj_item.bonus){
				this[bonusPerk]+=Obj_item.bonus[bonusPerk];
			}
		}
		else{
			console.log("Sorry your balance is not sufficient to buy this item");
		}
	}

	attack(attackedHero){
		if(this.health<=0){
			console.log(`YOU ${this.name} ALREADY DIED! YOU CANNOT ATTACK`);
		}
		else if(attackedHero.health<=0){
			console.log(`${attackedHero.name} already died`);
		}
		else{
			console.log(`${this.name} attack ${attackedHero.name} with damage ${this.strength+this.damage}`);
			attackedHero.health = attackedHero.health - (this.strength+this.damage);
			console.log(`Current Health ${attackedHero.name} is ${attackedHero.health}`);
			if(attackedHero.hasHealingSalve){
				attackedHero.consumeHealingSalve();
				console.log(`${attackedHero.name} heal his/her(self) using Healing Salve. Current health is is ${attackedHero.health}`);
			}

			if(attackedHero.health === 0){
				console.log(`You killed ${attackedHero.name}`);
				this.basic_money += 1000;
			}
			
		}

	}
}

module.exports = Hero;