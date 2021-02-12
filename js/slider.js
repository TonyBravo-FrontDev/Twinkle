let sliderCards = document.querySelectorAll(".slider-text");

let slideIndex = 0;
showSlides();

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides() {
  let i;
  for (i = 0; i < sliderCards.length; i++) {
    sliderCards[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliderCards.length) {
    slideIndex = 1;
  }
  sliderCards[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}
