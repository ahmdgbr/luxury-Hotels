const tastimonials = [
  {
    name: "Mr. Taher",
    address: "Baxter, UK",
    text: "Calm, Serene, Retro – What a way to relax and enjoy",
  },
  {
    name: "Sheena",
    address: "France",
    text: "It was an amazing time. helpful, respectful & upgrade my room to suite with all decorations for my honeymoon, thank you sunrise, thank you ",
  },
  {
    name: "Mr. Ahmed Gabr",
    address: "Egypt",
    text: "it was a great journey, the hotel was perfect on all meanings such as location, stuff, the sea  and the reef were amazing and the food was very delicious. All were perfect and the hospitality generous",
  },
  {
    name: "Mrs Farida",
    address: "Egypt",
    text: "Out of this world exceptional experience!! Unforgettable luxurious visit ❤",
  },
  {
    name: "Mrs. Asmaa",
    address: "Saudi Arabia",
    text: "The staff were helpful and friendly, hotel facilities were good, we liked the variety of restaurants inside the hotel",
  },
];

// Testimonials slider data
const sliderWrapper = document.querySelector(
  ".testimonials-swiper .swiper-wrapper"
);
tastimonials.forEach((testimonial) => {
  const { name, address, text } = testimonial;
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
      <div class="qoute">${text}</div>
      <div class="auhtor">${name}, ${address}</div>`;
  sliderWrapper.appendChild(slide);
});
