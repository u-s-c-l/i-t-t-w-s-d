/* eslint-disable indent */
import React, { useEffect } from "react";
import { useSocket } from "../../contexts/SocketContext/SocketContext";
import { useDispatch } from "react-redux";
import { loadQuestions, loadGameMode, loadSettings } from "../../actions";
import { useNavigate } from "react-router-dom";

const JoinWR = () => {
  const socket = useSocket();
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("start-game", (difficulty, currentQ, quiz) => {
      dispatch(loadQuestions(quiz));
      dispatch(loadSettings(difficulty, currentQ));
      dispatch(loadGameMode());
      history("/quiz/game");
    });
  }, [socket]);

  return (
    <div data-testid="joinWR">
      <h2 className="text-center text-2xl font-bold text-slate-50 px-4 my-12">
        The owner will start the game soon
      </h2>
    </div>
  );
};
export default JoinWR;
