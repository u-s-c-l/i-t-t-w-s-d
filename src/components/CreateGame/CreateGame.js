import React from "react";

const CreateGame = () => {
  const categories = [
    "animals",
    "general knowledge",
    "film",
    "gadgets",
    "music"
  ];
  const difficulties = ["easy", "medium", "hard"];
  return (
    <section id="createGame">
      <form>
        <h3 className="capitalize">Select a category:</h3>
        {categories.map((cat) => {
          const consistentName = cat.replaceAll(" ", "").toLowerCase();
          return (
            <div key={consistentName}>
              <label htmlFor={consistentName} className="capitalize">
                {cat}
              </label>
              <input
                type={"radio"}
                id={consistentName}
                name="category"
                value={consistentName}
              />
            </div>
          );
        })}
        <h3 className="capitalize">Select a difficulty:</h3>
        {difficulties.map((diff) => {
          return (
            <div key={diff}>
              <label htmlFor={diff} className="capitalize">
                {diff}
              </label>
              <input type={"radio"} id={diff} name="difficulty" value={diff} />
            </div>
          );
        })}
        <input type={"submit"}>Create Game!</input>
      </form>
    </section>
  );
};

export default CreateGame;
