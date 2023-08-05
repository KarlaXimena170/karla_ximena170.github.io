
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const offset = currentIndex * -100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Cambiar automáticamente de diapositiva cada 3 segundos
setInterval(nextSlide, 3000);


