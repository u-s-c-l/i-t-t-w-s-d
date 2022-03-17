const initState = {
  questions: [],
  difficulty: "",
  category: "",
  room: "",
  username: "",
  loading: false, 
  owner: false,
  score: 0,
  NoOfQus: 0
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE": {
      console.log(action.payload);
      return {
        ...state,
        room: action.payload.room,
        category: action.payload.category,
        difficulty: action.payload.difficulty,
        username: action.payload.username,
        admin: true,
        NoOfQus: action.payload.NoOfQus
      };
    }
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
    case "JOIN_PLAYER": {
      return {
        ...state,
        username: action.payload.username,
        room: action.payload.room
      };
    }

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default quizReducer;
