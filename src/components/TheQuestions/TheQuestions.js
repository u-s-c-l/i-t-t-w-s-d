import React from "react";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { recordAnswer } from "../../actions";
import { Container, Row, Col } from "reactstrap";
import { shuffle, matches } from "./helpers";

// const questionTime = 15;

const TheQuestions = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const currentQ = useSelector((state) => state.currentQ);
  const index = useSelector((state) => state.index);
  const set = useSelector((state) => state.questions[index]);
  const score = useSelector((state) => state.score);
  const question = set.question;
  const cAnswer = set.correct_answer;
  const answers = shuffle(set.answers);
  const difficulty = useSelector((state) => state.difficulty);

  const nextQ = (curScore) => {
    dispatch(recordAnswer(curScore));
    // setTimer(questionTime);
    if (index === currentQ - 1) {
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

  // const zeroScore = () => {
  //   const curScore = 0;
  //   nextQ(curScore);
  // };

  // const [timer, setTimer] = useState(questionTime);
  // const [second, setSecond] = useState(timer);

  // useEffect(() => {
  //   let myInterval = setInterval(() => {
  //     if (second > 0) {
  //       setSecond(second - 1);
  //     }
  //   }, 1000);
  //   return () => clearInterval(myInterval);
  // });

  // useEffect(() => {
  //   setSecond(timer);
  // }, [index]);

  // useEffect(() => {
  //   if (second === 0) {
  //     zeroScore();
  //   }
  // }, [second]);

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
