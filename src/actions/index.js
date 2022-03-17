import axios from "axios";

export const loading = (category) => ({ type: "LOADING", payload: category });

export const create = (room, category, difficulty, username, currentQ) => ({
  type: "CREATE",
  payload: { room, category, difficulty, username, currentQ }
});

// combined getQuestions with startGame function

export const loadQuestions = (questions) => ({
  type: "LOAD_QUESTIONS",
  payload: questions
});

export const joinPlayer = (username, room) => ({
  type: "JOIN_PLAYER",
  payload: { username, room }
});

export const loadSettings = (diff, qnum) => ({
  type: "LOAD_SETTINGS",
  payload: { diff, qnum }
});

export const loadGameMode = () => ({
  type: "LOAD_THE_GAME"
});

export const recordPlayerResult = (username, score) => ({
  type: "RECORD_PLAYER_RESULT",
  payload: { username, score }
});

export const recordAnswer = (curScore) => ({
  type: "RECORD_ANSWER",
  payload: curScore
});

const currentQ = 10;

export const createGame = (room, category, difficulty, username) => {
  const categoryMap = {
    generalknowledge: 9,
    animals: 27,
    film: 11,
    gadgets: 30,
    music: 12
  };
  const catId = categoryMap[category];

  return async (dispatch) => {
    dispatch(loading(category));
    dispatch(create(room, catId, difficulty, username, currentQ));
    try {
      const questions = await getQuestions(catId, difficulty);
      dispatch(loadQuestions(questions));
    } catch (err) {
      console.warn(err.message);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };
};

const getQuestions = async (category, difficulty) => {
  try {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    return data.results;
  } catch (err) {
    console.warn(err.message);
  }
};

export default getQuestions;
