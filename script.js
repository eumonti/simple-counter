let count = 0;
let counter = document.getElementById("counter");

console.log(window.event);

document.addEventListener("touchstart", () => {
  count++;
  counter.innerHTML = count;
  if (count >= 50) {
    counter.style.fontSize = "100px";
    counter.style.color = "red";
    counter.innerHTML = "Fine!";
  }
});
