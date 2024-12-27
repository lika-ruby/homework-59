const galleryElement = document.querySelector(".gallery");

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  const firstSlideElement = galleryElement.firstElementChild;
  if (e.code === "ArrowRight") {
    galleryElement.append(firstSlideElement);
  }
  const lastSlideElement = galleryElement.lastElementChild;
  if (e.code === "ArrowLeft") {
    galleryElement.prepend(lastSlideElement);
  }
});

const page = document.querySelector("body");
const boxes = document.querySelector("#boxes");
const amount = document.querySelector("#number");
const render = document.querySelector(`[data-action="render"]`);
const destroy = document.querySelector(`[data-action="destroy"]`);

let size = 30;
const createBoxes = function (amount) {
  const min = 0;
  const max = 255;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const color = document.createElement("div");
    color.style.width = `${size}px`;
    color.style.height = `${size}px`;
    color.style.backgroundColor = `rgb(
      ${Math.round(Math.random() * (max - min) + min)},
      ${Math.round(Math.random() * (max - min) + min)},
      ${Math.round(Math.random() * (max - min) + min)}
    )`;
    boxes.append(color);
  }
};

render.addEventListener("click", () => {
  createBoxes(amount.value);
});

const destroyBoxes = function () {
  boxes.innerHTML = "";
  size = 30;
};

destroy.addEventListener("click", () => {
  destroyBoxes();
});
