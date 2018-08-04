# **DOTA MINI**

> ⏰ Time Estimation: ~120 mins

### Summary
Buatlah sebuah permainan DOTA sederhana dimana terdapat Hero dimana 1 Hero bisa memiliki lebih dari 1 Item. Item dapat dibeli di Shop.

### RELEASE 0
Terdapat 4 Hero yaitu dimana hero memiliki:
 - basic health: 200
 - basic mana: 75
 - basic money: 500

  1. Axe
     * Name: Mogul Khan The Axe
     * type: strength
     * damage: 70
     * strength: 70
     * intelligence: 20
     * agility: 30

  2. Earthshaker
     * Name: Raigor Stonehoof The Earthshaker
     * type: strength
     * damage: 85
     * strength: 80
     * intelligence: 30
     * agility: 20

  3. Invoker
     * Name: Invoker
     * type: Intelligence
     * damage: 60
     * strength: 30
     * intelligence: 90
     * agility: 20

  4. Shadow Fiend
     * Name: Nevermore The Shadow Fiend
     * type: Agility
     * damage: 55
     * strength: 45
     * intelligence: 25
     * agility: 77

**HEALTH** untuk Hero dengan type Strength akan ditambahkan dengan 562.5, type Intelegence akan ditambahkan dengan 405 dan type Agility akan ditambahkan 450 dari basic health Hero


Buatlah class yang diperlukan dan tentukan juga keterkaitan antar class nya !


### RELEASE 1
Setiap Hero bisa membeli banyak Item. Item yang disediakan oleh Shop hanya 3 Item yaitu:

  1. Iron Branch
     * Nama Item: Iron Branch
     * Price: 50
     * bonus: {strength: 1, agility: 2, intelligence: 1}

  2. Healing Salve
     * Nama Item: Healing Salve
     * Price: 110

  3. Gauntlets Of Strength
     * Nama Item: Gauntlets Of Strength
     * price: 135
     * bonus: {strength: 3}


### RELEASE 2
Buatlah method untuk membeli item pada class Hero yang memiliki satu parameter berupa object_item.
Dimana:
  - jika uang yang dimiliki oleh hero tersebut tidak cukup akan menampilkan pesan "Sorry your balance is not sufficient to buy this item"
  - jika uang cukup maka cek jika item yang dibeli memiliki property bonus maka property hero akan bertambah sesuai dengan key bonus pada item tersebut.

    Contoh:
     1. Axe membeli Iron Branch, maka:
        - Strength Axe bertambah 1: 70+1 => 71
        - Agility Axe bertambah 2: 30+2 => 32
        - Intelegence Axe bertambah 1: 20+1 => 21

     2. Earthshaker membeli Gauntlets Of Strength, maka strength dari Earthshaker akan bertambah 3 menjadi 83, dst.

  - jika uang cukup maka tambahkan nama item yang berhasil dibeli pada property kumpulan item pada Hero dan uang dari hero tersebut harus berkurang


### RELEASE 3
Setelah itu buat Class Shop dimana di class Shop memiliki method untuk membeli item dengan parameter hero dan nama item

contoh test Case
```javascript
Shop.buyItem([parameter_hero], [nama_item])
```

dengan mengakses test case di atas, maka method buyItem pada hero akan otomatis terpanggil


### RELEASE 4
Buatlah method attack dimana hero yang sedang diakses dapat menyerang hero lainnya

contoh test Case
```javascript
namaObjectHero.attack([parameter_hero])
```

Dimana:
 - Jika health dari hero penyerang lebih kecil atau sama dengan 0 maka munculkan pesan "YOU [nama_hero] ALREADY DIED! YOU CANNOT ATTACK"
 - Jika health dari hero yang diserang lebih kecil atau sama dengan 0 maka munculkan pesan "[nama_hero] already died"
 - Health dari hero yang diserang akan berkurang sesuai dengan damage dari hero penyerang ditambahkan strength dari hero penyerang.
 - Jika hero melakukan attack maka tampilkan pesan
 "[hero_penyerang] attack [hero_yangDiserang] with damage [damage_hero_penyerang+strength_hero_pernyerang]
   Current Health [hero_yangDiserang] is [health_hero_yangDiserang]"
 - Jika health hero yang diserang telah 0 maka tampilkan pesan "You killed [hero_yang_diserang]" dan uang hero penyerang akan bertambah 1000
 - Jika hero yang diserang memiliki item `Healing Salve` maka secara otomatis health dari hero yang diserang akan bertambah 400 dan item `Healing Salve` dari keranjang item hero yang diserang akan dihapus. Dan Munculkan pesan "[hero_yang_diserang] his/her(self) using Healing Salve.
Current health is is [health_hero_yangDiserang]"

**NOTE**
Health hero yang diserang tidak boleh minus
