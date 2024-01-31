import React from 'react';
import './ResultComponent.css';

function ResultComponent({ answers, onRestartQuiz }) {
  const totalQuestions = 5;

  // total the number of correct answers
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  // total the percentage of correct answers
  const percentageCorrect = (correctAnswers / totalQuestions) * 100;

  // different gifs comes up on the bases of differnt scores
  const getGIF = () => {
    if (correctAnswers < 3) {
      return 'https://i.giphy.com/QZxMkYOzRodf8dBNKp.webp';
    } else if (correctAnswers === 3 || correctAnswers === 4) {
      return 'https://i.giphy.com/WgYnjK1jfg4x8ab7ew.webp';
    } else {
      return 'https://i.giphy.com/3o85xr9ZKY1wbbJXDW.webp';
    }
  };

  // rendering for the ResultComponent
  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Result</h1>
      <img src={getGIF()} alt="Result Gif" className="result-image" />
      <p className="result-text">
        You got {correctAnswers} out of {totalQuestions} questions correct!
      </p>
      <p className="result-text">Percentage Correct: {percentageCorrect}%</p>
      <button className="result-button" onClick={onRestartQuiz}>
        RESTART
      </button>
    </div>
  );
}

export default ResultComponent;
