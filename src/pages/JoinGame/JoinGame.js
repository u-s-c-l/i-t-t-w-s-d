import React from "react";
import { useState } from "react";
import { useSocket } from "../../contexts/SocketContext/SocketContext";
import { useDispatch } from "react-redux";
import { joinPlayer } from "../../actions";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const JoinGame = () => {
  // need username and room to join a game with socket
  const { getCurrentUser } = useAuthContext();
  const { username } = getCurrentUser();
  const socket = useSocket();
  const dispatch = useDispatch();
  const history = useNavigate();

  const [nameInput, setNameInput] = useState(username);

  const [roomName, setRoomName] = useState("");

  const handleNameInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setNameInput(input);
  };

  const handleRoomInput = (e) => {
    const input = e.target.value;
    setRoomName(input);
  };

  const handleSubmit = () => {
    socket.emit("join-room", roomName, nameInput);
    console.log("joined game");
    dispatch(joinPlayer(roomName, nameInput));
    history("/quiz/waiting");
  };

  return (
    <>
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50 pt-10">
        Join Game
      </h1>
      <div className="m-8 mb-0 rounded-lg overflow-hidden bg-slate-50 border-2 border-tblack p-4 py-12">
        <div className="space-y-4">
          <input
            type="text"
            value={nameInput}
            onChange={handleNameInput}
            required
            disabled
            className=" bg-gradient-to-r from-tpink to-torange text-white py-3 rounded-xl font-bold w-60 mx-auto block focus:outline-none placeholder:text-slate-50 text-left px-4"
          ></input>
          <input
            type="text"
            value={roomName}
            onChange={handleRoomInput}
            placeholder="Room name:"
            required
            className=" bg-gradient-to-r from-tpink opacity-70 to-torange text-white py-3 rounded-xl font-bold w-60 mx-auto block focus:opacity-100 focus:outline-none placeholder:text-slate-50 text-left px-4"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="capitalize bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full font-bold w-44 mx-auto block opacity-70 cursor-pointer hover:opacity-100 disabled:hidden mt-8"
        >
          Join Game!
        </button>
      </div>
    </>
  );
};
export default JoinGame;
