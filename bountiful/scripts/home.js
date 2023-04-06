/* ----------------- SLIDES ----------------- */
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
  clearInterval(slideInterval);
  showSlide((currentSlide - 1 + slides.length) % slides.length);
  slideInterval = setInterval(nextSlide, 3000);
});

nextButton.addEventListener("click", function() {
  clearInterval(slideInterval);
  showSlide((currentSlide + 1) % slides.length);
  slideInterval = setInterval(nextSlide, 3000);
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

/* ----------------- WEATHER API --------------  */
// select HTML elements in the document
const currentWeather = document.querySelector(".currentWeather");
const currentTemp = document.createElement("p");
const weatherIcon = document.createElement("img");
const captionDesc = document.createElement("h2");
const humidity = document.createElement("p");
const city = document.createElement("p");

const url = "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=17ccaf32d4483c10570e9b853463c2b4&units=imperial";


/* Current Weather */
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;C</strong>`;
  currentTemp.classList.add("temperature");

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  

  // Capitalize each word of the weather description
  const words = desc.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  const description = words.join(" ");


  // Display the results in the web
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", description);
  weatherIcon.setAttribute("loading", "lazy");
  weatherIcon.classList.add("weather-icon");
  captionDesc.innerHTML = `<strong>${description}</strong>`;
  captionDesc.classList.add("weather-condition");
  humidity.textContent = `Humidity ${weatherData.main.humidity}%`;
  humidity.classList.add("humidity");
  city.innerHTML = `&#x1F30E; Carlsbad, California`;
  city.classList.add("location");

  currentWeather.appendChild(weatherIcon);
  currentWeather.appendChild(captionDesc);
  currentWeather.appendChild(currentTemp);
  currentWeather.appendChild(city);
  currentWeather.appendChild(humidity);

}

apiFetch();
