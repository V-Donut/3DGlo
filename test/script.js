'use strict';

const page = document.getElementById('page'); 
const dayWeeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const now = new Date();
const hours = now.getHours();
const dayWeek = now.getDay();
const time = now.toLocaleTimeString('en');
const newYear = new Date('1 january 2023').getTime();
const dateNow = now.getTime();
let timeRemaining = (newYear - dateNow) / 1000;
let restDays = Math.floor(timeRemaining / 60 / 60 / 24);

const declension = function (num, form1, form2, form3) {
  return num % 10 == 1 && num % 100 != 11 ? form1 : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? form2 : form3;
};

let dayTimes;
if (hours >= 0 && hours < 6) {
  dayTimes = 'Доброй ночи!';
} else if (hours >= 6 && hours < 12) {
  dayTimes = 'Доброе утро!';
} else if (hours >= 12 && hours < 18) {
  dayTimes = 'Добрый день!';
} else {
  dayTimes = 'Добрый вечер!';
}


page.innerHTML = dayTimes + '<br>' + 'Сегодня: ' + dayWeeks[dayWeek] + '<br>' + 'Текущее время: ' + time + '<br>' + 'До нового года осталось ' + restDays + ' ' + declension(restDays, 'день', 'дня', 'дней');
