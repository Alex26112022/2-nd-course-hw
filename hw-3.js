let password = '1234';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неправильно');
}

let c = 0;
let res = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(res);
c = 10;
res = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(res);
c = -3;
res = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(res);
c = 2;
res = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(res);

let num1 = 50;
let num2 = 200;
console.log(num1 > 100 || num2 > 100 ? 'Верно' : 'Неверно');

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let monthNumber = 12;
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log('зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('осень');
    break;
  default:
    console.log('Номер месяца больше 12, программа не выполняется');
}

let userNumber = Number(prompt('Пожалуйста, введите любое число'));
if (!isNaN(userNumber)) {
  if (userNumber % 2 === 0) {
    alert('Число четное');
  } else {
    alert('Число нечетное');
  }
} else {
  alert('Введено не число!');
}

let clientOS = 0;
if (clientOS === 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
  console.log('Установите версию приложения для Android по ссылке');
}

clientOS = 0;
let clientDeviceYear = 2015;
let liteVersion = clientDeviceYear < 2015 ? 'облегченную ' : '';
let typeDevice = '';
if (clientOS === 0) {
  typeDevice = 'iOS';
} else if (clientOS === 1) {
  typeDevice = 'Android';
}
if (typeDevice) {
  console.log(
    `Установите ${liteVersion}версию приложения для ${typeDevice} по ссылке`
  );
}
