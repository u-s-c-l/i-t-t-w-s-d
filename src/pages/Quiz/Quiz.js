import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getQuestions from "../../actions";
import CreateGame from "../../components/CreateGame";
import QACard from "../../components/QACard";
import matches from "./helpers";

const Quiz = () => {
  const questions = useSelector((state) => state.questions);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [currentQ, setCurrentQ] = useState(0);

  const nextQ = () => {
    const nextQ = currentQ + 1;
    setCurrentQ(nextQ);
  };

  const renderResult = () =>
    loading ? (
      <p>Loading . . .</p>
    ) : questions.length ? (
      <QACard
        question={matches(questions[currentQ].question)}
        correct_answer={questions[currentQ].correct_answer}
        incorrect_answers={questions[currentQ].incorrect_answers}
        handleChange={nextQ}
      />
    ) : (
      <p>Sorry, we don&apos;t have enough questions on that topic!</p>
    );

  const dispatch = useDispatch();
  const searchQs = ({ category, difficulty }) =>
    dispatch(getQuestions({ category, difficulty }));

  return (
    <>
      <CreateGame getQuestions={searchQs} />
      {error ? (
        <p role="alert">Oops there has been an error! {error}</p>
      ) : (
        renderResult()
      )}
    </>
  );
};
export default Quiz;
