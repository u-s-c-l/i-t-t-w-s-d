import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TheQuestions from "../../components/TheQuestions";
import { useSocket } from "../../contexts/SocketContext/SocketContext";
import { recordPlayerResult, addMessage } from "../../actions";

const PlayGame = () => {
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    socket.on("broadcast-message", (data) => {
      addMessage(data, false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("game-over", (username, score) => {
      dispatch(recordPlayerResult(username, score));
    });
  }, [socket]);

  return (
    <div>
      <TheQuestions />
    </div>
  );
};

export default PlayGame;
