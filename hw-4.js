for (let hi = 0; hi < 2; hi++) {
  console.log('Привет');
}

let num1 = 1;
while (num1 <= 5) {
  console.log(num1);
  num1++;
}

num2 = 7;
do {
  console.log(num2);
  num2++;
} while (num2 <= 22);

const obj = {
  Коля: '200',
  Вася: '300',
  Петя: '400',
};
for (let info in obj) {
  console.log(`"${info}" — зарплата "${obj[info]}" долларов.`);
}

let n = 1000;
let num = 0;
while (n / 2 >= 50) {
  n /= 2;
  num++;
}
console.log(num);

let numFriday = 3;
do {
  console.log(
    `Сегодня пятница, ${numFriday}-е число. Необходимо подготовить отчет.`
  );
  numFriday += 7;
} while (numFriday <= 31);

let k = 100;
let iterations = 0;
while (k - 7 >= 0) {
  k -= 7;
  iterations++;
}
console.log(iterations);

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
for (let el in months) {
  console.log(`${Number(el) + 1} - ${months[el]}`);
}

const book = {
  название: 'Harry Potter',
  автор: 'Joanne Rowling',
  'год издания': 1997,
  жанр: 'fantasy',
};
for (let infoBook in book) {
  console.log(`${infoBook}: ${book[infoBook]}`);
}

const randomNumbers = [4, 56, 71, 0, 15, -5, 1, 90, 154, 75];
let minNumber = randomNumbers[0];
for (let index = 1; index < randomNumbers.length; index++) {
  if (randomNumbers[index] < minNumber) {
    minNumber = randomNumbers[index];
  }
}
console.log(minNumber);
