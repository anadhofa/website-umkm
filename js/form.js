const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  preview.textContent = [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `Nomor WhatsApp: ${data.get("Whatsapp")}`,
    `Kategori: ${form.elements.kategori.selectedOptions[0].textContent}`,
    `Metode pesanan: ${data.get("metode_pesanan")}`,
    `Topik: ${data.get("topik")}`,
    `Pesan: ${data.get("pesan")}`,
  ].join("\n");
});
