import { Notify } from 'notiflix/build/notiflix-notify-aio';

const body = document.querySelector('body');
const formEl = document.querySelector('form.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

body.style.backgroundColor = 'orange';
formEl.addEventListener('click', onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();

  let valueDelay = Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount = Number(amountEl.value);

  for (let i = 1; i <= amount; i += 1) {
    let delay = valueDelay + step * i;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};

