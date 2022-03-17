import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createGame } from "../../actions";
import { useNavigate } from "react-router-dom";

// dispatch to create the game 

const CreateGame = () => {

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


  // Name input is for testing - will use localstorage

  const [roomInput, setRoomInput] = useState("bobs house");
  const [nameInput, setNameInput] = useState("bob");

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
    <div className=" text-tblack">
      <h2 className="text-3xl font-semibold text-center text-torange p-5">
        Create A Game
      </h2>
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
        <label htmlFor={roomInput} className="capitalize">
        Username: 
        </label>
        <input
          type={"text"}
          value={nameInput}
          onChange={handleNameInput}
          required
        />
        <label htmlFor={roomInput} className="capitalize">
          Room Name:  
        </label>
        <input
          type={"text"}
          id={roomInput}
          value={roomInput}
          onChange={handleRoomInput}
          required
        />
        <input
          aria-label="submit btn"
          type={"submit"}
          value="Create Game!"
        ></input>
        {selected === 2 && (
          <div>
            <input
              aria-label="submit btn"
              type={"submit"}
              value="Start Game!"
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
