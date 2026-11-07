"use strict";

console.log("P09 JavaScript aktif");
const produkUmkm = [
  { nama: "Coffee Mint", kategori: "Coffee", harga: 25000, stok: 12, unggulan: true, deskripsi: "Kopi dengan perpaduan mint yang menenangkan." },
  { nama: "Cold Coffee Mint", kategori: "Cold", harga: 25000, stok: 4, unggulan: true, deskripsi: "Kopi dingin dengan perpaduan mint yang menyegarkan." },
  { nama: "Kopi Tubruk Signature", kategori: "Coffee", harga: 45000, stok: 10, unggulan: true, deskripsi: "Kopi tubruk dengan cita rasa khas." },
  { nama: "Affogato Coffee", kategori: "Coffee", harga: 28000, stok: 0, unggulan: false, deskripsi: "Kopi dengan perpaduan es krim yang lembut." },
  { nama: "Caramel Macchiato", kategori: "Coffee", harga: 30000, stok: 8, unggulan: false, deskripsi: "Kopi susu dengan rasa karamel yang manis." },
  { nama: "Strawberry Latte", kategori: "Latte", harga: 27000, stok: 5, unggulan: false, deskripsi: "Kopi susu dengan rasa stroberi yang lezat." },
];

function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

console.log(formatRupiah(produkUmkm[0].harga));
function statusStok(stok) {
  if (stok <= 0) {
    return { label: "Habis", className: "warning" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}
function buatKartuProduk(produk) {
  const status = statusStok(produk.stok);

  return `
    <article class="js-product-card">
      <h3>${produk.nama}</h3>
      <p class="category-note">${produk.kategori}</p>
      <p class="price">${formatRupiah(produk.harga)}</p>
      <span class="stock-badge ${status.className}">${status.label}</span>
    </article>
  `;
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");
  const unggulan = document.querySelector("#produk-unggulan");

  if (!grid || !ringkasan || !unggulan) {
    console.warn("Target render produk belum lengkap.");
    return;
  }

  const produkTersedia = produkUmkm.filter((produk) => produk.stok > 0);
  const produkUnggulan = produkUmkm.find(
    (produk) => produk.unggulan === true && produk.stok > 0,
  );
  const markupProduk = produkTersedia.map(buatKartuProduk).join("");

  console.log("Hasil filter produk tersedia:", produkTersedia);
  console.log("Hasil find produk unggulan:", produkUnggulan);
  produkTersedia.forEach((produk) => {
    const status = statusStok(produk.stok);
    console.log(`${produk.nama}: ${status.label} (${produk.stok} stok)`);
  });
  console.table(produkTersedia);

  grid.innerHTML = markupProduk;
  ringkasan.textContent = `${produkTersedia.length} produk tersedia dari ${produkUmkm.length} data.`;
  unggulan.textContent = produkUnggulan
    ? `Produk unggulan: ${produkUnggulan.nama}`
    : "Belum ada produk unggulan.";
}

document.addEventListener("DOMContentLoaded", renderProduk);
