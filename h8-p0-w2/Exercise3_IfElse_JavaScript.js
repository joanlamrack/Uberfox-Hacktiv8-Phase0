var nama = "";
var peran = "";

if (nama === "")
	console.log("Nama harus diisi!");
else if (peran === "")
	console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
else
	console.log("Selamat datang di Dunia Proxytia, " +nama);
	if (peran === "Ksatria")
		console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
	else if (peran === "Tabib")
		console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
	else if (peran === "Penyihir")
		console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");