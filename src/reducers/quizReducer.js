const initState = {
  questions: [],
  difficulty: "",
  category: "",
  room: "",
  playerScores: [],
  loading: false, 
  admin: false
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, questions: action.payload, loading: true };
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload.questions,
        difficulty: action.payload.difficulty,
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
