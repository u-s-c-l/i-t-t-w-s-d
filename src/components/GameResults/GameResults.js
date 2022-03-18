import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "../../contexts/SocketContext/SocketContext";
import { Col, Row, Container } from "reactstrap";

const GameResults = () => {
  const room = useSelector((state) => state.room);
  const username = useSelector((state) => state.username);
  const score = useSelector((state) => state.score);
  const socket = useSocket();
  const playerScores = useSelector((state) => state.playerScores);
  const multiplayer = useSelector((state) => state.multiplayer);
  const [gameResult, setGameResult] = useState({});

  useEffect(() => {
    socket.emit("end-game", room, username, score);
  }, []);

  useEffect(() => {
    playerScores.forEach((p) => {
      if (p.score < score) {
        setGameResult({
          res: "YOU WIN"
        });
      }

      if (p.score === score) {
        setGameResult({
          res: "ITS A DRAW"
        });
      }

      if (p.score > score) {
        setGameResult({
          res: "YOU LOSE"
        });
      }
    });
  }, [playerScores]);

  return (
    <div data-testid="results-component" className="mx-5">
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50 py-10">
        Results
      </h1>
      {!multiplayer ? (
        <h2 className="uppercase text-center text-2xl font-bold text-slate-50 px-4">
          YOUR SCORE: {score}
        </h2>
      ) : playerScores.length === 0 ? (
        <h2 className="text-center text-2xl font-bold text-slate-50 px-4">
          Waiting for other players to finish the game
          <span>...</span>
        </h2>
      ) : (
        <div>
          <h1> {gameResult.res} </h1>
          <Container>
            <Row className="flex justify-between w-2/3 text-2xl font-bold text-slate-50 px-4">
              <Col>
                <h3> {username} </h3>
              </Col>
              <Col>
                <label>{score}</label>
              </Col>
            </Row>
            {playerScores.map((p) => (
              <Row
                className="flex justify-between w-2/3 text-2xl font-bold text-slate-50 px-4"
                key={p.score}
              >
                <Col>
                  <label key={p.username}> {p.username} </label>
                </Col>
                <Col>
                  <label> {p.score} </label>
                </Col>
              </Row>
            ))}
          </Container>
        </div>
      )}
    </div>
  );
};
export default GameResults;
