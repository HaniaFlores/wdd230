const form = document.querySelector('#drink-form');

// populate the fruit select inputs with options from the JSON data source
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(fruits => {
    const options = fruits.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`);
    const selectInputs = document.querySelectorAll('select');
      selectInputs.forEach((selectInput) => {
          /* selectInput.style.fontSize = "30px"; */
          selectInput.innerHTML = options.join('');
      });
  });

