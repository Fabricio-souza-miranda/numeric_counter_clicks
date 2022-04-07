let viewfinder = document.querySelector(".viewfinder");
const addButton = document.querySelector(".addButton");
const minusButton = document.querySelector(".minusButton");
const button5X = document.querySelector(".button5X");
const button100X = document.querySelector(".button100X");
const reset = document.querySelector(".reset");

addButton.addEventListener("click", () =>{
   let number = parseInt(viewfinder.textContent) + 1
   viewfinder.textContent = number
})

minusButton.addEventListener("click", () => {
   let number = parseInt(viewfinder.textContent) - 1
   viewfinder.textContent = number
})

button5X.addEventListener("click", () => {
   let number = parseInt(viewfinder.textContent) + 5
   viewfinder.textContent = number
})

button100X.addEventListener("click", () => {
   let number = parseInt(viewfinder.textContent) + 100
   viewfinder.textContent = number
})

reset.addEventListener("click", () => {
   let number = 0
   viewfinder.textContent = number
})