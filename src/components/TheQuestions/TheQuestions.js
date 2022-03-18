import React from "react";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { recordAnswer, loading} from "../../actions";
import { Container, Row, Col } from "reactstrap";
import { shuffle, matches } from "./helpers";
import axios from "axios";


const TheQuestions = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const currentQ = useSelector((state) => state.currentQ);
  const index = useSelector((state) => state.index);
  const set = useSelector((state) => state.questions[index]);
  const score = useSelector((state) => state.score);
  const category = useSelector((state) => state.category);
  const username = useSelector((state) => state.username);
  const question = set.question;
  const cAnswer = set.correct_answer;
  const answers = shuffle(set.answers);
  const difficulty = useSelector((state) => state.difficulty);

  const postScore = async (username, category, score) => {
    await axios.post(`${process.env.REACT_APP_API_URL}scores/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cat: category,
        username: username,
        score: score
      })
    });
  };

  const addScore = (username, catId, score) => {
    const backwardsCategoryMap = {
      9: "general knowledge",
      27: "animals",
      11: "film",
      30: "gadgets",
      12: "music"
    };
    const category = backwardsCategoryMap[catId];
    console.log(category);
    return async (dispatch) => {
      dispatch(loading(category));
      console.log(category);
      try {
        await postScore(username, category, score);
      } catch (err) {
        console.warn(err.message);
      }
    };
  };

  const nextQ = (curScore) => {
    dispatch(recordAnswer(curScore));
    if (index === currentQ - 1) {
      console.log(username, category, score);
      dispatch(addScore(username, category, score));
      history("/quiz/results");
    }
  };

  const handleAnswerSelect = (answer) => {
    let curScore;
    if (difficulty === "easy") {
      curScore = answer === cAnswer ? 1 : 0;
    }
    if (difficulty === "medium") {
      curScore = answer === cAnswer ? 2 : 0;
    }
    if (difficulty === "hard") {
      curScore = answer === cAnswer ? 3 : 0;
    }

    nextQ(curScore);
  };


  return (
    <div data-testid="the-questions">
      <div>
        <h2 className="uppercase text-center text-4xl font-bold text-slate-50 pt-10">
          QUESTION {index + 1} / {currentQ}
        </h2>

        <div className="mx-8 mb-0 mt-16 rounded-lg overflow-hidden bg-slate-50 border-2 border-tblack p-4 flex flex-col items-center">
          <div>
            <p className="text-2xl py-4"> {matches(question)} </p>
          </div>
          <Container className=" space-y-4 my-3 w-fit">
            <Row className="space-y-4">
              <Col>
                <button
                  key={answers[0].answer}
                  onClick={() => handleAnswerSelect(answers[0].answer)}
                  className="bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full w-60 px-8"
                >
                  {matches(answers[0].answer)}
                </button>
              </Col>
              <Col>
                <button
                  key={answers[1].answer}
                  onClick={() => handleAnswerSelect(answers[1].answer)}
                  className="bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full w-60 px-8"
                >
                  {matches(answers[1].answer)}
                </button>
              </Col>
            </Row>
            <Row className="space-y-4">
              <Col>
                <button
                  key={answers[2].answer}
                  onClick={() => handleAnswerSelect(answers[2].answer)}
                  className="bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full w-60 px-8"
                >
                  {matches(answers[2].answer)}
                </button>
              </Col>
              <Col>
                <button
                  key={answers[3].answer}
                  onClick={() => handleAnswerSelect(answers[3].answer)}
                  className="bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full w-60 px-8"
                >
                  {matches(answers[3].answer)}
                </button>
              </Col>
            </Row>
          </Container>
          <div>
            <label className="mt-4 mb-2 block"> You have {score} points </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheQuestions;
