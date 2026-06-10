let a = 10;
alert(a);
a = 20;
alert(a);

let iphoneReleaseDate = 2007;
alert(`Год выпуска первого iPhone: ${iphoneReleaseDate}`);

let authorJS = 'Брендан Эйх';
alert(`Имя создателя языка JavaScript: ${authorJS}`);

a = 10;
let b = 2;
alert(`10 + 2 = ${a + b}`);
alert(`10 - 2 = ${a - b}`);
alert(`10 * 2 = ${a * b}`);
alert(`10 / 2 = ${a / b}`);

let result = 2 ** 5;
alert(result);

a = 9;
b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

let user = {
  name: 'Alex',
  age: 35,
  isAdmin: true,
};

let userName = prompt('Назовите Ваше имя...');
alert(`Привет, ${userName}!`);

let number = Number(prompt('Загадайте число...'));
let doubleNumber = number * 2;
alert(doubleNumber);
let bigNumber = doubleNumber + 10;
alert(bigNumber);
let smallNumber = bigNumber / 2;
alert(smallNumber);
let finalResult = smallNumber - number;
alert(`Ответ равен ${finalResult}`);
