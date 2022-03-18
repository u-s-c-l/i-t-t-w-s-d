import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../contexts/SocketContext/SocketContext";
import { loadGameMode } from "../../actions";

const CreateWR = () => {
  const history = useNavigate();
  const socket = useSocket();
  const dispatch = useDispatch();
  const room = useSelector((state) => state.room);
  const username = useSelector((state) => state.username);
  const difficulty = useSelector((state) => state.difficulty);
  const currentQ = useSelector((state) => state.currentQ);
  const questions = useSelector((state) => state.questions);
  const [newPlayers, setNewPlayers] = useState([]);

  const handleNext = () => {
    socket.emit("start-game", room, difficulty, currentQ, questions);
    history("/quiz/game");
  };

  useEffect(() => {
    socket.emit("join-room", room, username);
  }, []);

  useEffect(() => {
    socket.on("user-join", (username) => {
      setNewPlayers((newPlayers) => [...newPlayers, username]);
      dispatch(loadGameMode());
    });
  }, [socket]);

  return (
    <div data-testid="createWR">
      <div>
        {newPlayers.length === 0 ? (
          <>
            <h2>Waiting for others players to join the game</h2>
          </>
        ) : (
          <div>
            <h2> Joined:</h2>
            {newPlayers.map((newPlayer) => (
              <h3 key={newPlayer}>{newPlayer}</h3>
            ))}
          </div>
        )}
      </div>
      <a onClick={handleNext}>Play Game</a>
    </div>
  );
};

export default CreateWR;
