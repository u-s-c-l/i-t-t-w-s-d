import React from "react";
import PropTypes from "prop-types";
import shuffle from "./helpers";

const Answers = ({ correct_answer, incorrect_answers }) => {
  const allAnswers = [...incorrect_answers, correct_answer];
  const shuffledAns = shuffle(allAnswers);
  return (
    <form>
      {shuffledAns.map((ans, index) => {
        const consistentName = ans.replaceAll(" ", "").toLowerCase();
        return (
          <div key={{ consistentName }}>
            <label htmlFor={consistentName}>{ans}</label>
            <input
              type={"radio"}
              id={consistentName}
              name={`answer_${index}`}
              value={consistentName}
            />
          </div>
        );
      })}
    </form>
  );
};

Answers.propTypes = {
  correct_answer: PropTypes.string.isRequired,
  incorrect_answers: PropTypes.array.isRequired
};

export default Answers;
