class Kapal {
    constructor(nama, jenis, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    infoKapal() {
        return `Kapal ${this.nama} adalah jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
    }
    latihanKapal() {
        return `${this.nama} sedang melakukan latihan navigasi.`;
    }
    periksaKeberangkatan() {
        return `${this.nama} siap untuk berangkat.`;
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasPenumpang) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasPenumpang = kapasitasPenumpang;
    }

    infoKapal() {
        return `${super.infoKapal()} memuat Kapasitas penumpang sebanyak: ${this.kapasitasPenumpang}.`;
    }
}

class InfoTiket extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahTiket) {
        super(nama, jenis, panjang, lebar);
        this.kapasitas = kapasitas;
        this.jumlahTiket = jumlahTiket;
    }

    cekTiketTersedia() {
        return this.jumlahTiket > 0 ? "Tiket tersedia." : "Tiket tidak tersedia.";
    }
    cekTiketTidakTersedia() {
        return this.jumlahTiket > 0 ? "Tiket tidak tersedia." : "Tiket tidak tersedia.";
    }

    pesanTiket(jumlah) {
        if (this.jumlahTiket >= jumlah) {
            this.jumlahTiket -= jumlah;
            return `${jumlah} tiket telah dipesan. Sisa tiket: ${this.jumlahTiket}.`;
        } else {
            return "Jumlah tiket yang diminta melebihi ketersediaan.";
        }
    }

    infoKapal() {
        return `${super.infoKapal()} Memiliki kapasitas: ${this.kapasitas}, Jumlah tiket yang tersedia: ${this.jumlahTiket}.`;
    }
}

class KapalKargo extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitasKargo) {
        super(nama, jenis, panjang, lebar);
        this.kapasitasKargo = kapasitasKargo;
    }

    infoKapal() {
        return `${super.infoKapal()} Memuat kapasitas kargo sebanyak: ${this.kapasitasKargo} ton.`;
    }

    muatKargo(jumlah) {
        return `${this.nama} sedang memuat ${jumlah} ton kargo.`;
    }
}

class KapalPerang extends Kapal {
    constructor(nama, jenis, panjang, lebar, jenisPersenjataan) {
        super(nama, jenis, panjang, lebar);
        this.jenisPersenjataan = jenisPersenjataan;
    }

    infoKapal() {
        return `${super.infoKapal()} Dikenal dengan persenjataan: ${this.jenisPersenjataan}.`;
    }

    siagaPerang() {
        return `${this.nama} dalam keadaan siaga perang!`;
    }
}

const kapal1 = new KapalPenumpang("Kapal laut milik Nadila", "kapal", 120, 30, 500);
console.log(kapal1.infoKapal());
console.log(kapal1.latihanKapal());
console.log(kapal1.periksaKeberangkatan());

const infoTiketKapal = new InfoTiket("Kapal Wisata", "Pesiar", 100, 150, 40, 50);
console.log(infoTiketKapal.infoKapal());
console.log(infoTiketKapal.cekTiketTersedia());
console.log(infoTiketKapal.cekTiketTidakTersedia());
console.log(infoTiketKapal.pesanTiket(10));

const kapalKargo = new KapalKargo("Kapal Kargo Jokowi", "Kapal Kargo", 200, 50, 1000);
console.log(kapalKargo.infoKapal());
console.log(kapalKargo.muatKargo(500));

const kapalPerang = new KapalPerang("Kapal Perang Prabowo", "Kapal Perang", 250, 60, "Rudal dan Torpedo");
console.log(kapalPerang.infoKapal());
console.log(kapalPerang.siagaPerang());
