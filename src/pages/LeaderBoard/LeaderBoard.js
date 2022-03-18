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
      <h2 className="capitalize text-center text-4xl font-bold text-slate-50 py-10">
        Leader Board
      </h2>
      {scores && (
        <div className="p-8">
          <table
            data-testid="score-table"
            className=" rounded-lg overflow-hidden bg-slate-50 border-2 border-tblack w-full text-center text-tblack"
          >
            <thead>
              <tr>
                <th className="py-3">Category</th>
                <th className="py-3">Username</th>
                <th className="py-3">Score</th>
              </tr>
            </thead>
            {scores.map((data, index) => (
              <Board key={`score_${index}`} data={data} />
            ))}
          </table>
        </div>
      )}
    </>
  );
};

export default LeaderBoard;
