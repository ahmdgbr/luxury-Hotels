const facilities = [
  {
    title: "the gym",
    img: "../../assets/imgs/facitities/gym.jpg",
  },
  {
    title: "poolside bar",
    img: "../../assets/imgs/facitities/poolside.jpg",
  },
  {
    title: "the spa",
    img: "../../assets/imgs/facitities/spa.jfif",
  },
  {
    title: "swimming pool",
    img: "../../assets/imgs/facitities/swimming.jpg",
  },
  {
    title: " restaurant",
    img: "../../assets/imgs/facitities/restaurant.jpg",
  },
  {
    title: "laundry",
    img: "../../assets/imgs/facitities/laundry.jpg",
  },
];

// facilities pages display cards in html page
const cards = document.querySelector(".cards");
facilities.forEach((card) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
          <img src="${card.img}" alt="img">
          <h1>the gym</h1>
  `;
  cards.appendChild(cardEl);
});
