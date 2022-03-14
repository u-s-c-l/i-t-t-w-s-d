import React from "react";

const CreateGame = () => {
  const categories = [
    "animals",
    "general knowledge",
    "film",
    "gadgets",
    "music"
  ];
  return (
    <form>
      <h3>Select a category:</h3>
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
    </form>
  );
};

export default CreateGame;
