const initState = {
  category: "",
  questions: []
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, location: action.payload, loading: true };
    case "GET_QUESTIONS":
      return {
        ...state,
        location: action.payload,
        loading: false,
        error: false
      };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default quizReducer;
