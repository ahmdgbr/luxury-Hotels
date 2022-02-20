const roomsData = [
  {
    title:"Single room",
    price:147,
    imgs:[
      "../../assets/imgs/rooms/s1.jpg",
      "../../assets/imgs/rooms/s2.jpg",
      "../../assets/imgs/rooms/s3.jpg"
    ]
  },
  {
    title:"double room",
    price:236,
    imgs:[
      "../../assets/imgs/rooms/d1.jpg",
      "../../assets/imgs/rooms/d2.jpg",
      "../../assets/imgs/rooms/d3.jpg"
    ]
  },
  {
    title:"twin room",
    price:486,
    imgs:[
      "../../assets/imgs/rooms/t1.jpg",
      "../../assets/imgs/rooms/t2.jpg",
      "../../assets/imgs/rooms/t3.jpg"
    ]
  }
]


// facilities pages display cards in html page
const rooms = document.querySelector(".rooms");
roomsData.forEach((card) => {
  const cardEl = document.createElement("div");
  const {title, price, imgs} = card
  cardEl.classList.add("room-card");
  cardEl.innerHTML = `
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              ${imgs.map(img =>{
                return `<div data-hash="slide1" class="swiper-slide">
                  <img src=${img} alt=${title}>
                </div>`
              })}
                          </div>
            <div class="swiper-pagination"></div>
          </div>
          <h1 class="room-type">${title}</h1>
          <div class="room-info">
            <a href="#" class="btn">view more details</a>
            <div class="btn">${price}$ avg/night</div>
          </div>
  `;
  rooms.appendChild(cardEl);
});



var RoomsSwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay:true,
  loop:true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
