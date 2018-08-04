class FruitTree {
	constructor (age=0, height=0, matureAge, maxAge, deadAge, treeKind, growth_rate) {
		this._treeKind = treeKind;
		console.log(`The ${this._treeKind} Tree is alive! :smile:`);
		this._age = age;
		this._height = height;
		this._healthStatus = true;
		this._harvested = {good:0, bad:0}; 
		this._fruits = [];
		this._mature = matureAge;
		this._max = maxAge;
		this._dead = deadAge;
		this._growthRate = growth_rate;
	}
  
	get age () {
		return this._age;
	}

	get matureAge(){
		return this._mature;
	}
  
	get height () {
		return this._height;
	}
  
	get fruits () {
		return this._fruits;
	}

	get treeKind(){
		return this._treeKind;
	}
  
	get healthStatus () {
		return this._healthStatus;
	}

	get harvested(){
		return `${this._harvested.good + this._harvested.bad} (${this._harvested.good} good,${this._harvested.bad} bad)`;
    
	}
  
	// Get current states here
  
	// Grow the tree
	grow () {
		this._age++;
		//grow between 0 - 5;
		if(this._age<this._max)this._height+=Math.random()*this._growthRate;
		if(this._age>=this._dead){
			this._healthStatus = false;
      
		}
	}
  
	// Produce some mangoes
	produceFruits () {
		//produced 1 - 6 Mangoes
		if(this._age >= this._mature){
			let fruitsProduced = 1+Math.floor(Math.random() * Math.floor(10));
			for (let fruit = 0 ; fruit < fruitsProduced ; fruit++){
				if(this._treeKind === "Mango"){
					this._fruits.push(new Mango())
				}
				else if(this._treeKind === "Apple"){
					this._fruits.push(new Apple());
				}
				else if(this._treeKind === "Pear"){
					this._fruits.push(new Pear());
				}
			}
		}
    
	}
  
	// Get some fruits
	harvest () {
		this._harvested.good = 0;
		this._harvested.bad = 0;
		let fruitsCountOnTheTree = this._fruits.length;
		for(let fruit = 0 ; fruit < fruitsCountOnTheTree ; fruit++){
			let fruitHarvested = this._fruits.pop();
			if(fruitHarvested._quality ==="good"){
				this._harvested.good++;
			}
			else{
				this._harvested.bad++;

			}
		}
	}
}
class Fruit {
	constructor (fruitName) {
		this._fruitName = fruitName;
		this._quality = (Math.floor(Math.random() * Math.floor(2)) ? "good":"bad");
	}
}

class MangoTree extends FruitTree{
	constructor(age, height, matureAge=5){
		super(age,height,matureAge,10,15,"Mango",1);
	}
}
  
class Mango extends Fruit{
	constructor(){
		super("Mango");
	}
}

class AppleTree extends FruitTree{
	constructor(age, height, matureAge=10){
		super(age, height,matureAge,12,20,"Apple", 2);
	}
}
class Apple extends Fruit{
	constructor(){
		super("Apple");
	}
}

class PearTree extends FruitTree{
	constructor(age, height, matureAge=2){
		super(age, height, matureAge,14,23,"Pear", 5);
	}
}
class Pear extends Fruit{
	constructor(){
		super("Pear");
	}
}


module.exports ={
	MangoTree : MangoTree,
	AppleTree : AppleTree,
	PearTree : PearTree
};