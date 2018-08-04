const beli = require("./beli.js");

beli(100000, {item:"permen", harga:5000, waktu:3000}, function(sisaUang){
	beli(sisaUang, {item:"jeruk", harga:10000, waktu:2000}, function(sisaUangDariJeruk){
		beli(sisaUangDariJeruk, {item:"rendang", harga:40000, waktu:5000}, function(sisaUangDariRendang){
			beli(sisaUangDariRendang, {item:"toge", harga: 3000, waktu:1000}, function(sisaUangDariToge){
				beli(sisaUangDariToge, {item:"hape", harga: 42000, waktu:5000}, function(sisaUangTerakhir){
				})
			})
		})
	})
})