const form = document.querySelector('#drink-form');
const output = document.querySelector('#output');
const submit = document.querySelector("#submitBtn");

// populate the fruit select inputs with options from the JSON data source
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(fruits => {
    const options = fruits.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`);
    const selectInputs = document.querySelectorAll('select');
      selectInputs.forEach((selectInput) => {
          selectInput.innerHTML = options.join('');
      });
  });