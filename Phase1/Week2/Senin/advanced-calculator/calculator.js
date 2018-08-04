'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num;
    this.pi = Math.PI;
    return this;
  }

  add (num) {
    this.number+= num;
    return this;
  }

  subtract(num) {
    this.number-=num;
    return this;
  }

  multiply (num) {
    this.number*= num;
    return this;
  }

  divide (num) {
    this.number/=num;
    return this;
  }

  square(num = 2) {
    this.number = Math.pow(this.number,num);
    return this;
  }

  squareRoot(num = 2) {
    this.number = this.square(1/num).getResult();
    return this;
  }

  getResult(){
    return this.number;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
