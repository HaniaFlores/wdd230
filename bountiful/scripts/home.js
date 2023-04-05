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
const currentTemp = document.querySelector(".temperature");
const weatherIcon = document.querySelector(".weather-icon");
const captionDesc = document.querySelector("#weather-condition");
const humidity = document.querySelector("#percentage");

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
  captionDesc.innerHTML = `<strong>${description}</strong>`;
  humidity.textContent = weatherData.main.humidity;
}

/* Forescast */
/* const forecast1 = document.querySelector("#day1");
const forecast2 = document.querySelector("#day2");
const forecast3 = document.querySelector("#day3"); */

/* const url2 = "https://api.openweathermap.org/data/2.5/weather?id=5334223&appid=17ccaf32d4483c10570e9b853463c2b4&units=imperial"; */

/* const today = new Date();
let currentTime = Math.floor(today.getTime() / 1000);

async function apiFetch2() {
  for (let i = 1; i <= 3; i++) {

    const startTime = currentTime;
    const endTime = currentTime + 86400;
    currentTime = endTime; 


    try {
      const response = await fetch(`${url}&start=${startTime}&end=${endTime}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults2(data.list);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function displayResults2(weatherData) {

  weatherData.forEach((i)) => {
    let timestamp = weatherData[i].dt;
    let date = new Date(timestamp * 1000);
    let day = getWeekday(date.getDay());
    let temp = weatherData[i].main.temp;
    let description = weatherData[i].weather[0].description;
    let iconCode = weatherData[i].weather[0].icon;
    const container = document.querySelector("div.forecastContainer");

    let div = document.createElement("div");
    let weekday = document.createElement("p");
    let icon = document.createElement("img");
    let forecast = document.createElement("p");

    div.appendChild(weekday);
    container.appendChild(div);
  }
}

function getWeekday(number) {
  switch (number) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
} */
apiFetch();
/* apiFetch2(); */