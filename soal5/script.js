const produk = [
    { nama: "Laptop", kategori: "Elektronik", harga: 15000000 },
    { nama: "Smartphone", kategori: "Elektronik", harga: 8000000 },
    { nama: "Sepeda", kategori: "Olahraga", harga: 3000000 }
];

const tbody = document.querySelector("#productTable tbody");

function displayProducts() {
    tbody.innerHTML = '';
    
    produk.forEach(function(item) {
        const row = document.createElement("tr");
        const namaTd = document.createElement("td");
        namaTd.textContent = item.nama;
        const kategoriTd = document.createElement("td");
        kategoriTd.textContent = item.kategori;
        const hargaTd = document.createElement("td");
        hargaTd.textContent = `Rp${item.harga.toLocaleString()}`;
        row.appendChild(namaTd);
        row.appendChild(kategoriTd);
        row.appendChild(hargaTd);
        tbody.appendChild(row);
    });
}

function addProduct() {
    const namaProduk = document.getElementById('nama-produk').value;
    const kategoriProduk = document.getElementById('kategori-produk').value;
    const hargaProduk = document.getElementById('harga-produk').value;
    if (namaProduk === '' || kategoriProduk === '' || hargaProduk === '') {
        alert("Semua kolom harus diisi!");
        return;
    }
    // Tambahkan produk baru ke array
    produk.push({
        nama: namaProduk,
        kategori: kategoriProduk,
        harga: parseFloat(hargaProduk)
    });

    document.getElementById('nama-produk').value = '';
    document.getElementById('kategori-produk').value = '';
    document.getElementById('harga-produk').value = '';

    displayProducts();
}

displayProducts();