import axios from "axios";

const loading = (category) => ({ type: "LOADING", payload: category });

const loadQuestions = (questions) => ({
  type: "GET_QUESTIONS",
  payload: questions
});

const getQuestions = ({ category, difficulty }) => {
  const categoryMap = {
    9: "generalknowlage",
    27: "animals",
    11: "film",
    30: "gadgets",
    12: "music"
  };
  const catId = categoryMap[category];
  return async (dispatch) => {
    dispatch(loading(category));
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${catId}&difficulty=${difficulty}`
      );
      dispatch(loadQuestions(data.results));
    } catch (err) {
      console.warn(err.message);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };
};

export default getQuestions;
