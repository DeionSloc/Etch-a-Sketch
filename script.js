const container = document.getElementsByClassName(".container");
const square = document.createElement("div");
square.classList.add("square");
square.textContent = "This is a sqaure"
container.appendChild(square);
square.innerHTML = "Square"