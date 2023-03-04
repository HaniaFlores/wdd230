
//Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


// set current date
let currentDate = new Date();
let ye = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(currentDate);
let mo = new Intl.DateTimeFormat("en-US", { month: "long" }).format(currentDate);
let da = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(currentDate);
let wd = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currentDate);
let fullDate = `${wd}, ${da} ${mo} ${ye}`
document.getElementById("currentDate").innerHTML = fullDate;

// set last modification
document.getElementById("lastModified").textContent = document.lastModified;

// set current year in footer
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

//banner display
let day = currentDate.getDay();
if (day == 0 || day > 2) {
    document.querySelector(".banner").style.display = "none";
};

//close banner
document.querySelector(".banner_close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
});


/* Last Visit */
// Retrieve the date of the last visit from local storage

let lastVisit = localStorage.getItem("lastVisit");
if (lastVisit == null)
{
  lastVisit = currentDate.getTime();
}

// Calculate the difference between the current date and the last visit in milliseconds
const differenceMs = currentDate.getTime() - lastVisit;

// Convert the difference from milliseconds to days
const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
localStorage.setItem("lastVisit", currentDate.getTime());
localStorage.setItem("daysSinceLastVisit", differenceDays);
document.getElementById("lastVisit").textContent = `Days since last visit: ${differenceDays}`;