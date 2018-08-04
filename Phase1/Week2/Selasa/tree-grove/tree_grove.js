const imports = require('./mango_tree.js');
const MangoTree = imports.MangoTree;
const AppleTree = imports.AppleTree;
const PearTree = imports.PearTree;

class TreeGrove {
	constructor(){
		this._grove = [];
		console.log("input your trees data !\nparameter ke-1: nama pohon\nparameter ke-2: umur pohon ketika ditanam di taman tersebut\npamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut\nparameter ke-4: umur mature pohon tersebut\n");
	}

	inputTree(treeKind, age, height, matureAge){
		if(treeKind === "MangoTree"){
			this._grove.push(new MangoTree(age,height,matureAge));
		}
		else if(treeKind === "PearTree"){
			this._grove.push(new PearTree(age,height,matureAge));
		}
		else if(treeKind === "AppleTree"){
			this._grove.push(new AppleTree(age,height,matureAge));
		}
		
	}

	get grove(){
		return this._grove;
	}

	showAges(){
		for(let tree of this.grove){
			console.log(`${tree.treeKind} Tree : ${tree.age} years old`);
		}
	}

	showTrees(){
		let treeNames = [];
		for(let tree of this.grove){
			treeNames.push(tree.treeKind);
		}
		return treeNames;
	}

	showMatureTrees(){
		let treeNames = [];
		for(let tree of this.grove){
			if(tree.age >= tree.matureAge && tree.healthStatus) treeNames.push(tree.treeKind);
		}
		return treeNames;
	}

	showDeadTrees(){
		let treeNames = [];
		for(let tree of this.grove){
			if(!tree.healthStatus) treeNames.push(tree.treeKind);
		}
		return treeNames;
	}

	nextYear(){
		for(let tree of this.grove){
			tree.grow();
			tree.produceFruits();
		}
	}

}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7);
grove.inputTree("MangoTree", 5, 2.4, 12);
grove.inputTree("AppleTree", 4, 1.2, 5);
grove.inputTree("PearTree", 7, 2, 15);

// next year
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
// show trees ages
grove.showAges();

// show trees
console.log(grove.showTrees());

// show trees
console.log(grove.showMatureTrees());

// show trees
console.log(grove.showDeadTrees());

