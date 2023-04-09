import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timeInputPickerEl = document.querySelector('#datetime-picker');
const dataBtnStartEl = document.querySelector('button[data-start]');
const body = document.querySelector('body');
const timerContainerEl = document.querySelector('.timer');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

body.style.backgroundColor = '#f8d24e';
timerContainerEl.style.display = 'flex';
timerContainerEl.style.fontSize = '24px';
timerContainerEl.style.fontWeight = '700';
timerContainerEl.style.maxWidth = '400px';

timeInputPickerEl.style.fontWeight = '700';
timeInputPickerEl.style.fontSize = 'large';
timeInputPickerEl.style.marginBottom = '50px';

dataBtnStartEl.style.padding = '10px 35px';
dataBtnStartEl.style.fontSize = '16px';
dataBtnStartEl.style.fontWeight = '700';
dataBtnStartEl.style.border = 'none';
dataBtnStartEl.style.outline = 'none';
dataBtnStartEl.style.borderRadius = '8px';
dataBtnStartEl.style.cursor = 'pointer';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      dataBtnStartEl.disabled = true;
    } 
      dataBtnStartEl.disabled = false;
    
  },
};

flatpickr(timeInputPickerEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

dataBtnStartEl.addEventListener('click', () => {
  let timerId = setInterval(() => {
    let countdown = new Date(timeInputPickerEl.value) - new Date();
    dataBtnStartEl.disabled = true;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      daysEl.textContent = addLeadingZero(timeObject.days);
      hoursEl.textContent = addLeadingZero(timeObject.hours);
      minutesEl.textContent = addLeadingZero(timeObject.minutes);
      secondsEl.textContent = addLeadingZero(timeObject.seconds);
      
    } else {
      Notiflix.Notify.success('Countdown finished');
      clearInterval(timerId);
    }
  }, 1000);
});