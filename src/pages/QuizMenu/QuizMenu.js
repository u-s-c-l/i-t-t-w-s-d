import React from "react";
import QuizLanding from "../../components/QuizLanding";

const QuizMenu = () => {
  return (
    <>
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50 pt-10">
        Quiz Menu{" "}
      </h1>
      <p className="mx-auto w-72 text-xl text-slate-50 max-w-prose my-8">
        From here you can either join a game, or create your own!
      </p>
      <QuizLanding />
    </>
  );
};
export default QuizMenu;
