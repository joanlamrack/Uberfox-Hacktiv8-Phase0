function groupAnimals(animals) {
  var output=[];
  var comparator="";
  for(var value of animals.map(x => x[0]).sort()){
  	if(value !== comparator){
      output.push(value);
      comparator = value;
    }
  }
  return output.map(x => new Array(animals.filter(animal => animal[0]===x)));
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]