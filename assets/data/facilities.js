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
    img: "../../assets/imgs/facitities/spa.jpg",
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
          <img src="${card.img}" alt="${card.title} picture">
          <h1>${card.title}</h1>
  `;
  cards.appendChild(cardEl);
});
