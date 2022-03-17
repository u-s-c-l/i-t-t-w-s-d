import { quizReducer } from ".";

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

describe("quizReducer", () => {
  test("it initialises with no questions, username, etc", () => {
    const initReturn = quizReducer(undefined, { type: "@@INIT" });
    expect(initReturn).toEqual({
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
    });
  });

  test("it returns updated room data when room is created", () => {
    const fakeCreate = quizReducer(
      {
        difficulty: "",
        category: "",
        room: "",
        username: "",
        currentQ: 0
      },
      {
        type: "CREATE",
        payload: {
          room: "test room",
          category: "test cat",
          difficulty: "test diff",
          username: "tester",
          currentQ: 1
        }
      }
    );
    expect(fakeCreate).toMatchObject({
      room: "test room",
      category: "test cat",
      difficulty: "test diff",
      username: "tester",
      currentQ: 1
    });
  });

  test("it returns questions", () => {
    const fakeLoadQ = quizReducer(
      {
        questions: [],
        loading: false
      },
      {
        type: "LOAD_QUESTIONS",
        payload: [
          {
            incorrect_answers: ["wrong1", "wrong2"],
            correct_answers: ["correct1"]
          },
          {
            incorrect_answers: ["wrong11", "wrong22"],
            correct_answers: ["correct11"]
          }
        ]
      }
    );
    expect(fakeLoadQ).toMatchObject({
      questions: [
        {
          answers: [
            {
              answer: "wrong1"
            },
            {
              answer: "wrong2"
            },
            {
              answer: undefined
            }
          ],
          correct_answers: ["correct1"],
          incorrect_answers: ["wrong1", "wrong2"]
        },
        {
          answers: [
            {
              answer: "wrong11"
            },
            {
              answer: "wrong22"
            },
            {
              answer: undefined
            }
          ],
          correct_answers: ["correct11"],
          incorrect_answers: ["wrong11", "wrong22"]
        }
      ],
      loading: true
    });
  });

  test("it returns questions when questions are requested", () => {
    const fakeGetQ = quizReducer(
      {
        questions: [],
        difficulty: ""
      },
      {
        type: "GET_QUESTIONS",
        payload: {
          questions: ["q1", "q2", "q3"],
          difficulty: "test diff"
        }
      }
    );
    expect(fakeGetQ).toMatchObject({
      questions: ["q1", "q2", "q3"],
      difficulty: "test diff"
    });
  });

  test("it returns question number when settings are loaded", () => {
    const fakeLoadSettings = quizReducer(
      {
        currentQ: 0,
        difficulty: ""
      },
      {
        type: "LOAD_SETTINGS",
        payload: {
          qnum: 1,
          difficulty: "test diff"
        }
      }
    );
    expect(fakeLoadSettings).toMatchObject({
      currentQ: 1,
      difficulty: "test diff"
    });
  });

  test("it returns username and room when joining player", () => {
    const fakeJoinPlayer = quizReducer(
      {
        username: "",
        room: ""
      },
      {
        type: "JOIN_PLAYER",
        payload: {
          username: "tester",
          room: "test room"
        }
      }
    );
    expect(fakeJoinPlayer).toMatchObject({
      username: "tester",
      room: "test room"
    });
  });

  test("it returns updated score after each question", () => {
    const fakeRecordAnswer = quizReducer(
      {
        score: 0,
        index: 1,
        finishQuiz: false,
        currentQ: 2
      },
      {
        type: "RECORD_ANSWER",
        payload: 2
      }
    );
    expect(fakeRecordAnswer).toMatchObject({
      score: 2
    });
  });

  test("it returns updated score after each question", () => {
    const fakeRecordAnswer = quizReducer(
      {
        score: 0,
        index: 2,
        finishQuiz: false,
        currentQ: 2
      },
      {
        type: "RECORD_ANSWER",
        payload: 2
      }
    );
    expect(fakeRecordAnswer).toMatchObject({
      score: 2
    });
  });

  test("it adds new score to player scores array", () => {
    const fakeRecPlayerResult = quizReducer(
      {
        playerScores: [
          { username: "testman1", score: 12 },
          { username: "testman2", score: 3 }
        ]
      },
      {
        type: "RECORD_PLAYER_RESULT",
        payload: {
          username: "tester",
          score: 20
        }
      }
    );
    expect(fakeRecPlayerResult).toMatchObject({
      playerScores: [
        { username: "testman1", score: 12 },
        { username: "testman2", score: 3 },
        { username: "tester", score: 20 }
      ]
    });
  });

  test("sets multiplayer to true when game is loaded", () => {
    const fakeLoadGame = quizReducer(
      {
        multiplayer: false
      },
      {
        type: "LOAD_THE_GAME",
        payload: {
          multiplayer: true
        }
      }
    );
    expect(fakeLoadGame).toMatchObject({
      multiplayer: true
    });
  });

  test("sets error and stops loading", () => {
    const fakeError = quizReducer(
      {
        loading: true
      },
      {
        type: "SET_ERROR",
        payload: "test error"
      }
    );
    expect(fakeError).toMatchObject({
      error: "test error",
      loading: false
    });
  });
});
