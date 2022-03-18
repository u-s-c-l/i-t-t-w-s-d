import React from "react";
import { Link } from "react-router-dom";

const QuizLanding = () => {
  return (
    <div data-testid="landing-component">
      <div className="flex flex-col space-y-4 fixed bottom-24 right-0 left-0">
        <Link
          role="link"
          to="/quiz/createnew"
          className="bg-slate-50 text-tblack py-3 text-center rounded-full font-bold w-60 mx-auto"
        >
          Create a Game
        </Link>
        <Link
          role="link"
          to="/quiz/join"
          className="bg-slate-50 text-tblack py-3 text-center rounded-full font-bold w-60 mx-auto"
        >
          Join a Game
        </Link>
      </div>
    </div>
  );
};

export default QuizLanding;
