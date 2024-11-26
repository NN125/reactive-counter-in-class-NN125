// counter.js
let count = 0;

function updateDisplay() {
  document.getElementById("count-display").textContent = count;
}

function setCount(newCount) {
  count = newCount;
  updateDisplay();
}

document.getElementById("increment").addEventListener("click", () => {
  setCount(count + 1);
});

document.getElementById("decrement").addEventListener("click", () => {
  setCount(count - 1);
});

document.getElementById("reset").addEventListener("click", () => {
  setCount(0);
});
