import axios from "axios";

const loading = (category) => ({ type: "LOADING", payload: category });

const loadQuestions = (questions, difficulty) => ({
  type: "GET_QUESTIONS",
  payload: { questions, difficulty }
});


// combined getQuestions with startGame function

const getQuestions = async ( category, difficulty ) => {
  // const categoryMap = {
  //   generalknowledge: 9,
  //   animals: 27,
  //   film: 11,
  //   gadgets: 30,
  //   music: 12
  // };
  // const catId = categoryMap[category];

  // return async (dispatch) => {
  //   dispatch(loading(category));

  try {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    return(data.results);
  } catch (err) {
    console.warn(err.message);
  }
};



export const joinPlayer = (username, room) => ({
  type: "JOIN_PLAYER",
  payload: {username, room}
});

export default getQuestions;
