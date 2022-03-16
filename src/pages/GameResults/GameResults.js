import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "../../components/SocketContext/SocketContext";
import { useSocket } from "../../components/SocketContext/SocketContext";

// use socket for results 

const GameResults = () => {

  const room = useSelector(state => state.room);
  const username = useSelector(state => state.username);
  const score = useSelector(state => state.score);
  const socket = useSocket()

  useEffect(() => {
    socket.emit('end-game', room, username, score);
  },[]);

  // display scores in return

  return (
    <>
      <h1> Results </h1>
     
    </>
  );
};
export default GameResults;
