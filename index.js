// Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);
