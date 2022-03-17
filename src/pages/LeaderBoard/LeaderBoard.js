import React, { useEffect, useState } from "react";
import Board from "../../components/Board";
import axios from "axios";

const LeaderBoard = () => {
  const [scores, setScores] = useState();
  useEffect(async () => {
    const response = await axios.get(
      // eslint-disable-next-line no-undef
      `${process.env.REACT_APP_API_URL}scores/leadersboard`
    );
    setScores(response.data);
  }, []);
  return (
    <>
      <h2>Leader Board</h2>
      {scores && (
        <table data-testid="score-table">
          <thead>
            <tr>
              <th>Category:</th>
              <th>Username:</th>
              <th>Score:</th>
            </tr>
          </thead>
          {scores.map((data, index) => (
            <Board key={`score_${index}`} data={data} />
          ))}
        </table>
      )}
    </>
  );
};

export default LeaderBoard;
