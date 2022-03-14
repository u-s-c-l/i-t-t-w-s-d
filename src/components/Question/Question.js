import React from "react";
import PropTypes from "prop-types";

const Question = ({ question }) => {
  return (
    <>
      <p>{question}</p>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.string
};

export default Question;
