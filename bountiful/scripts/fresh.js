const form = document.querySelector('#drink-form');

// create first fruit select element
const fruit1Label = document.createElement('label');
fruit1Label.setAttribute('for', 'fruit1');
fruit1Label.textContent = 'Fruit 1:';

const fruit1Select = document.createElement('select');
fruit1Select.setAttribute('id', 'fruit1');
fruit1Select.setAttribute('name', 'fruit1');
fruit1Select.setAttribute('required', '');

const fruit1DefaultOption = document.createElement('option');
fruit1DefaultOption.setAttribute('value', '');
fruit1DefaultOption.setAttribute('disabled', '');
fruit1DefaultOption.setAttribute('selected', '');
fruit1DefaultOption.textContent = 'Select a fruit';

// create second fruit select element
const fruit2Label = document.createElement('label');
fruit2Label.setAttribute('for', 'fruit2');
fruit2Label.textContent = 'Fruit 2:';

const fruit2Select = document.createElement('select');
fruit2Select.setAttribute('id', 'fruit2');
fruit2Select.setAttribute('name', 'fruit2');
fruit2Select.setAttribute('required', '');

const fruit2DefaultOption = document.createElement('option');
fruit2DefaultOption.setAttribute('value', '');
fruit2DefaultOption.setAttribute('disabled', '');
fruit2DefaultOption.setAttribute('selected', '');
fruit2DefaultOption.textContent = 'Select a fruit';

// create third fruit select element
const fruit3Label = document.createElement('label');
fruit3Label.setAttribute('for', 'fruit3');
fruit3Label.textContent = 'Fruit 3:';

const fruit3Select = document.createElement('select');
fruit3Select.setAttribute('id', 'fruit3');
fruit3Select.setAttribute('name', 'fruit3');
fruit3Select.setAttribute('required', '');

const fruit3DefaultOption = document.createElement('option');
fruit3DefaultOption.setAttribute('value', '');
fruit3DefaultOption.setAttribute('disabled', '');
fruit3DefaultOption.setAttribute('selected', '');
fruit3DefaultOption.textContent = 'Select a fruit';

// add options to the fruit select elements
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(fruits => {
    fruits.forEach(fruit => {
      const option = document.createElement('option');
      option.setAttribute('value', fruit.id);
      option.textContent = fruit.name;

      fruit1Select.appendChild(option.cloneNode(true));
      fruit2Select.appendChild(option.cloneNode(true));
      fruit3Select.appendChild(option.cloneNode(true));
    });
  });

// add elements to the form
form.appendChild(fruit1Label);
form.appendChild(fruit1Select);
fruit1Select.appendChild(fruit1DefaultOption);

form.appendChild(fruit2Label);
form.appendChild(fruit2Select);
fruit2Select.appendChild(fruit2DefaultOption);

form.appendChild(fruit3Label);
form.appendChild(fruit3Select);
fruit3Select.appendChild(fruit3DefaultOption);

const notes = document.createElement('label');
notes.textContent = "Special Instructions";
notes.setAttribute("for", "instructions");
const text = document.createElement("textarea");
text.setAttribute("id", "instructions");
text.setAttribute("name", "instructions");

const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.setAttribute("id", "submitBtn");
submit.textContent = "Send Order";

form.appendChild(notes);
form.appendChild(text);
form.appendChild(submit);

let counter = localStorage.getItem('drinkCounter');
if (!counter) {
  counter = 0;
}

function updateCounter(counter) {
  return parseInt(counter) + 1;
}

/* COUNTER */
submit.addEventListener("click", myFunction => {
  counter = updateCounter(counter);
  localStorage.setItem('drinkCounter', counter);
})

/* ORDER */

/* submit.addEventListener("click", function (event) {
  event.preventDefault(); 
  const firstName = document.querySelector('#first-name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const fruit1 = document.querySelector('#fruit1').value;
  const fruit2 = document.querySelector('#fruit2').value;
  const fruit3 = document.querySelector('#fruit3').value;
  const instructions = document.querySelector('#instructions').value;

 
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();


  fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(fruits => {
      const selectedFruits = fruits.filter(fruit => {
        return fruit.id === fruit1 || fruit.id === fruit2 || fruit.id === fruit3;
      });


      let totalCarbs = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;
      selectedFruits.forEach(fruit => {
        totalCarbs += fruit.nutritions.carbohydrates;
        totalProtein += fruit.nutritionn.protein;
        totalFat += fruit.nutritions.fat;
        totalSugar += fruit.nutritions.sugar;
        totalCalories += fruit.nutritions.calories;
      });


      const outputDiv = document.createElement("div");
      outputDiv.innerHTML = `
        <h2>Order Summary</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Fruits:</strong> ${selectedFruits.map(fruit => fruit.name).join(', ')}</p>
        <p><strong>Special Instructions:</strong> ${instructions}</p>
        <p><strong>Order Date:</strong> ${date} at ${time}</p>
        <h3>Nutritional Information</h3>
        <p><strong>Total Carbohydrates:</strong> ${totalCarbs.toFixed(2)} g</p>
        <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)} g</p>
        <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)} g</p>
        <p><strong>Total Sugar:</strong> ${totalSugar.toFixed(2)} g</p>`;
      
      const main = document.querySelector("main.fresh");
      main.appendChild(outputDiv);
      localStorage.setItem('drinkCounter', parseInt(counter) + 1);
      form.reset();
    })
}); */
