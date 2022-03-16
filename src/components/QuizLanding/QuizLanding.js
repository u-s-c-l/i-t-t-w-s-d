import React from "react";
import { Link } from "react-router-dom";

const QuizLanding = () => {
  return (
    <>
      <Link role="link" to="/quiz/create">
        Create a Game
      </Link>
    </>
  );
};

export default QuizLanding;
