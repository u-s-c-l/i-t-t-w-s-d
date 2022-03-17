import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGame } from "../../actions";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";

// dispatch to create the game

const CreateGame = () => {
  const { getCurrentUser } = useAuthContext();
  const { username } = getCurrentUser();
  const dispatch = useDispatch();
  const history = useNavigate();

  const [selected, setSelected] = useState(0);

  const categories = [
    "animals",
    "general knowledge",
    "film",
    "gadgets",
    "music"
  ];

  const difficulties = ["easy", "medium", "hard"];

  const [roomInput, setRoomInput] = useState("");
  const [nameInput, setNameInput] = useState(username);

  const handleRoomInput = (e) => {
    const value = e.target.value;
    setRoomInput(value);
  };
  const handleNameInput = (e) => {
    const value = e.target.value;
    setNameInput(value);
  };

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
    dispatch(createGame(roomInput, catValue, diffValue, nameInput));
    history("/quiz/waiting");
  };

  return (
    <div className="m-8 mb-0 rounded-lg overflow-hidden bg-slate-50 border-2 border-tblack p-4">
      <form
        onSubmit={handleSubmit}
        aria-label="create game form"
        className=" container flex flex-col"
      >
        <div className={selected ? "hidden" : "flex flex-col space-y-4"}>
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
        </div>

        {selected > 0 && (
          <div className="space-y-4">
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
          </div>
        )}
        {selected === 2 && (
          <div className="space-y-4 mt-10">
            <div>
              <label htmlFor={roomInput} className="capitalize hidden">
                Username:
              </label>
              <input
                type={"text"}
                value={nameInput}
                onChange={handleNameInput}
                required
                disabled
                placeholder="enter username:"
                className="capitalize bg-gradient-to-r from-tpink to-torange text-white py-3 rounded-xl font-bold w-60 mx-auto block focus:outline-none placeholder:text-slate-50 text-left px-4"
              />
            </div>
            <div>
              <label htmlFor={roomInput} className="capitalize hidden">
                Room Name:
              </label>
              <input
                type={"text"}
                id={roomInput}
                value={roomInput}
                onChange={handleRoomInput}
                required
                placeholder="room name:"
                className="capitalize bg-gradient-to-r from-tpink opacity-70 to-torange text-white py-3 rounded-xl font-bold w-60 mx-auto block focus:opacity-100 focus:outline-none placeholder:text-slate-50 text-left px-4"
              />
            </div>
            <input
              aria-label="submit btn"
              type={"submit"}
              value="Create Game!"
              className="capitalize bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full font-bold w-44 mx-auto block opacity-70 cursor-pointer hover:opacity-100 disabled:hidden mt-8"
            ></input>
          </div>
        )}
      </form>
    </div>
  );
};

// CreateGame.propTypes = {
//   getQuestions: PropTypes.func.isRequired,
//   startGame: PropTypes.func.isRequired
// };

export default CreateGame;
