const facilities = [
  {
    title: "the gym",
    img: "../imgs/facitities/gym.jpg",
  },
  {
    title: "poolside bar",
    img: "../imgs/facitities/poolside.jpg",
  },
  {
    title: "the spa",
    img: "../imgs/facitities/spa.jfif",
  },
  {
    title: "swimming pool",
    img: "../imgs/facitities/swimming.jpg",
  },
  {
    title: " restaurant",
    img: "../imgs/facitities/restaurant.jpg",
  },
  {
    title: "laundry",
    img: "../imgs/facitities/laundry.jpg",
  },
];

// facilities pages display cards in html page
const cards = document.querySelector(".cards");
facilities.forEach((card) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
          <img src="../assets/imgs/facitities/gym.jpg" alt="img">
          <h1>the gym</h1>
  `;
  cards.appendChild(cardEl);
});
