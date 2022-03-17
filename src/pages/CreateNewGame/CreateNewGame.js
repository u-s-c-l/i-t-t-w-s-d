import React from "react";
import CreateGame from "../../components/CreateGame";

const CreateNewGame = () => {
  return (
    <>
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50 pt-10">
        Create Game
      </h1>
      <CreateGame />
    </>
  );
};
export default CreateNewGame;
