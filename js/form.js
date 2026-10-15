const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

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
