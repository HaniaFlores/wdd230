const cards = document.querySelector("div.cards");

async function getBusinessData() {
    const response = await fetch("json/data.json");
    const data = await response.json();
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    businesses.forEach(business => {
        // Create elements to add to the div.cards element
        let card = document.createElement("div");
        let logo = document.createElement("img");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let membership = document.createElement("p");
        let website = document.createElement("a");

        // Build the image logo by setting all the relevant attribute
        logo.setAttribute("src", business.logo);
        logo.setAttribute("alt", `${business.name} company logo`);
        logo.setAttribute("loading", "lazy");

        //Attributes
        website.setAttribute("href", business.website);
        website.setAttribute("target", "_blank");

        /* Setting Classes */
        address.classList.add("card-address");
        phone.classList.add("card-phone");
        membership.classList.add("card-level");

        // Build the h2 content out to show the address, phone number and website.
        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phoneNumber;
        membership.textContent = `Level: ${business.membershipLevel}`;
        website.textContent = "Website";

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getBusinessData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const menu = document.querySelector(".menu");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	cards.classList.remove("grid");
	cards.classList.add("list");
});