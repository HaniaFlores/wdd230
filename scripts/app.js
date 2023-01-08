// Select the HTML element to manipulate
update = new Date(document.lastModified)
theTime = update.toLocaleString()

const fulldate = `${theTime}`;
document.querySelector("#date").textContent = fulldate;