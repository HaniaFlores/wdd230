async function getBusinessData() {
    const response = await fetch("json/data.json");
    const data = await response.json();
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.cards");
    businesses.forEach(business => {
        // Create elements to add to the div.cards element
        let card = document.createElement("div");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        // Build the image logo by setting all the relevant attribute
        logo.setAttribute("src", business.logo);
        logo.setAttribute("alt", `${business.name} logo image`);
        logo.setAttribute("loading", "lazy");

        //Attributes
        website.setAttribute("href", business.website);
        website.setAttribute("target", "_blank");

        // Build the h2 content out to show the address, phone number and website.
        address.textContent = business.address;
        phone.textContent = business.phoneNumber;
        website.textContent = "Website";

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getBusinessData();