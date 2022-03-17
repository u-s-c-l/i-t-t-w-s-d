import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import  TheQuestions  from "../../components/TheQuestions";
import { useSocket } from "../../components/SocketContext/SocketContext";
import { recordPlayerResult } from "../../actions";

const PlayGame = () => {
  const dispatch = useDispatch();
  const socket = useSocket();

  useEffect(() => {
    socket.on("end-results", (username, score) => {
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
