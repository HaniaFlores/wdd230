async function getBusinessData() {
    const response = await fetch("json/data.json");
    const data = await response.json();
    
    displayBusinesses(data.businesses);
}

const displayBusinesses = function (businesses) {
    const container = document.querySelector("#spot-container");
    
    const list = businesses.filter((business) => {
        return business.membershipLevel === "Gold" || business.membershipLevel === "Silver"
    });

    const randomBusiness = list.sort(() => Math.random() - 0.5)
    
    const selectedBusinesses = randomBusiness.slice(0, 3);

    selectedBusinesses.forEach((business, index) => {

      let section = document.createElement("section");
      section.setAttribute("id", `spot${index + 1}`);
      let logo = document.createElement("img");
      let name = document.createElement("h2");
      let address = document.createElement("p");
      let phoneNumber = document.createElement("p");
      let website = document.createElement("a");

      // Build the logo
      logo.setAttribute("src", business.logo);
      logo.setAttribute("alt", `${business.name} logo.`);
      logo.setAttribute("loading", "lazy");

      // Build the name, address, phone number, and website
      name.textContent = business.name;
      address.textContent = business.address;
      phoneNumber.textContent = business.phoneNumber;
      website.textContent = "Website";

      website.setAttribute("href", business.website);
      website.setAttribute("target", "_blank");

      // Append the elements
      section.appendChild(logo);
      section.appendChild(name);
      section.appendChild(address);
      section.appendChild(phoneNumber);
      section.appendChild(website);

      container.appendChild(section);       
    });

}

getBusinessData();