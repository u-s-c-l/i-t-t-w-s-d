import React, { useEffect } from "react";
import { useSocket } from "../../components/SocketContext/SocketContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const JoinGame = () => {
  const socket = useSocket();
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("init-game", (diff, qnum, quiz) => {
      dispatch();
    });
  });

  return (
    <>
      <h1> Waiting Room</h1>
      <h2> The owner will start the game soon</h2>
    </>
  );
};
export default JoinGame;
