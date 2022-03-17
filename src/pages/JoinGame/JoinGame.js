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
 
  const [username, setUsername] = useState("bab");

  const [roomName, setRoomName] = useState("bobs house");

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
    
      <input type="text" value={username} onChange={handleNameInput}></input>
      <input type="text" value={roomName} onChange={handleRoomInput}></input>
      <button type="submit" onClick={handleSubmit}>
        Join
      </button>
   
    </>
  );
};
export default JoinGame;
