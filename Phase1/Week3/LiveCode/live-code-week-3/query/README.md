# QUERY

> ⏰ Time Estimation: ~25 mins

## dilarang menggunakan view, sub-query


### Release 0
Buatlah sebuah query untuk menampilkan barang yang memiliki range harga 2.000.000 - 10.000.000 diurutkan berdasarkan harga paling termurah

```
Ilustrasi hasil data
```
| id | Item Name | Price |
| --- | --- | --- |
| 3 | Sepatu Adadidus | 2000000.0 |
| 1 | Gundam | 30 | 5500000.0 |
| 6 | Headphone Shuure | 8215000.0 |


### Release 1
Buatlah sebuah query untuk menampilkan customer yang memiliki umur 19 atau 20 atau 23 atau 30 (**WHERE condition hanya boleh 1 kali menyebutkan nama column**) diurutkan berdasarkan customer paling muda

```
Ilustrasi hasil data
```
| id | Name | Gender | Age | Email | Phone Number |
| --- | --- | --- | --- | --- | --- |
| 5 | Dimitri | male | 20 |dimitri@mail.com | 0832318234 |
| 4 | Devi | female | 23 | devi@mail.com | 08372463421 |
| 10 | Awtian | male | 23 | awtian@mail.com | 08754323493 |
| 3 | Vanessa | female | 30 | vanessa@mail.com | 0832318345 |
| 6 | Rifki | male | 30 | rifki@mail.com | 0822123434 |


### Release 2
Buatlah sebuah query untuk menampilkan id, nama, umur customers beserta jumlah barang yang mereka beli di toko x diurutkan berdasarkan jumlah barang yang dibeli paling banyak

```
Ilustrasi hasil data
```
| id | Name | Umur | Total Quantity |
| --- | --- | --- | --- |
| 6 | Rifki | 30 | 4 |
| 1 | Windi | 29 | 3 |
| 2 | Lisa | 28 | 1 |
| 3 | Vanessa | 30 | 1 |
| 5 | Dimitri | 20 | 1 |
| 9 | Wika | 27 | 1 |


### Release 3
Buatlah query untuk memunculkan kategori umur para customer (**data umur tidak boleh duplikat**) dan diurutkan berdasarkan umur paling muda

```
Ilustrasi hasil data
```

| Age |
| --- |
| 20 |
| 22 |
| 23 |
| 27 |
| 28 |
| 29 |
| 30 |
| 33 |
