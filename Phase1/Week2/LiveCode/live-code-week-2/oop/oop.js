// Testing Ground
const Hero = require("./hero.js");
const Item = require("./item.js");
const Shop = require("./shop.js");

let mogul = new Hero("Mogul Khan The Axe", "strength", 70, 70, 20, 30);
let earthshaker = new Hero("Raigor Stonehoof The Earthshaker", "strength", 85, 80, 30, 20);
let invoker = new Hero("Invoker", "intelligence", 60, 30, 90, 20);
let shadow = new Hero("Nevermore The Shadow Fiend", "agility", 55, 45, 25, 77);

let ironBranch = new Item("Iron Branch", 50, {strength: 1, agility:2, intelligence:1});
let healSalv = new Item("Healing Salve", 110);
let gauntletsOfStrength = new Item("Gauntlets Of Strength", 135, {strength:3});

/*
//Health test
console.log(mogul);
console.log(earthshaker);
console.log(invoker);
console.log(shadow);
*/

Shop.buyItem(invoker, healSalv);
Shop.buyItem(invoker, healSalv);
Shop.buyItem(invoker, gauntletsOfStrength);
Shop.buyItem(invoker, gauntletsOfStrength);
Shop.buyItem(invoker, gauntletsOfStrength);

Shop.buyItem(mogul, gauntletsOfStrength);
Shop.buyItem(mogul, gauntletsOfStrength);
Shop.buyItem(mogul, ironBranch);
Shop.buyItem(mogul, ironBranch);

Shop.buyItem(earthshaker, gauntletsOfStrength);
Shop.buyItem(earthshaker, gauntletsOfStrength);
Shop.buyItem(earthshaker, gauntletsOfStrength);

mogul.attack(invoker);
mogul.attack(invoker);
mogul.attack(invoker);
mogul.attack(invoker);
invoker.attack(mogul);
invoker.attack(mogul);
earthshaker.attack(invoker);
invoker.attack(earthshaker);
mogul.attack(earthshaker);
mogul.attack(earthshaker);
mogul.attack(invoker);
mogul.attack(invoker);
earthshaker.attack(invoker);
mogul.attack(invoker);
shadow.attack(invoker);

Shop.buyItem(shadow, healSalv);
Shop.buyItem(shadow, healSalv);
Shop.buyItem(shadow, healSalv);
Shop.buyItem(shadow, healSalv);
Shop.buyItem(shadow, gauntletsOfStrength);
Shop.buyItem(shadow, gauntletsOfStrength);
Shop.buyItem(shadow, gauntletsOfStrength);
Shop.buyItem(shadow, gauntletsOfStrength);
Shop.buyItem(shadow, gauntletsOfStrength);
Shop.buyItem(shadow, gauntletsOfStrength);

shadow.attack(mogul);
shadow.attack(mogul);
earthshaker.attack(mogul);
shadow.attack(mogul);
shadow.attack(mogul);
shadow.attack(earthshaker);
shadow.attack(earthshaker);
earthshaker.attack(shadow);
shadow.attack(earthshaker);
earthshaker.attack(shadow);
shadow.attack(earthshaker);


//console.log(invoker);
//console.log(mogul);
//console.log(earthshaker);
//console.log(shadow);