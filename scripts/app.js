// Select the HTML element to manipulate
update = new Date(document.lastModified)
theMonth = update.getMonth() + 1
theDate = update.getDate()
theYear = update.getFullYear()
theHour = update.getHours()
theMinutes = update.getMinutes()
theSeconds = update.getSeconds()

const fulldate = console.log(`${theMonth}/${theDate}/${theYear} ${theHour}:${theMinutes}:${theSeconds}`);
document.querySelector("#date").textContent = fulldate;