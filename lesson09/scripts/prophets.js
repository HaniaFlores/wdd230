const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    /* console.table(data.prophets); */
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // select the output container element
    const cards = document.querySelector("div.cards");
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");

        let bdate = document.createElement("p");
        let bplace = document.createElement("p");

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        bdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        bplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(bdate);
        card.appendChild(bplace);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
}

getProphetData();