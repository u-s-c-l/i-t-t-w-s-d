import axios from "axios";

const loading = (category) => ({ type: "LOADING", payload: category });

const loadQuestions = (questions, difficulty) => ({
  type: "GET_QUESTIONS",
  payload: { questions, difficulty }
});

const getQuestions = ({ category, difficulty }) => {
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

    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${catId}&difficulty=${difficulty}`
      );
      dispatch(loadQuestions(data.results, difficulty));
    } catch (err) {
      console.warn(err.message);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };
};

export default getQuestions;
