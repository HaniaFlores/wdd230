async function getBusinessData() {
  const response = await fetch("json/data.json");
  const data = await response.json();
  const silverAndGoldCompanies = data.businesses.filter(business => {
    return business.membershipLevel === "Silver" || business.membershipLevel === "Gold";
  });
    
  const selectedCompanies = [];
  while (selectedCompanies.length < 3) {
    const randomIndex = Math.floor(Math.random(0, silverAndGoldCompanies.length));
    const selectedCompany = silverAndGoldCompanies[randomIndex];
    if (!selectedCompanies.includes(selectedCompany)) {
      selectedCompanies.push(selectedCompany);
    }
  }
  const company1Name = document.getElementById('company1-name');
  const company1Description = document.getElementById('company1-description');
  const company2Name = document.getElementById('company2-name');
  const company2Description = document.getElementById('company2-description');
  const company3Name = document.getElementById('company3-name');
  const company3Description = document.getElementById('company3-description');
  if (selectedCompanies.length >= 2) {
    company1Name.textContent = selectedCompanies[0].name;
    company1Description.textContent = selectedCompanies[0].description;
    company2Name.textContent = selectedCompanies[1].name;
    company2Description.textContent = selectedCompanies[1].description;
  }
  if (selectedCompanies.length === 3) {
    company3Name.textContent = selectedCompanies[2].name;
    company3Description.textContent = selectedCompanies[2].description;
  }
}

getBusinessData();