const refs = {

  timerId: document.querySelector("#timer-1"),
  timerDay:  document.querySelector("span[data-value='days']"),
  timerHours: document.querySelector("span[data-value='hours']"),
  timerMinutes:  document.querySelector("span[data-value='mins']"),
  timerSeconds: document.querySelector("span[data-value='secs']"),
};


class CountdownTimer {
  constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    
    }
  
  setInProgress = setInterval(() => {
    const currentDate = Date.now();
      const time = this.targetDate - currentDate;
    this.getTimeComponents(time);
    this.finishTimer(time);
  }, 1000);
    
  getTimeComponents(time) {
    const timerDay = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const timerHours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const timerMinutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const timerSeconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.timerDay.textContent = `${timerDay}`;
    refs.timerHours.textContent = `${timerHours}`;
    refs.timerMinutes.textContent = `${timerMinutes}`;
    refs.timerSeconds.textContent = `${timerSeconds}`;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  finishTimer(time) {
    if (time <= 0) {
      clearInterval(this.setInProgress);
      refs. timerId.textContent = "Sales is over";
    }
  }
};


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
});