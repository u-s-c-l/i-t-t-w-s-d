const initState = {
  questions: [],
  difficulty: "",
  category: "",
  room: "",
  username: "",
  loading: false,
  owner: false,
  score: 0,
  currentQ: 0,
  finishQuiz: false,
  index: 0,
  multiplayer: false,
  playerScores: []
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE": {
      return {
        ...state,
        room: action.payload.room,
        category: action.payload.category,
        difficulty: action.payload.difficulty,
        username: action.payload.username,
        currentQ: action.payload.currentQ,
        owner: true
      };
    }
    case "LOAD_QUESTIONS": {
      const matchedQuestions = action.payload.map((a) => {
        const answers = [...a.incorrect_answers, a.correct_answer];
        const eachAnswer = answers.map((b) => {
          let obj = {};
          obj["answer"] = b;
          return obj;
        });
        a["answers"] = eachAnswer;
        return a;
      });
      return { ...state, questions: matchedQuestions, loading: true };
    }
    case "GET_QUESTIONS":
      return {
        ...state,
        questions: action.payload.questions,
        difficulty: action.payload.difficulty,
        loading: false,
        error: false
      };
    case "LOAD_SETTINGS":
      return {
        ...state,
        currentQ: action.payload.qnum,
        difficulty: action.payload.difficulty
      };

    case "JOIN_PLAYER": {
      return {
        ...state,
        username: action.payload.username,
        room: action.payload.room
      };
    }
    case "RECORD_ANSWER": {
      const newIndex = state.index + 1;
      const newScore = state.score + action.payload;
      const finish = newIndex === state.currentQ ? true : false;
      return { ...state, score: newScore, index: newIndex, finishQuiz: finish };
    }
    case "RECORD_PLAYER_RESULT": {
      return {
        ...state,
        playerScores: [
          ...state.playerScores,
          { username: action.payload.username, score: action.payload.score }
        ]
      };
    }

    case "LOAD_THE_GAME": {
      return { ...state, multiplayer: true };
    }

    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default quizReducer;
