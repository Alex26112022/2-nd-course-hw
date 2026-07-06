const numbers = [1, 5, 4, 10, 0, 3];
for (let item of numbers) {
  console.log(item);
  if (item == 10) break;
}

console.log(numbers.indexOf(4));

const numbers2 = [1, 3, 5, 10, 20];
console.log(numbers2.join(' '));

const bigArr = [];
for (let i = 0; i < 3; i++) {
  bigArr[i] = [];
  for (let j = 0; j < 3; j++) {
    bigArr[i][j] = 1;
  }
}
console.log(bigArr);

const arr2 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  arr2.push(2);
}
console.log(arr2);

const arr3 = [9, 8, 7, 'a', 6, 5];
const resArr = arr3.sort().filter((item) => item !== 'a');
console.log(resArr);

const targetNumbers = [9, 8, 7, 6, 5];
const userNumber = Number(prompt('Введите число!'));
targetNumbers.includes(userNumber) ? alert('Угадал') : alert('Не угадал');

const words = 'abcdef';
console.log(words.split('').reverse().join(''));

const arr4 = [
  [1, 2, 3],
  [4, 5, 6],
];
const resArr4 = [...arr4[0], ...arr4[1]];
console.log(resArr4);

const arr5 = [4, 6, 1, 7, 2, 3, 0, 5, 8, 9];
for (let el = 0; el < arr5.length - 1; el++) {
  console.log(arr5[el] + arr5[el + 1]);
}

const getSquareNumbers = (rawArray) => {
  resultArray = rawArray.map((el) => el * el);
  return resultArray;
};
console.log(getSquareNumbers([1, 4, 8]));

const getLengthNumbers = (rawArray) => {
  resultArray = rawArray.map((el) => el.length);
  return resultArray;
};
console.log(getLengthNumbers(['hello', 'world', '!']));

const getnegativeNumbers = (rawArray) => {
  resultArray = rawArray.filter((el) => el < 0);
  return resultArray;
};
console.log(getnegativeNumbers([3, -4, -8]));

const arr6 = [];
for (let el = 0; el < 10; el++) {
  arr6.push(Math.floor(Math.random() * 10));
}
const arr7 = arr6.filter((item) => item % 2 == 0);
console.log(arr6);
console.log(arr7);

const arr8 = [];
for (let el = 0; el < 7; el++) {
  arr8.push(Math.floor(Math.random() * 10));
}
const sum = arr8.reduce((a, b) => a + b);
const avg = sum / arr8.length;
console.log(arr8);
console.log(avg);
