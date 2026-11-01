"use strict";

console.log("P09 JavaScript aktif");
const produkUmkm = [
  {
    nama: "Coffee Mint",
    kategori: "Coffee",
    harga: 25000,
    stok: 12,
    unggulan: true,
    deskripsi: "Kopi dengan perpaduan mint yang menenangkan.",
  },
  {
    nama: "Cold Coffee Mint",
    kategori: "Cold",
    harga: 25000,
    stok: 4,
    unggulan: true,
    deskripsi: "Kopi dingin dengan perpaduan mint yang menyegarkan.",
  },
  {
    nama: "Kopi Tubruk Signature",
    kategori: "Coffee",
    harga: 45000,
    stok: 10,
    unggulan: true,
    deskripsi: "Kopi tubruk dengan cita rasa khas.",
  },
  {
    nama: "Affogato Coffee",
    kategori: "Coffee",
    harga: 28000,
    stok: 0,
    unggulan: false,
    deskripsi: "Kopi dengan perpaduan es krim yang lembut.",
  },
  {
    nama: "Caramel Macchiato",
    kategori: "Coffee",
    harga: 30000,
    stok: 8,
    unggulan: false,
    deskripsi: "Kopi susu dengan rasa karamel yang manis.",
  },
  {
    nama: "Strawberry Latte",
    kategori: "Latte",
    harga: 27000,
    stok: 5,
    unggulan: false,
    deskripsi: "Kopi susu dengan rasa stroberi yang lezat.",
  },
];

console.table(produkUmkm);
const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});
console.log(formatRupiah.format(produkUmkm[0].harga));
function statusStok(stok) {
  if (stok === 0) {
    return { label: "Habis", className: "empty" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}
function labelKategori(kategori) {
  switch (kategori) {
    case "Cold":
      return "Minuman dingin";
    case "Coffee":
      return "Kopi pilihan";
    case "Latte":
      return "Racikan latte";
    default:
      return "Produk UMKM";
  }
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");

  if (!grid || !ringkasan) {
    return;
  }

  let jumlahTersedia = 0;
  let markup = "";

  for (const produk of produkUmkm) {
    const status = statusStok(produk.stok);
    const kategori = labelKategori(produk.kategori);
    const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
    const labelUnggulan = produk.unggulan
      ? '<span class="product-badge">Unggulan</span>'
      : "";

    if (produk.stok > 0) {
      jumlahTersedia = jumlahTersedia + 1;
    }

    markup += `
      <article class="js-product-card">
        ${labelUnggulan}
        <h3>${produk.nama}</h3>
        <p>${kategori}</p>
        <p>${produk.deskripsi}</p>
        <p class="price">${formatRupiah.format(produk.harga)}</p>
        <span class="stock-badge ${status.className}">${status.label}</span>
        <p>${labelAksi}</p>
      </article>
    `;
  }

  grid.innerHTML = markup;
  ringkasan.textContent = `${jumlahTersedia} produk tersedia dari ${produkUmkm.length} data.`;
}

document.addEventListener("DOMContentLoaded", renderProduk);

// Salah: assignment, bukan perbandingan.
if (produk.stok = 0) {
  console.log("Habis");
}

// Benar: perbandingan strict.
if (produk.stok === 0) {
  console.log("Habis");
}