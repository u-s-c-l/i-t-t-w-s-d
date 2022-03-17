import React from "react";
import PropTypes from "prop-types";

const Board = ({ data }) => {
  const { cat, username, score } = data;
  return (
    <tbody role="table">
      <tr>
        <td>{cat}</td>
        <td>{username}</td>
        <td>{score}</td>
      </tr>
    </tbody>
  );
};

Board.propTypes = {
  data: PropTypes.object.isRequired
};

export default Board;
