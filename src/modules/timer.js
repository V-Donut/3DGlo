const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const addZero = (num) => {
    return num.toString().length === 1 ? '0' + num : num;
  };

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    
    if (timeRemaining <= 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = (start) => {
    let getTime = getTimeRemaining();

    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);

    if (start && getTime.timeRemaining > 0) {
      setInterval(updateClock, 1000, false);
    }
  };
  updateClock(true);
};

export default timer;
