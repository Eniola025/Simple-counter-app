// Counter state variable
let counter = 0;

// DOM elements
const counterValue = document.getElementById('counter-value');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

// Update display
function updateDisplay() {
  counterValue.textContent = counter;
}

// Increase action
function increment() {
  counter++;
  updateDisplay();
}

// Decrease action
function decrease() {
  counter--;
  updateDisplay();
}

// Reset action
function reset() {
  counter = 0;
  updateDisplay();
}

// Button click event listeners
increaseBtn.addEventListener('click', increment);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
