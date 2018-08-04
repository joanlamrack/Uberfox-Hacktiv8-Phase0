
//Mendapatkan dengan ID
let ids = document.getElementById("fill-me");
ids.innerHTML = "HALO !";

//Class (bisa multi object)
let classes = document.getElementsByClassName("change-all-of-me");
for(let key in classes){
	classes[key].innerHTML = "Halo Juga"; 
}

//tag name seperti h1 h2 video dst (multi object)
let tag  = document.getElementsByTagName("h2");
for(let key in tag){
	tag[key].innerHTML = "Apa Kabar!"; 
}