import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'Что такое useState?',
    variants: ['Это функция для хранения данных компонента', 'Это глобальный стейт', 'Это когда на ты никому не нужен'],
    correct: 1,
  },
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, procent, onClickVar }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: `${procent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((v, index) =>
          <li key={v} onClick={() => onClickVar(index)}>{v}</li>
        )}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const onClickVar = (i) => {
    console.log(step, i);
    setStep(step + 1)
    if (question.correct == i) setCorrect(correct + 1);
  }

  return (
    <div className="App">
      {step !== questions.length
        ?
        <Game question={question} procent={Math.ceil(step * 100 / questions.length)} onClickVar={onClickVar} />
        :
        <Result correct={correct} />
      }
    </div>
  );
}

export default App;
