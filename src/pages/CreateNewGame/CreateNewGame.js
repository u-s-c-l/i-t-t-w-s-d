import React from "react";
import { useDispatch } from "react-redux";
import getQuestions from "../../actions";
import CreateGame from "../../components/CreateGame";


const CreateNewGame = () => {

 
 

  const dispatch = useDispatch();
  const searchQs = ({ category, difficulty }) =>
    dispatch(getQuestions({ category, difficulty }));



  return (
    <>
      <h1>Create Game</h1>
      <CreateGame getQuestions={searchQs}  />
    </>
  );
};
export default CreateNewGame;
