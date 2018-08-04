function convertToCoin(money){
	let output = [];
	const coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];

	for(let coin of coins){
		while(money>=coin){
			output.push(coin);
			money-=coin;
		}
	}
	return output;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));