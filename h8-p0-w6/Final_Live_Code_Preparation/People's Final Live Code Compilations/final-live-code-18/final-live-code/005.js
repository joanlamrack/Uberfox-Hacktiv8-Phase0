/**
Simple Cards Fusion
-------------------
# Intro
Yu-Gi-Oh! Trading Card Game adalah permainan kartu koleksi Jepang yang dibuat
dan dipublikasikan oleh Konami.
Di dalam permainan ini terdapat 'Fusion Cards' yang menggabungkan 2 monster
menjadi 1 monster yang lebih kuat!

# Task
Diberikan array of objects `fusionCards` di dalam function `simpleCardsFusion` yang
berisi nama-nama monster dan monster apa saja yang dibutuhkan untuk penggabungan.
Tugas kalian adalah implementasikan function `simpleCardsFusion` untuk
mencari nama monster hasil gabungan dari input kalian (`str`).

# NOTES
- Input pasti berisi 2 monster
- Input terbalik masih akan menghasilkan monster yang sama
    ex: 'Faith Bird+Skull Red Bird' SAMA DENGAN 'Skull Red Bird+Faith Bird'
- Kembalikan 'Fusion failed' ketika gabungan monster kalian tidak ditemukan di `fusionCards`

# RULES
  - Dilarang menggunakan built-in function .filter(), .find()

*/

function simpleCardsFusion (str) {
  const fusionCards = [
    { name: 'Cyber Twin Dragon', card1: 'Cyber Dragon', card2: 'Cyber Dragon' },
    { name: 'Gaia The Dragon Champion', card1: 'Curse of Dragon', card2: 'Gaia The Fierce Knight' },
    { name: 'Meteor B. Dragon', card1: 'Red-Eyes B. Dragon', card2: 'Meteor Dragon' },
    { name: 'Crimson Sunbird', card1: 'Faith Bird', card2: 'Skull Red Bird' },
    { name: 'Flame Swordsman', card1: 'Masaki the Legendary Swordsman', card2: 'Flame Manipulator' }
  ];

  let strSplit = str.split('+')
  //console.log(strSplit)
  let monster;
  
  for(var a = 0; a < fusionCards.length; a++){
    if(fusionCards[a].card2 === strSplit[0] && fusionCards[a].card1 === strSplit[1]){
      monster = fusionCards[a].name
    } else if(fusionCards[a].card1 === strSplit[0] && fusionCards[a].card2 === strSplit[1]){
      monster = fusionCards[a].name
    } 
  }
  
  if(monster === undefined){
    return 'Fusion failed'
  } else {
    return monster
  }

}

console.log(simpleCardsFusion('Flame Manipulator+Masaki the Legendary Swordsman'));
// Flame Swordsman

console.log(simpleCardsFusion('Gaia The Fierce Knight+Curse of Dragon'));
// Gaia the Dragon Champion

console.log(simpleCardsFusion('Faith Bird+Skull Red Bird'));
// Crimson Sunbird

console.log(simpleCardsFusion('Red-Eyes B. Dragon+Meteor Dragon'));
// Meteor B. Dragon

console.log(simpleCardsFusion('Cyber Dragon+Cyber Dragon'));
// Cyber Twin Dragon

console.log(simpleCardsFusion('Dark Magician+Dark Magician'));
// Fusion failed

console.log(simpleCardsFusion('Cyber Dragon+Dark Magician'));
// Fusion failed
