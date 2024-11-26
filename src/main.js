// counter.js
let count = 0;

function updateDisplay() {
  document.getElementById("count-display").textContent = count;
}

function setCount(newCount) {
  count = newCount;
  updateDisplay();
}
