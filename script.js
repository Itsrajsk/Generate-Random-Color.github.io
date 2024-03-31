let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
  let h1 = document.querySelector("h1");
  h1.innerText = getRandomColor();
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;

  return color;
}
