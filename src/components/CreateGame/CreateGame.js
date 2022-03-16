import React, { useState } from "react";
import PropTypes from "prop-types";

const CreateGame = ({ getQuestions, startGame }) => {
  const [selected, setSelected] = useState(0);

  const categories = [
    "animals",
    "general knowledge",
    "film",
    "gadgets",
    "music"
  ];

  const difficulties = ["easy", "medium", "hard"];

  const setFirstInput = () => {
    setSelected(1);
  };
  const setSecondInput = () => {
    setSelected(2);
  };
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
    <div className=" text-tblack">
      <h2 className="text-2xl font-bold ">Create A Game</h2>
      <form
        onSubmit={handleSubmit}
        aria-label="create game form"
        className=" container flex flex-col space-y-4"
      >
        <>
          <h3 className="capitalize text-center text-2xl font-medium">
            Select a category:
          </h3>

          {categories.map((cat, index) => {
            const consistentName = cat.replaceAll(" ", "").toLowerCase();
            return (
              <div key={`cat_${index}`}>
                <input
                  type={"radio"}
                  id={consistentName}
                  name="category"
                  value={consistentName}
                  required
                  className="peer hidden"
                  onChange={setFirstInput}
                />
                <label
                  htmlFor={consistentName}
                  className="cursor-pointer capitalize bg-gradient-to-r from-tpink opacity-70 to-torange text-white py-3 text-center rounded-xl font-bold w-60 mx-auto block peer-checked:opacity-100 hover:opacity-100"
                >
                  {cat}
                </label>
              </div>
            );
          })}
        </>

        {selected > 0 && (
          <>
            <h3 className="capitalize text-center text-2xl font-medium">
              Select a difficulty:
            </h3>
            {difficulties.map((diff, index) => {
              return (
                <div key={`diff_${index}`}>
                  <input
                    required
                    type={"radio"}
                    id={diff}
                    name="difficulty"
                    value={diff}
                    className="hidden peer"
                    onChange={setSecondInput}
                  />
                  <label
                    htmlFor={diff}
                    className="cursor-pointer capitalize bg-gradient-to-r from-tpink opacity-70 to-torange text-white py-3 text-center rounded-xl font-bold w-60 mx-auto block peer-checked:opacity-100 hover:opacity-100"
                  >
                    {diff}
                  </label>
                </div>
              );
            })}
          </>
        )}
        {selected === 2 && (
          <input
            aria-label="submit btn"
            type={"submit"}
            value="Start Game!"
            className="capitalize bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full font-bold w-60 mx-auto block opacity-70 cursor-pointer hover:opacity-100 disabled:hidden"
          ></input>
        )}
      </form>
    </div>
  );
};

CreateGame.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

export default CreateGame;
