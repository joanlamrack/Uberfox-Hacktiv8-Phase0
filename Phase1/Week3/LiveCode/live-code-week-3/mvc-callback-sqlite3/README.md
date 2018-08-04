# Movie System

> ⏰ Time Estimation: ~75 mins

Pada challenge kali ini kamu diwajibkan untuk membuat code dalam struktur MVC, menggunakan database SQLite dan package node-sqlite3 / npm sqlite3.

Input akan diterima lewat Terminal kamu dan urutan command WAJIB mengikuti requirement yang disediakan.

## Preparation
Telah disediakan file `package.json` dan `setup.js` untuk membuat *database* dan *table* yang diperlukan. Jadi kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash
npm install
node setup.js
```

Berikut adalah skema dari database yang disediakan:
- `ProductionHouses`
  - `id (INTEGER, PK, AI)`
  - `name_prodHouse (VARCHAR)`
  - `origin_city (VARCHAR)`

- `Movies`
  - `id (INTEGER, PK, AI)`
  - `name (VARCHAR)`
  - `released_year (INTEGER)`
  - `genre (VARCHAR)`,
  - `rating (REAL)`
  - `prodHouseId (INTEGER, FK)`

## Commands
  Perintah yang perlu kamu buat adalah sebagai berikut:
  ```bash
  node index.js prodHouse add [name_prodHouse] [origin_city]
  node index.js movie add [name] [released_year] [genre] [rating] [prodHouseId]
  node index.js movie delete [id]
  node index.js movie showRecommendations
  ```

## Details
- node index.js prodHouse add [name_prodHouse] [origin_city]
  ```
    example:
    node index.js prodHouse add 'Walt Disney Pictures' 'Burbank'

    output:
    'Successfully added a production house with ID: 1'

    NOTE: Untuk menampilkan id dari data yang baru saja ditambahkan, dilarang menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh node-sqlite3
  ```

- node index.js movie add [name] [released_year] [genre] [rating] [prodHouseId]
  ```
    example:
    node index.js movie add 'Cintaku kepentok Sudoku' 2016 comedy 4 1

    output:
    Successfully added a movie with ID: 1

    NOTE:
     - jika rating yang diinput lebih dari 5 atau lebih kecil dibanding 1 maka tampilkan pesan "Invalid rating" dan data tidak boleh masuk ke database.
     - Tampilkan 'Production House not found' jika data prodHouse dengan `id` yang diberikan tidak ditemukan
  ```

- node index.js movie delete [id]
  ```
    example:
    node index.js movie delete 1

    output:
    Successfully deleted an movie with ID: 1

    NOTE:
     - Jika id yang diberikan tidak ada di dalam tabel movie, harus menampilkan 'Data not found'. Untuk menampilkan 'Data not found' dilarang menggunakan query select. Gunakan fungsi/kembalian yang telah disediakan oleh node-sqlite3
  ```
- node index.js movie showRecommendations
  ```
    Tampilkan nama film, genre dan nama production house yang memiliki rating diatas 3 diurut berdasarkan rating tertinggi dengan format
    <no>. <judul>; <genre> (<rating>) by <nama_prodHouse>

    contoh output:
    1. Boggle, The Haunting Anchor; horor (5) by Paramount
    2. Cintaku Kepentok Sudoku; comedy (4) by Pixar
    3. Mr.Callback, I'm in love; thriller (3.5) by DreamWorks Studios
  ```
