document.querySelector("footer").innerHTML = faFooter;
document.querySelector("header").innerHTML = faHeader;
document.querySelector(".first-p").innerHTML = faFirstP;
document.querySelector(".sec-p").innerHTML = faSecP;

window.onload = function () {
  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-nav");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    speed: 700,
    autoplay: {
      delay: 5000,
    },
  });
};

function toggleSwitcher() {
  var i = document.getElementById("language");
  if (i.style.left === "-189px") {
    i.style.left = "0px";
  } else {
    i.style.left = "-189px";
  }
}

function translateToPersian() {
  document.querySelector("html").lang = "fa";
  let paragraphs = document.querySelectorAll("p");
  for (p of paragraphs) {
    p.dir = "rtl";
  }
  document.querySelector("footer").innerHTML = faFooter;
  document.querySelector("header").innerHTML = faHeader;
  document.querySelector(".first-p")
    ? (document.querySelector(".first-p").innerHTML = faFirstP)
    : null;

  document.querySelector(".sec-p")
    ? (document.querySelector(".sec-p").innerHTML = faSecP)
    : null;

  document.querySelector(".header-swiper")
    ? (document.querySelector(".header-swiper").innerHTML = faSwiperHeader)
    : null;

  document.querySelector(".price-list-header")
    ? (document.querySelector(".price-list-header").innerHTML =
        faPriceListHeader)
    : null;

  document.querySelector("table")
    ? (document.querySelector("table").dir = "rtl")
    : null;

  document.querySelector("table thead")
    ? (document.querySelector("table thead").innerHTML = faThead)
    : null;

  if (document.querySelector("table")) {
    document.querySelector("#tehran").textContent = faTehran;
    document.querySelector("#yazd").textContent = faYazd;
    document.querySelector("#esfehan").textContent = faEsfehan;
    document.querySelector("#fars").textContent = faFars;
    document.querySelector("#hamedan").textContent = faHamedan;
    document.querySelector("#qom").textContent = faQom;
    document.querySelector("#markazi").textContent = faMarkazi;
    document.querySelector("#chaharMahalBakhtiari").textContent =
      faChaharMahalBakhtiari;
  }
}

function translateToUK() {
  document.querySelector("html").lang = "en";
  let paragraphs = document.querySelectorAll("p");
  for (p of paragraphs) {
    p.dir = "ltr";
  }
  document.querySelector("footer").innerHTML = enFooter;
  document.querySelector("header").innerHTML = enHeader;

  document.querySelector(".first-p")
    ? (document.querySelector(".first-p").innerHTML = enFirstP)
    : null;

  document.querySelector(".sec-p")
    ? (document.querySelector(".sec-p").innerHTML = enSecP)
    : null;

  document.querySelector(".header-swiper")
    ? (document.querySelector(".header-swiper").innerHTML = enSwiperHeader)
    : null;

  document.querySelector(".price-list-header")
    ? (document.querySelector(".price-list-header").innerHTML =
        enPriceListHeader)
    : null;

  document.querySelector("table")
    ? (document.querySelector("table").dir = "ltr")
    : null;

  document.querySelector("table thead")
    ? (document.querySelector("table thead").innerHTML = enThead)
    : null;

  if (document.querySelector("table")) {
    document.querySelector("#tehran").textContent = enTehran;
    document.querySelector("#yazd").textContent = enYazd;
    document.querySelector("#esfehan").textContent = enEsfehan;
    document.querySelector("#fars").textContent = enFars;
    document.querySelector("#hamedan").textContent = enHamedan;
    document.querySelector("#qom").textContent = enQom;
    document.querySelector("#markazi").textContent = enMarkazi;
    document.querySelector("#chaharMahalBakhtiari").textContent =
      enChaharMahalBakhtiari;
  }
}
