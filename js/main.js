//  menu list
const openMenu = document.querySelector(".bar")
const menu = document.querySelector(".nav-links")
const toggleIcon = document.querySelectorAll(".bar svg")

openMenu.addEventListener("click", ()=>{
  menu.classList.toggle("show-menu")
  menu.classList.toggle("animate__fadeInLeft");
  toggleIcon.forEach(icon =>{
    icon.classList.contains("hide") ? icon.classList.remove("hide") : icon.classList.add("hide")
  })
})

// Testimonials Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  effect: "slide",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// favicon
const favicon = document.createElement("link")
favicon.rel = "shortcut icon";
favicon.href = "../assets/imgs/hotel.ico"
favicon.type = "image/x-icon";

document.head.appendChild(favicon)