import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "../SocketContext/SocketContext";
import {Col,Row, Container} from "reactstrap";



const GameResults = () => {

  const room = useSelector(state => state.room);
  const username = useSelector(state => state.username);
  const score = useSelector(state => state.score);
  const socket = useSocket();
  const playerScores = useSelector((state) => state.playerScores);
  const multiplayer = useSelector((state) => state.multiplayer);
  const [gameResult, setGameResult] = useState({});

  useEffect(() => {
    socket.emit("end-game", room, username, score);
  },[]);

  useEffect(() => {
    playerScores.forEach((p) => {
      if (p.score < score) {
        setGameResult({
          res: "YOU WIN",
        });
      }

      if (p.score === score) {
        setGameResult({
          res: "ITS A DRAW",
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
    <>
      <h1> Results </h1>
      {!multiplayer ? (
        <h2> YOUR SCORE: {score}</h2>
      ) : playerScores.length === 0 ? (
        <h2>
          Waiting for other players to finish the game
          <span>...</span>
        </h2>
      ) : (
        <div>
          <h1> {gameResult.res} </h1>
          <Container>
            <Row>
              <Col>
                <h3> {username} </h3>
              </Col>
              <Col>
                <label>{score}</label>
              </Col>
            </Row>
            {playerScores.map((p) => (
              <Row key={p.score}>
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
    </>
  );
};
export default GameResults;
