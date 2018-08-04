function beli(uang, obj){

	return new Promise((resolve, reject)=>{
		console.log(`Saya pergi membeli ${obj.item}`);
		setTimeout(function(){
			let kembalian = uang - obj.harga;
			if (kembalian >= 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
				resolve({
					uang: kembalian
				});
			}else{
				reject({
					output:`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`
				});
			}
		}, obj.waktu);

	});


  
}

module.exports = beli;