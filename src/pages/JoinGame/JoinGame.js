import React from "react";
import { useState } from "react";
import  {useSocket} from "../../components/SocketContext/SocketContext";
import { useDispatch } from "react-redux";
import { joinPlayer } from "../../actions";
import { useNavigate } from "react-router-dom";


const JoinGame = () => {

  // need username and room to join a game with socket

  const socket = useSocket();
  const dispatch = useDispatch();
  const history = useNavigate();
 

  const [username, setUsername] = useState("username");

  const [roomName, setRoomName] = useState("room");

  const handleNameInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setUsername(input);
  };

  const handleRoomInput = (e) => {
    const input = e.target.value;
    setRoomName(input);
  };

  const handleSubmit = () => {
    socket.emit("join-room", roomName, username);
    console.log("joined game");
    dispatch(joinPlayer(username, roomName));
    history("/quiz/waiting");
  };

  return (
    <>
      <h1> Join Game</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={username} onChange={handleNameInput}></input>
        <input type="text" value={roomName} onChange={handleRoomInput}></input>
        <button type="submit" onClick={handleSubmit}>
          Join
        </button>
      </form>
    </>
  );
};
export default JoinGame;
