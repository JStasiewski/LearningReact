import React, { useState } from "react";
import { motion } from "framer-motion";

const Quiz = ({ page, setPage, x, setX }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of Poland?",
      choices: ["Warsaw", "Wałbrzych", "Suwałki", "New York"],
      answer: 0,
    },
    {
      text: "What is the capital of North America?",
      choices: ["New York", "Washington", "Isn't it a continent?", "Chicago"],
      answer: 2,
    },
    {
      text: "What is the capital of France",
      choices: ["Lyon", "Paris", "Nice", "Dijon"],
      answer: 1,
    },
    {
      text: "What is the capital of Poland?",
      choices: ["Warsaw", "Wałbrzych", "Suwałki", "New York"],
      answer: 0,
    },
    {
      text: "What is the capital of North America?",
      choices: ["New York", "Washington", "Isn't it a continent?", "Chicago"],
      answer: 2,
    },
    {
      text: "What is the capital of France",
      choices: ["Lyon", "Paris", "Nice", "Dijon"],
      answer: 1,
    },
  ];

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);

    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const tryAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <motion.div
      className="card"
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card-title">Quiz</div>
      <div className="quizContainer">
        <div className="quizWindow">
          {currentQuestion < questions.length ? (
            <div>
              <p>
                Question {currentQuestion + 1} out of {questions.length}
              </p>
              <hr />
              <h2>{questions[currentQuestion].text}</h2>
              <hr />
              {questions[currentQuestion].choices.map((choice, index) => (
                <button
                  className="quizButton"
                  key={index}
                  onClick={() => handleAnswer(index)}
                >
                  {choice}
                </button>
              ))}
            </div>
          ) : (
            <div>
              {score >= questions.length / 2 ? (
                <p>Congratulations you've past the test!</p>
              ) : (
                <p>Maby try again :(</p>
              )}
              <hr />
              <h2>
                Your final score is {score} / {questions.length}
              </h2>
              <hr />
              <button className="quizButton" onClick={() => tryAgain()}>
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Quiz;
