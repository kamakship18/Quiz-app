import React, { useState } from 'react';
import ResultComponent from './ResultComponent'; 
import Header from './header/header'; 
import './QuizBox.css'; 

function QuizBox({ questions, theme, toggleTheme }) {

  // use the useState hook to manage state variables
  const [currentQuestion, setCurrentQuestion] = useState(0); // for the current question index
  const [answers, setAnswers] = useState([]); // to store user's answers
  const [highlighted, setHighlighted] = useState(false); // to track highlight status

  // to handle user's answer click
  const handleAnswerClick = (isCorrect) => {
    setAnswers([...answers, { question: currentQuestion, isCorrect }]);
    setCurrentQuestion(currentQuestion + 1);
    setHighlighted(false);
  };

  // to toggle the highlight status
  const handleHighlightToggle = () => {
    setHighlighted(!highlighted);
  };

  // to restart the quiz
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
  };

  // gets the current question based on the currentQuestion index
  const question = questions[currentQuestion];

  // rendering for the QuizBox component
  return (
    <div className={`quiz-box ${theme}-theme`}>
      <Header theme={theme} toggleTheme={toggleTheme} />

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
        // if all questions are answered, render the ResultComponent
        <ResultComponent answers={answers} onRestartQuiz={handleRestartQuiz} />
      )}
    </div>
  );
}

export default QuizBox;
