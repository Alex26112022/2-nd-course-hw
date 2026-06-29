const min = (num1, num2) => (num1 < num2 ? num1 : num2);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'Число четное';
  } else return 'Число нечетное';
};

const displaySquare = (num) => {
  console.log(num * num);
};

const getSquare = (num) => num * num;

const checkAge = (age) => {
  let message;

  if (age < 0) {
    message = 'Вы ввели неправильное значение';
  } else if (age <= 12) {
    message = 'Привет, друг!';
  } else message = 'Добро пожаловать!';

  return message;
};
alert(checkAge(prompt('Сколько вам лет?')));

const validateNumbers = (num1, num2) => {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    return 'Одно или оба значения не являются числом';
  } else return num1 * num2;
};

const toCube = (num) => {
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Переданный параметр не является числом';
  } else return `${num} в кубе равняется ${num * num * num}`;
};

for (let start = 0; start <= 10; start++) {
  alert(toCube(Number(prompt('Введите число...'))));
}

const getArea = function () {
  let area = Math.PI * this.radius * this.radius;
  return area;
};

const getPerimeter = function () {
  let perimeter = 2 * Math.PI * this.radius;
  return perimeter;
};

const circle1 = {
  radius: 5,
  getArea: getArea,
  getPerimeter: getPerimeter,
};

const circle2 = {
  radius: 10,
  getArea: getArea,
  getPerimeter: getPerimeter,
};
