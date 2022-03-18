import React from "react";
import PropTypes from "prop-types";

const Board = ({ data }) => {
  const { cat, username, score } = data;
  return (
    <tbody role="table">
      <tr>
        <td className="pb-1">{cat}</td>
        <td className="pb-1">{username}</td>
        <td className="pb-1 ">{score}</td>
      </tr>
    </tbody>
  );
};

Board.propTypes = {
  data: PropTypes.object.isRequired
};

export default Board;
