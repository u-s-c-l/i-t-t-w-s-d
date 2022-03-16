import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSocket } from "../../contexts/SocketProvider";
import { useDispatch } from "react-redux";
import { joinPlayer } from "../../actions";


const JoinGame = () => {

  // need username and room to join a game with socket

  const socket = useSocket();
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("")

  const [roomName, setRoomName] = useState("")

  const handleSubmit = () => {
    socket.emit('join-game', roomName, username);
    dispatch(joinPlayer(username, roomName));
    history.push('/waiting');
  }

  const handleNameInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setUsername(input);
  }

  const handleRoomInput = (e) => {
    const input = e.target.value;
    setRoomName(input);
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
