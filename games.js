const playGame = {
  simpleQuiz: simpleQuiz,
  turnTheText: turnTheText,
  simpleArithmetic: simpleArithmetic,
  guessTheNumber: guessTheNumber,
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
    if (Number(userAnswer) === item['correctAnswer']) countTrue++;
  }

  const word = countTrue === 1 ? 'вопрос' : 'вопроса';

  if (countTrue === 0) {
    resultMessage = `Вы не ответили правильно ни на один вопрос!`;
  } else resultMessage = `Вы ответили правильно на ${countTrue} ${word}!`;

  alert(resultMessage);
}

function turnTheText() {
  console.log('Заглушка');
}

function simpleArithmetic() {
  console.log('Заглушка');
}

function guessTheNumber() {
  console.log('Заглушка');
}
