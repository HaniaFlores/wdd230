var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval;

function showSlide(slideIndex) {
  if (slideIndex < 0 || slideIndex >= slides.length) {
    return;
  }
  
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Show the selected slide
  slides[slideIndex].classList.add("active");
  currentSlide = slideIndex;
}

function nextSlide() {
  var nextSlideIndex = (currentSlide + 1) % slides.length;
  showSlide(nextSlideIndex);
}

// Show the first slide
showSlide(0);

// Add event listeners to navigation buttons
var prevButton = document.querySelector("#prevBtn");
var nextButton = document.querySelector("#nextBtn");

prevButton.addEventListener("click", function() {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", function() {
  showSlide(currentSlide + 1);
});

// Autoplay functionality
slideInterval = setInterval(nextSlide, 3000);

// Pause autoplay when user hovers over the slider
var slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", function() {
  clearInterval(slideInterval);
});

slider.addEventListener("mouseleave", function() {
  slideInterval = setInterval(nextSlide, 3000);
});