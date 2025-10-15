// ============================
// 🌿 DATA MENU (Coffee & Snacks)
// ============================
const menuDetails = {
  // ☕ COFFEE
  espresso: {
    title: "Espresso",
    image: "image/espresso.jpg",
    info: [
      "Kopi murni dengan cita rasa kuat dan pekat.",
      "Diseduh menggunakan tekanan tinggi tanpa campuran.",
      "Cocok untuk penikmat kopi sejati yang menyukai rasa bold."
    ]
  },
  latte: {
    title: "Latte",
    image: "image/latte.jpg",
    info: [
      "Campuran espresso dan susu steamed yang creamy.",
      "Memiliki lapisan foam tipis di bagian atas.",
      "Favorit bagi pecinta rasa lembut dan seimbang."
    ]
  },
  cappuccino: {
    title: "Cappuccino",
    image: "image/capucino.jpg",
    info: [
      "Perpaduan espresso, susu steamed, dan busa foam tebal.",
      "Rasa seimbang antara pahit dan lembut.",
      "Cocok diminum pagi hari untuk energi ekstra."
    ]
  },
  mocha: {
    title: "Mocha",
    image: "image/mocha.jpg",
    info: [
      "Kombinasi espresso, susu, dan cokelat murni.",
      "Rasa manis berpadu dengan aroma kopi pekat.",
      "Pilihan ideal untuk kamu yang suka kopi dengan sentuhan coklat."
    ]
  },
  americano: {
    title: "Americano",
    image: "image/americano.jpg",
    info: [
      "Espresso yang dicampur air panas.",
      "Rasa ringan dengan aroma kopi yang kuat.",
      "Sering dinikmati tanpa tambahan gula atau susu."
    ]
  },
  matcha: {
    title: "Matcha Latte",
    image: "image/matcha.jpg",
    info: [
      "Perpaduan bubuk matcha Jepang dan susu steamed.",
      "Rasa earthy yang khas dengan aroma lembut.",
      "Disajikan panas atau dingin sesuai selera."
    ]
  },
  coldbrew: {
    title: "Cold Brew",
    image: "image/coldbrew.jpg",
    info: [
      "Kopi diseduh dengan air dingin selama 12–18 jam.",
      "Rasa lebih halus dan tidak terlalu asam.",
      "Cocok dinikmati dingin untuk hari yang panas."
    ]
  },

  // 🍪 SNACKS
  brownies: {
    title: "Brownies",
    image: "image/Brownies.jpg",
    info: [
      "Cokelat brownies lembut dengan aroma butter.",
      "Tekstur fudgy dan manis seimbang.",
      "Paling nikmat disajikan dengan kopi espresso."
    ]
  },
  cookies: {
    title: "Cookies",
    image: "image/Cookies.jpg",
    info: [
      "Kue renyah dengan taburan chocochips premium.",
      "Rasa gurih mentega dan manis cokelat berpadu sempurna.",
      "Cocok sebagai teman ngobrol di sore hari."
    ]
  },
  croissant: {
    title: "Croissant",
    image: "image/Croissant.jpg",
    info: [
      "Roti Prancis berlapis dengan tekstur flaky dan lembut.",
      "Dibuat dari adonan mentega berkualitas tinggi.",
      "Lezat disantap bersama kopi latte atau teh hangat."
    ]
  },
  fries: {
    title: "French Fries",
    image: "image/FrenchFries.jpg",
    info: [
      "Kentang goreng renyah di luar, lembut di dalam.",
      "Dibumbui ringan dengan garam dan herbs.",
      "Cocok untuk camilan santai atau teman minum kopi."
    ]
  },
  onionrings: {
    title: "Onion Rings",
    image: "image/Onionrings.jpg",
    info: [
      "Irisan bawang besar dilapisi tepung crispy.",
      "Rasa gurih dan sedikit manis alami.",
      "Paling enak dengan saus keju atau mayones."
    ]
  },
  nugget: {
    title: "Nugget",
    image: "image/Nugget.jpg",
    info: [
      "Potongan ayam dibalut tepung renyah.",
      "Dimasak hingga keemasan dan gurih.",
      "Sajikan hangat untuk rasa terbaik."
    ]
  }
};

// ============================
// ☕ FUNGSI MODAL (POPUP MENU)
// ============================
function openModal(menuKey) {
  const modal = document.getElementById("menuModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalInfo = document.getElementById("modalInfo");

  const item = menuDetails[menuKey];
  if (!item) {
    alert("Detail menu tidak ditemukan.");
    return;
  }

  modalImg.src = item.image;
  modalTitle.textContent = item.title;

  modalInfo.innerHTML = "";
  item.info.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    modalInfo.appendChild(li);
  });

  modal.style.display = "flex";
}

// Tutup modal
function closeModal() {
  document.getElementById("menuModal").style.display = "none";
}

// Tutup modal jika klik area luar
window.onclick = function (e) {
  const modal = document.getElementById("menuModal");
  if (e.target === modal) modal.style.display = "none";
};

// ============================
// 🧭 NAVIGASI MENU (KIRI/ KANAN)
// ============================
function scrollMenu(direction) {
  const coffee = document.getElementById("coffeeMenu");
  const snacks = document.getElementById("snackMenu");

  const visibleMenu = coffee.style.display !== "none" ? coffee : snacks;
  visibleMenu.scrollBy({
    left: direction * 300,
    behavior: "smooth"
  });
}

// ============================
// 🍪 GANTI KATEGORI MENU
// ============================
function showCategory(category) {
  const coffeeMenu = document.getElementById("coffeeMenu");
  const snackMenu = document.getElementById("snackMenu");
  const btnCoffee = document.getElementById("btnCoffee");
  const btnSnacks = document.getElementById("btnSnacks");

  if (category === "coffee") {
    coffeeMenu.style.display = "flex";
    snackMenu.style.display = "none";
    btnCoffee.classList.add("active");
    btnSnacks.classList.remove("active");
  } else {
    coffeeMenu.style.display = "none";
    snackMenu.style.display = "flex";
    btnCoffee.classList.remove("active");
    btnSnacks.classList.add("active");
  }
}
