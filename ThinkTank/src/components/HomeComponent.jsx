import React, { useState } from "react";
import "./HomeComponent.css";
import Header from './header/header';


const FrontPage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="complete">
    <div className={`front-page ${theme}-theme`}>
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
        </div>
        <button className="start-quiz-button" >Start Quiz</button>
      </main>

      <footer className="footer">
        <p className="footer-text">Your website description goes here.</p>
        <q className="footer-quote">"Quote goes here."</q>
        <hr />
      </footer>
      
    </div>
    </div>
  );
};

export default FrontPage;
