const timer = () => {
  const daysBlock = document.querySelector(".timer__days");
  const hoursBlock = document.querySelector(".timer__hours");
  const minutesBlock = document.querySelector(".timer__minutes");
  const secondsBlock = document.querySelector(".timer__seconds");

  let interval;

  const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if ((value > 100) & (value < 20)) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
  };

  const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date("2 june 2024").getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    // const hours = date.getHours()
    // const minutes = date.getMinutes()
    // const seconds = date.getSeconds()
    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor(timeRemaining / 60) % 60;
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days < 10 ? "0" + days : days;
    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;

    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    secondsBlock.nextElementSibling.textContent = numWord(seconds, [ "Секунда", "Секунды", "Секунд", ]);
    minutesBlock.nextElementSibling.textContent = numWord(minutes, [ "Минута", "Минуты", "Минут", ]);
    hoursBlock.nextElementSibling.textContent = numWord(hours, [ "Час", "Часа", "Часов", ]);
    daysBlock.nextElementSibling.textContent = numWord(days, [ "День", "Дня", "Дней", ]);

    if (timeRemaining <= 0) {
      clearInterval(interval);
      daysBlock.textContent = "00";
      hoursBlock.textContent = "00";
      minutesBlock.textContent = "00";
      secondsBlock.textContent = "00";

      daysBlock.style.color = "#8400ff";
      hoursBlock.style.color = "#8400ff";
      minutesBlock.style.color = "#8400ff";
      secondsBlock.style.color = "#8400ff";
    }
  };

  updateTimer();

  interval = setInterval(updateTimer, 500);

  // const date = new Date().getTime()
  // const dateDeadline = new Date('1 june 2024').getTime()

  // const numWord = (value, words) => {
  //     value = Math.abs(value) % 100
  //     const lastNum = value % 10

  //     if (value > 100 & value < 20) return words[2]
  //     if (lastNum > 1 && lastNum < 5) return words[1]
  //     if (lastNum === 1) return words[0]

  //     return words[2]
  // }

  // ['секунда', 'секунды', 'секунд']
  // console.log(numWord(25, ['секунда', 'секунды', 'секунд', '']));
};

timer();
