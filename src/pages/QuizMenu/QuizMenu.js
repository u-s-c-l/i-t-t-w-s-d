import React from "react";
import QuizLanding from "../../components/QuizLanding";

const QuizMenu = () => {
  return (
    <>
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50 pt-10">
        Quiz Menu{" "}
      </h1>
      <p className="text-center m-6 text-xl text-slate-50 max-w-prose mb-4">
        Either join a game or start your own
      </p>
      <QuizLanding />
    </>
  );
};
export default QuizMenu;
