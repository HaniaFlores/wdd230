// select HTML elements in the document
const currentTemp = document.querySelector("#degrees");
const weatherIcon = document.querySelector("#weather_icon");
const captionDesc = document.querySelector("#weather_text");
const windSpeed = document.querySelector("#ws_number");
const windChill = document.querySelector("#wc_number");

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=25.667&lon=-100.400&units=metric&appid=17ccaf32d4483c10570e9b853463c2b4";
const url = "https://api.openweathermap.org/data/2.5/weather?q=Barrow&units=metric&appid=17ccaf32d4483c10570e9b853463c2b4";

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
    const temperature = weatherData.main.temp;
    currentTemp.innerHTML = `<strong>${temperature.toFixed(0)} &deg;C</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const windspeed = weatherData.wind.speed;
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
    captionDesc.textContent = description;
    windSpeed.textContent = `${windspeed} km/h`;
    windChill.innerHTML = getWindChill(temperature, windspeed);
}

function getWindChill(temperature, windspeed) {
    const tempF = (temperature * (9 / 5) + 32);
    const wsMph = windspeed / 1.609;

    if (tempF <= 50 && wsMph > 3.0) {
        const wcF = 35.74 + 0.6215 * (tempF) - 35.75 * (wsMph ** 0.16) + 0.4275 * (tempF) * (wsMph ** 0.16);
        const wcC = ((wcF - 32) * 5) / 9;
        return `${Math.round(wcC)} &deg;C`;
    } else {
        return "N/A";
    }
}

apiFetch();