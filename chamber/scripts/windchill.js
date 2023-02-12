//get the two input values of temperature and wind speed.
const temperatureHtml = document.querySelector("#degrees").textContent;
const windSpeedHtml = document.querySelector("#ws_number").textContent;

const tempC = parseFloat(GetNumbers(temperatureHtml));
const wsKmh = parseFloat(GetNumbers(windSpeedHtml));

function GetNumbers(element) {
    let list = element.split(" ");
    return list[0];
}
//check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill and
//either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
let tempF = (tempC * (9/5)) + 32;
let wsMph = wsKmh / 1.609;

//tempF = 30;
//wsMph = 8;

if (tempF <= 50 && wsMph > 3.0) {
    wcF = 35.74 + 0.6215*(tempF) - 35.75*(wsMph**0.16) + 0.4275*(tempF)*(wsMph**0.16);
    wcC = ((wcF-32) * 5) / 9;
    document.querySelector("#wc_number").textContent = Math.round(wcC) + " °C";
} else {
    document.querySelector("#wc_number").textContent = "N/A";
}
