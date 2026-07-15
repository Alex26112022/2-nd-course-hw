// Задание 1
const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 },
];

console.log(people.sort((el1, el2) => el1['age'] - el2['age']));

// Задание 2
function isPositive(el) {
  return el >= 0;
}
function isMale(el) {
  return el['gender'] === 'male';
}
function filter(arr, cb) {
  const resultArr = [];
  for (el of arr) {
    if (cb(el)) {
      resultArr.push(el);
    }
  }
  return resultArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' },
];

console.log(filter(people, isMale));

// Задание 3
const nowDayInfo = () => {
  const toDay = new Date();
  const viewDate = setInterval(() => {
    console.log(toDay);
  }, 3000);
  setTimeout(() => {
    clearInterval(viewDate);
    console.log('30 секунд прошло');
  }, 30 * 1000);
};

// Задание 4
function delayForSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));
