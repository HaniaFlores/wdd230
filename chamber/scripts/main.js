
//Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


// set current date
const currentDate = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(currentDate);
document.getElementById("currentDate").innerHTML = fullDate;

// set last modification
document.getElementById("lastModified").textContent = document.lastModified;

// set current year in footer
document.querySelector('#currentYear').textContent = currentDate.getFullYear();

//banner display
let day = currentDate.getDay();
if (day == 0 || day > 5) {
    document.querySelector(".banner").style.display = "none";
};

//close banner
document.querySelector(".banner_close").addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
});