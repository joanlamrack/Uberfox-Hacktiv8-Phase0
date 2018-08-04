"use strict";

const Calculator = require("./calculator.js");

//Keliling lingkaran (2 pi radius) dimana radius = 4
let calcCircumference = new Calculator(2);
console.log(calcCircumference.multiply(calcCircumference.pi).multiply(4).getResult());

//Luas Lingkaran (pi r^2) dimana radius = 5
let calcArea = new Calculator(5);
console.log(calcArea.square().multiply(calcArea.pi).getResult());

//Luas Lingkaran (pi r^2) dimana diameter = 7
let calcAreaDiameter = new Calculator(7);
console.log(calcAreaDiameter.divide(2).square().multiply(calcArea.pi).getResult());

//Akar pangkat 4 dari 16 adalah 2
let calcRootPower = new Calculator(16);
console.log(calcRootPower.squareRoot(4).getResult());

// execute function on calculator.js in here