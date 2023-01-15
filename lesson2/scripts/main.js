// Select the HTML element to manipulate
update = new Date(document.lastModified)
const d = new Date();
theTime = update.toLocaleString()

//Get the date and print it.
const fulldate = `${theTime}`;
document.querySelector("#date").textContent = fulldate;

const currentYear = d.getFullYear();
theYear = `${currentYear}`;
document.querySelector("#currentYear").textContent = theYear;