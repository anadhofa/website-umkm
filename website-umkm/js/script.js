const promoButton = document.querySelector("#promoButton");
const hoursCard = document.querySelector("#hoursCard");
const telephone = document.querySelector("#telephone");

if (promoButton) {
  promoButton.addEventListener("click", () => {
    promoButton.textContent = "Promo: Beli 2 diskon 10%";
    console.log("Promo Cangkir Jeda berhasil ditampilkan.");
  });
}

if (hoursCard) {
  hoursCard.addEventListener("click", () => {
    hoursCard.textContent = "Jam Buka: Senin–Jumat, 08.00–22.00 WIB.";
    console.log("Jam buka berhasil ditampilkan.");
  });
}

if (telephone) {
  telephone.addEventListener("click", () => {
    telephone.textContent = "Telepon: +62 858 1522 5340";
    console.log("Nomor telepon berhasil ditampilkan.");
  });
}