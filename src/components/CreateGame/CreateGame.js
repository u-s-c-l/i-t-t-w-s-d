import React, {useState} from "react";
import PropTypes from "prop-types";

// dispatch to create the game 

const CreateGame = ({ getQuestions, startGame }) => {
  const categories = [
    "animals",
    "general knowledge",
    "film",
    "gadgets",
    "music"
  ];

  const difficulties = ["easy", "medium", "hard"];

  const [roomInput, setRoomInput] = useState("bobs house");
  const [nameInput, setNameInput] = useState("bob");

  const handleRoomInput = (e) => {
    const value = e.target.value;
    setRoomInput(value);
  };
  const handleNameInput = (e) => {
  const value = e.target.value;
  setNameInput(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const categories = Array.from(e.target.category);
    const selectedCat = categories.filter((cat) => cat.checked === true);
    const catValue = selectedCat[0].value;

    const difficulties = Array.from(e.target.difficulty);
    const selectDiff = difficulties.filter((diff) => diff.checked === true);
    const diffValue = selectDiff[0].value;
    getQuestions({ category: catValue, difficulty: diffValue });
    startGame();
  };

  return (
    <form onSubmit={handleSubmit} aria-label="create game form">
      <h3 className="capitalize">Select a category:</h3>
      {categories.map((cat, index) => {
        const consistentName = cat.replaceAll(" ", "").toLowerCase();
        return (
          <div key={`cat_${index}`}>
            <label htmlFor={consistentName} className="capitalize">
              {cat}
            </label>
            <input
              type={"radio"}
              id={consistentName}
              name="category"
              value={consistentName}
              required
            />
          </div>
        );
      })}

      <h3 className="capitalize">Select a difficulty:</h3>
      {difficulties.map((diff, index) => {
        return (
          <div key={`diff_${index}`}>
            <label htmlFor={diff} className="capitalize">
              {diff}
            </label>
            <input
              required
              type={"radio"}
              id={diff}
              name="difficulty"
              value={diff}
            />
          </div>
        );
      })}

      <input
        aria-label="submit btn"
        type={"submit"}
        value="Create Game!"
      ></input>
    </form>
  );
};

CreateGame.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

export default CreateGame;
