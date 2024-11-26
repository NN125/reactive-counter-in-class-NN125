let count = 0;

function render() {
  document.getElementById("count-display").textContent = count;
}

function setCount(newCount) {
  count = newCount;
  render();
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

render();
