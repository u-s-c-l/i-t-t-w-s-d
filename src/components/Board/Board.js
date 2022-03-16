import React from "react";
import PropTypes from "prop-types";

const Board = ({ data }) => {
  const { cat, username, score } = data;
  return (
    <table>
      <thead>
        <tr>
          <th>Category:</th>
          <th>Username:</th>
          <th>Score:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cat}</td>
          <td>{username}</td>
          <td>{score}</td>
        </tr>
      </tbody>
    </table>
  );
};

Board.propTypes = {
  data: PropTypes.object.isRequired
};

export default Board;
