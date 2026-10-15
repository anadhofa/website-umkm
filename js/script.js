const promoButton = document.querySelector("#promoButton");
const hoursCard = document.querySelector("#hoursCard");
const telephone = document.querySelector("#telephone");
const navigation = document.querySelector(".nav");

if (navigation) {
  const navigationLinks = navigation.querySelector("ul");
  const brand = navigation.querySelector(".brand");

  if (navigationLinks && brand) {
    const toggle = document.createElement("button");

    toggle.className = "nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "menu-navigasi");
    navigationLinks.id = "menu-navigasi";
    navigation.classList.add("has-toggle");
    brand.insertAdjacentElement("afterend", toggle);

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
      );
      navigation.classList.toggle("is-open", isOpen);
    });

    navigationLinks.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        navigation.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Buka menu navigasi");
      }
    });
  }
}

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