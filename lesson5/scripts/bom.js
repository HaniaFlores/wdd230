//Variables
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value == "") {
        alert("There is no input");
        return false;
    }
    let item = document.createElement("li");
    let deleteBtn = document.createElement("button");
    item.innerHTML = input.value;
    deleteBtn.textContent = "X";

    item.appendChild(deleteBtn);
    list.appendChild(item);

    deleteBtn.addEventListener("click", () => {
        list.removeChild(item);
   
    });

    input.focus();
    input.value = ''; 
});

