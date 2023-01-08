// Select the HTML element to manipulate
update = new Date(document.lastModified)
theTime = update.toLocaleString()

//Get the date and print it.
const fulldate = `${theTime}`;
document.querySelector("#date").textContent = fulldate;
