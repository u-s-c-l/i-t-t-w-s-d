import React from "react";
import PropTypes from "prop-types";

const Question = ({ question }) => {
  return (
    <>
      <p data-testid="question-element">{question}</p>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
