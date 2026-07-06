const jsStr = 'js';
console.log(jsStr.toUpperCase());

const filterByPrefix = (rawArray, targetStr) => {
  const newArray = [];
  rawArray.forEach((element) => {
    if (element.toLowerCase().startsWith(targetStr.toLowerCase()))
      newArray.push(element);
  });
  return newArray;
};

const floatNumber = 32.58884;
console.log(Math.floor(floatNumber));
console.log(Math.ceil(floatNumber));
console.log(Math.round(floatNumber));

const nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

const displayRandomNumber = () => {
  console.log(Math.floor(Math.random() * 10) + 1);
};

const getRandomNumbers = (num) => {
  const resultArray = [];
  for (let i = 0; i < Math.floor(num / 2); i++) {
    resultArray.push(Math.floor(Math.random() * (num + 1)));
  }
  return resultArray;
};

const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const today = new Date();
console.log(today);

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate.toLocaleDateString('ru-RU'));

const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const formatDate = (date) => {
  const month = months[date.getMonth()];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const time = date.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return `Дата: ${date.getDate()} ${month} ${date.getFullYear()} — это ${dayOfWeek}.\nВремя: ${time}`;
};
