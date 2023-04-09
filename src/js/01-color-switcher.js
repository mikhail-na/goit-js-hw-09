const dataBtnStartEl = document.querySelector('[data-start]');
const dataBtnStopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

dataBtnStartEl.addEventListener('click', onStart);
dataBtnStopEl.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  timerId = setInterval(getBackgroundColor, 1000);
  dataBtnStartEl.disabled = true;
  dataBtnStartEl.disabled = false;
}

function onStop() {
  clearInterval(timerId);
  dataBtnStopEl.disabled = false;
  dataBtnStopEl.disabled = true;
}

function getBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

//* Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}