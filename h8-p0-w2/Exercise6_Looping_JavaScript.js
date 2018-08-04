//1. Melakukan Looping Menggunakan While

var counter = 0;
var coding1= "I love Coding";
var coding2= "I will become fullstack developer";
var separator = " - "

console.log("LOOPING PERTAMA");
while (counter <= 20){
  console.log(counter + separator + coding1);
  counter+=2;
}
console.log("LOOPING KEDUA");
while (counter >=0){
  console.log(counter + separator + coding2);
  counter-=2;
}

//2. Melakukan Looping Menggunakan For

var coding1= "I love Coding";
var coding2= "I will become fullstack developer";
var separator = " - "

console.log("LOOPING PERTAMA");
for(counter=1; counter<=20; counter++){
  console.log(counter + separator + coding1);
}
console.log("LOOPING KEDUA");
for(counter=20; counter>0; counter--){
  console.log(counter + separator + coding2);
}

//3. Angka Ganjil dan Genap

for (counter=1; counter<=100; counter++){
  if (counter % 2 === 0){
    console.log('GENAP');
  } else{
    console.log('GANJIL');
  }
}

for (counter=1; counter<=100; counter+=2){
  if (counter % 3 === 0){
    console.log(counter + " kelipatan 3");
  }
}

for (counter=1; counter<=100; counter+=5){
  if (counter % 6 === 0){
    console.log(counter +" kelipatan 6");
  }
}

for (counter=1; counter<=100; counter+=9){
  if (counter % 10 === 0){
    console.log(counter + " kelipatan 10");
  }
}