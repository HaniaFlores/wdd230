//Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// set current date
let currentDate = new Date();

// set last modification
document.getElementById("lastModified").textContent = document.lastModified;

// set current year in footer
document.querySelector('#currentYear').textContent = currentDate.getFullYear();