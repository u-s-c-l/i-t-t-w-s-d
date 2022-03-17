import React, { useEffect } from "react";
import { useSocket } from "../../components/SocketContext/SocketContext";
import { useDispatch } from "react-redux";
import { loadQuestions, loadGameMode, loadSettings } from "../../actions";
import { useNavigate } from "react-router-dom";

const JoinWR = () => {
  const socket = useSocket();
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("init-game", (diff, qnum, quiz) => {
      dispatch(loadQuestions(quiz));
      dispatch(loadSettings(diff, qnum));
      dispatch(loadGameMode());
      history("/quiz/game");
    });
  }),
    [socket];

  return (
    <div data-testid="joinWR">
      <h2> The owner will start the game soon</h2>
    </div>
  );
};
export default JoinWR;
