import React from "react";
import { Link } from "react-router-dom";

const QuizLanding = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <Link
          role="link"
          to="/quiz/create"
          className=" bg-gradient-to-r from-tpink to-torange text-white py-2 text-center rounded-full font-bold w-52 mx-auto"
        >
          Create a Game
        </Link>
        <Link
          role="link"
          to="/quiz/join"
          className=" bg-gradient-to-r from-tpink to-torange text-white py-2 text-center rounded-full font-bold w-52 mx-auto"
        >
          Join a Game
        </Link>
      </div>
    </>
  );
};

export default QuizLanding;
