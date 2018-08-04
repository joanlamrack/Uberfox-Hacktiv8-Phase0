let imports = require("./index.js");

let Animal = imports.Animal;
let Superpower = imports.SuperPower;
let Chicken = imports.Chicken;
let Frog = imports.Frog;

let chicken = new Chicken(2, true);
console.log(chicken.superpower.summon_chicken_god());

let frog = new Frog(4, false);
console.log(frog.superpower.forever_young());