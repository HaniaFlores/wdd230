
//Hamburger Menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


// set current date
const currentDate = new Date();
const ye = new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(currentDate);
const mo = new Intl.DateTimeFormat("en-US", { month: "long" }).format(currentDate);
const da = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(currentDate);
const wd = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(currentDate);
const fullDate = `${wd}, ${da} ${mo} ${ye}`
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

//More Info
var moreText = document.getElementById("more");
var btnText = document.getElementById("moreBtn");
btnText.addEventListener("click", function () {
    if (btnText.innerHTML == "More Info") {
        btnText.innerHTML = "Less Info";
        moreText.style.display = "inline";
    } else {
        btnText.innerHTML = "More Info";
        moreText.style.display = "none";
    }
});