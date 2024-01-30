import React, { useState } from 'react';
import ResultComponent from './ResultComponent';
import "./QuizBox.css"

function QuizBox({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [highlighted, setHighlighted] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    setAnswers([...answers, { question: currentQuestion, isCorrect }]);
    setCurrentQuestion(currentQuestion + 1);
    setHighlighted(false);
  };

  const handleHighlightToggle = () => {
    setHighlighted(!highlighted);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const question = questions[currentQuestion];

  return (
    <div className="quiz-box">
      {currentQuestion < questions.length ? (
        <div className="question-container">
          <h1 className="question-number">
            Question {currentQuestion + 1}
            <br />
            <span className="question-text" style={{ color: highlighted ? 'red' : 'black' }}>
              {question.text}
            </span>
          </h1>
          <div className="answer-options">
            {question.options.map((option) => (
              <div key={option.id}>
                <button className="answer-button" onClick={() => handleAnswerClick(option.isCorrect)}>
                  {option.text}
                </button>
              </div>
            ))}
          </div>
          <button className="highlight-button" onClick={handleHighlightToggle}>
            {highlighted ? 'Remove Highlight' : 'Highlight'}
          </button>
        </div>
      ) : (
        <ResultComponent answers={answers} onRestartQuiz={handleRestartQuiz} />
      )}
    </div>
  );
}

export default QuizBox;
