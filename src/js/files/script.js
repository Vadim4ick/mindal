// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let center = [44.89879772230482, 37.337910959576575];

function init() {
  let map = new ymaps.Map("map-test", {
    center: center,
    zoom: 19,
  });

  let placemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/navigation.svg",
      iconImageSize: [45, 45],
      iconImageOffset: [-19, -44],
    }
  );

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const mainHeader = document.getElementById("main-header");
const header = document.getElementById("header");
const video = document.querySelector(".video-main");
const aboutUs = document.querySelector(".about-us");

if (video) {
  const videoHeight = video.offsetHeight;

  header.style.display = "none";
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > videoHeight - 115) {
      mainHeader.style.display = "none";
      mainHeader.classList.remove("fixed-main");
      header.style.display = "block";
      header.classList.add("fixed");
    } else {
      mainHeader.style.display = "block";
      mainHeader.classList.add("fixed-main");
      header.style.display = "none";
      header.classList.remove("fixed");
    }
  });
}

if (aboutUs) {
  header.style.display = "none";
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 70) {
      mainHeader.style.display = "none";
      mainHeader.classList.remove("fixed-main");
      header.style.display = "block";
      header.classList.add("fixed");
    } else {
      mainHeader.style.display = "block";
      mainHeader.classList.add("fixed-main");
      header.style.display = "none";
      header.classList.remove("fixed");
    }
  });
}

function menuInit2() {
  let iconMenu = document.querySelector(".icon-menu2");
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.documentElement.classList.toggle("menu-open2");
    });
  }
}

menuInit2();
