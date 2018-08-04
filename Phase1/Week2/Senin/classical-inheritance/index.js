"use strict"

class Animal{
	constructor(num_legs, is_warm_blooded){
		this.num_legs = num_legs;
		this.is_warm_blooded = is_warm_blooded;
		this.superpower = new SuperPower();
	}
}

class Chicken extends Animal{
	constructor(num_legs, is_warm_blooded){
		super(num_legs, is_warm_blooded);
	}
}

class Chimpanzee extends Animal{
	constructor(num_legs, is_warm_blooded){
		super(num_legs, is_warm_blooded);
	}
}
class Duck extends Animal{
	constructor(num_legs, is_warm_blooded){
		super(num_legs, is_warm_blooded);
	}
}

class Frog extends Animal{
	constructor(num_legs, is_warm_blooded){
		super(num_legs, is_warm_blooded);
	}
}

class SuperPower{
	constructor(){
		this.superpowah = "";
	}

	use_laser_vision(){
		this.superpowah = "Zing! Zing! Zing!";
		return this.superpowah;
	}

	be_invisible(){
		this.superpowah = "You can see me, Poof!, now you don't!";
		return this.superpowah;
	}

	summon_chicken_god(){
		this.superpowah = "By the destiny of avian wings, now I summon thee, O mighty chicken!";
		return this.superpowah;
	}

	be_big(){
		this.superpowah = "Muahahaha, you all so small. *boom* *boom*";
		return this.superpowah;
	}

	forever_young(){
		this.superpowah = "Eh? hey, pay respect to the eldest! I'm 10000 years old, you know.";
		return this.superpowah;
	}
}

module.exports = {
	Animal : Animal,
	Chicken : Chicken,
	Frog : Frog,
	SuperPower : SuperPower
};