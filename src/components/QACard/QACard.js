import React from "react";
import PropTypes from "prop-types";
import Question from "../Question";
import Answers from "../Answers";

const QACard = (props) => {
  const { question, correct_answer, incorrect_answers } = props;
  return (
    <div>
      <Question question={question} />
      <Answers
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
      />
    </div>
  );
};

QACard.propTypes = {
  question: PropTypes.string.isRequired,
  correct_answer: PropTypes.string.isRequired,
  incorrect_answers: PropTypes.array.isRequired
};

export default QACard;
