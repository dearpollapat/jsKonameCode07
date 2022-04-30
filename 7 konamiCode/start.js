const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let index = 0;

const onkeydown = (e) => {
  e.key === konamiCode[index] ? index++ : (index = 0);

  if (konamiCode.length === index) {
    startSnowing();
  }
};

function run() {
  document.addEventListener("keydown", onkeydown);
}

run();
