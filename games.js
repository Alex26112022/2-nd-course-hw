const playGame = {
  simpleQuiz: simpleQuiz,
  turnTheText: turnTheText,
  simpleArithmetic: simpleArithmetic,
  guessTheNumber: guessTheNumber,
  rockPaperScissors: rockPaperScissors,
  randomColorGenerator: randomColorGenerator,
};

function simpleQuiz() {
  const quiz = [
    {
      question: 'Какой цвет неба?',
      options: ['1. Красный', '2. Синий', '3. Зеленый'],
      correctAnswer: 2,
    },
    {
      question: 'Сколько дней в неделе?',
      options: ['1. Шесть', '2. Семь', '3. Восемь'],
      correctAnswer: 2,
    },
    {
      question: 'Сколько у человека пальцев на одной руке?',
      options: ['1. Четыре', '2. Пять', '3. Шесть'],
      correctAnswer: 2,
    },
  ];

  let countTrue = 0;
  let resultMessage;

  for (let item of quiz) {
    let userAnswer = prompt(
      `${item['question']}\n${item['options'].join('\n')}`
    );
    if (userAnswer === null) return;
    if (Number(userAnswer) === item['correctAnswer']) countTrue++;
  }

  const word = countTrue === 1 ? 'вопрос' : 'вопроса';

  if (countTrue === 0) {
    resultMessage = `Вы не ответили правильно ни на один вопрос!`;
  } else resultMessage = `Вы ответили правильно на ${countTrue} ${word}!`;

  alert(resultMessage);
}

function turnTheText() {
  const userText = prompt('Введите текст!');
  if (!userText) return;
  const result = userText.split('').reverse().join('');
  alert(result);
}

function simpleArithmetic() {
  const calculator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const randomActions = ['+', '-', '*', '/'];
  const isFirstSmall = Math.random() < 0.5;
  const num1 = Math.floor(Math.random() * (isFirstSmall ? 10 : 100) + 1);
  const num2 = Math.floor(Math.random() * (isFirstSmall ? 100 : 10) + 1);
  const numAction = Math.floor(Math.random() * 4);
  const strAction = randomActions[numAction];
  const result = Math.round(calculator[strAction](num1, num2));
  const question = `Решите задачу\n${num1} ${strAction} ${num2}`;

  const userRawData = prompt(question);
  if (userRawData === null) return;

  const userAnswer = Number(userRawData);
  const isCorrect = userAnswer === result;

  alert(`Ответ ${isCorrect ? 'верный' : 'неверный'}!`);
}

function guessTheNumber() {
  const targetNumber = Math.floor(Math.random() * 100 + 1);
  const hints = { true: 'бери больше!', false: 'бери меньше!' };
  while (true) {
    const userRawData = prompt('Угадайте случайное число от 1 до 100!');
    if (userRawData === null) return;

    const userNumber = Number(userRawData);
    if (userNumber === targetNumber) {
      alert('Поздравляю! Вы угадали!');
      return;
    } else if (!Number.isFinite(userNumber)) {
      alert('Введите именно число! Не балуйтесь!!!');
      continue;
    }
    alert(hints[`${targetNumber > userNumber}`]);
  }
}

function rockPaperScissors() {
  const robotChoices = ['камень', 'ножницы', 'бумага'];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomRobotChoice = robotChoices[randomIndex];
  const userRawInput = prompt('Выберите "камень", "ножницы" или "бумага"');

  if (userRawInput === null) return;

  const userChoice = userRawInput.toLowerCase().trim();

  if (!robotChoices.includes(userChoice)) {
    alert('Введены некорректные данные!');
    return;
  }

  const rules = { камень: 'ножницы', ножницы: 'бумага', бумага: 'камень' };
  let result;

  if (userChoice === randomRobotChoice) {
    result = 'Ничья!';
  } else if (rules[userChoice] === randomRobotChoice) {
    result = 'Поздравляю! Ты выиграл!';
  } else {
    result = 'Ты проиграл!';
  }

  alert(
    `Компьютер: "${randomRobotChoice}"   Игрок: "${userChoice}"\n${result}`
  );
}

function randomColorGenerator() {
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);
  document.body.style.transition = 'background-color 0.5s ease';
  document.body.style.backgroundColor = `rgb(${redColor} ${greenColor} ${blueColor})`;
}

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.hero__wrapper');
  const group = document.querySelector('.hero__group');

  const clone = group.cloneNode(true);
  wrapper.appendChild(clone);
});
