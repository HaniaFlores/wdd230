/* const form = document.querySelector('#drink-form');
const output = document.querySelector('#output');
const submit = document.querySelector("#submitBtn");


fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(fruits => {
    const options = fruits.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`);
    const selectInputs = document.querySelectorAll('select');
      selectInputs.forEach((selectInput) => {
          selectInput.innerHTML = options.join('');
      });
  }); */

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
fruit1DefaultOption.textContent = 'Please select a fruit';

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
fruit2DefaultOption.textContent = 'Please select a fruit';

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
fruit3DefaultOption.textContent = 'Please select a fruit';

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

