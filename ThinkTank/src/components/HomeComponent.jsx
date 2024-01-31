import React, { useState } from "react";
import QuizBox from "./QuizBox";
import questions from "./Questions";
import "./HomeComponent.css";
import Header from "./header/header";

const FrontPage = () => {
  const [theme, setTheme] = useState("light");
  const [quizStarted, setQuizStarted] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className={`complete ${theme}-theme`}>
      {quizStarted ? (
        <QuizBox questions={questions} theme={theme} toggleTheme={toggleTheme} />
      ) : (
        <div className={"front-page"}>
          <Header theme={theme} toggleTheme={toggleTheme} />

          <main className="main-content">
            <div className="text-and-gif-container">
              <p className="greeting-text">
                Greetings from ThinkTank! Your destination for mind-bending quizzes
                with a cool twist. Let the fusion of fun and knowledge begin!
              </p>
              <img
                className="animated-gif"
                src="https://i.giphy.com/1zTqgW6bS2jWU.webp"
                alt="Quiz"
              />
              <button className="start-quiz-button" onClick={startQuiz}>
                Start Quiz
              </button>
            </div>
          </main>

          <footer className="footer">
            <p className="footer-text">Developed by Kamakshi Pandoh</p>
            <p><a href="https://github.com/kamakship18">Contact Kamakshi</a>.</p>
            <hr />
          </footer>
        </div>
      )}
    </div>
  );
};

export default FrontPage;
