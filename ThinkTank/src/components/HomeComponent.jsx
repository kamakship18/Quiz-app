import React, { useState } from "react";
import QuizBox from "./QuizBox"; 
import questions from "./Questions";
import "./HomeComponent.css"; 
import Header from "./header/header"; 

const FrontPage = () => {
  //  useState hook to manage state variables
  const [theme, setTheme] = useState("light"); // state variable for theme (light or dark)
  const [quizStarted, setQuizStarted] = useState(false); // for quiz start status

  // function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // function to set the quiz as started
  const startQuiz = () => {
    setQuizStarted(true);
  };

  // JSX rendering for the frontpage component
  return (
    <div className={`complete ${theme}-theme`}>
      {quizStarted ? (
        // if quiz is started,  the QuizBox component render
        <QuizBox questions={questions} theme={theme} toggleTheme={toggleTheme} />
      ) : (
        // if quiz is not started,  the front-page content will render
        <div className={"front-page"}>
          <Header theme={theme} toggleTheme={toggleTheme} />

          <main className="main-content">
            
            <div className="text-and-gif-container">
              <p className="greeting-text">
                Greetings from ThinkTank!<br></br> Your destination for mind-bending quizzes
                with a cool twist.<br></br> Let the fusion of fun and knowledge begin!
              </p>
              <img
                className="animated-gif"
                src="https://i.giphy.com/1zTqgW6bS2jWU.webp"
                alt="Quiz"
              />
              {/* button to start the quiz */}
              <button className="start-quiz-button" onClick={startQuiz}>
                Start Quiz
              </button>
            </div>

          </main>

          <footer className="footer">
            <p className="footer-text">Developed by Kamakshi Pandoh</p>
            <p><a href="https://github.com/kamakship18">Contact Kamakshi</a></p>
            <hr />
          </footer>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
