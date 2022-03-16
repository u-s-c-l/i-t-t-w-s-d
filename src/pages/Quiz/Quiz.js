import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getQuestions from "../../actions";
import CreateGame from "../../components/CreateGame";
import QACard from "../../components/QACard";
import matches from "./helpers";



const Quiz = () => {
  const questions = useSelector((state) => state.questions);
  const loading = useSelector((state) => state.loading);
  const difficulty = useSelector((state) => state.difficulty);
  const error = useSelector((state) => state.error);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(0);
  


  const nextQ = (e) => {
    let points = 1;
    if (difficulty === "medium") points = 2;
    if (difficulty === "hard") points = 3;
    const nextQ = currentQ + 1;
    setCurrentQ(nextQ);
    if (e.target.dataset.correct === "true") {
      const newScore = score + points;
      setScore(newScore);
    }
  };

  const startGame = () => {
    setStarted(1);
  };

  const renderResult = () =>
    loading ? (
      <p>Loading . . .</p>
    ) : currentQ === 10 ? (
      <p>You got {score}/30 points</p>
    ) : questions.length ? (
      <>
        <QACard
          question={matches(questions[currentQ].question)}
          correct_answer={questions[currentQ].correct_answer}
          incorrect_answers={questions[currentQ].incorrect_answers}
          handleChange={nextQ}
        />
        <p>You have {score} points</p>
      </>
    ) : (
      <p>Sorry, we don&apos;t have enough questions on that topic!</p>
    );

  const dispatch = useDispatch();
  const searchQs = ({ category, difficulty }) =>
    dispatch(getQuestions({ category, difficulty }));



  return (
    <>
      {started ? (
        error ? (
          <p role="alert">Oops there has been an error! {error}</p>
        ) : (
          renderResult()
        )
      ) : (
        <CreateGame getQuestions={searchQs} startGame={startGame} />
      )}
    </>
  );
};
export default Quiz;
