import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router";
import { recordAnswer } from "../../actions";
import { Container, Row, Col } from "reactstrap";
import { shuffle, matches } from "./helpers";

const TheQuestions = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const numQ = useSelector((state) => state.numQ);
  const index = useSelector((state) => state.index);
  const set = useSelector((state) => state.questions[index]);
  const score = useSelector((state) => state.score);
  const question = set.question;
  const cAnswer = set.correct_answer;
  const answers = shuffle(set.answers);
  const difficulty = useSelector((state) => state.difficulty);

  const callNextQuestion = (curScore) => {
    dispatch(recordAnswer(curScore));
    if (index === numQ - 1) {
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

    callNextQuestion(curScore);
  };


  return (
    <div>
      <div>
        <h2>
          QUESTION {index + 1} / {numQ}
        </h2>

        <div>
          <p > {matches(question)} </p>
        </div>

        <Container>
          <Row >
            <Col>
              <button
                key={answers[0].answer}
                onClick={() => handleAnswerSelect(answers[0].answer)}
              >
                {matches(answers[0].answer)}
              </button>
            </Col>
            <Col>
              <button
                key={answers[1].answer}
                onClick={() => handleAnswerSelect(answers[1].answer)}
              >
                {matches(answers[1].answer)}
              </button>
            </Col>
          </Row>
          <Row >
            <Col>
              <button

                key={answers[2].answer}
                onClick={() => handleAnswerSelect(answers[2].answer)}
              >
                {matches(answers[2].answer)}
              </button>
            </Col>
            <Col>
              <button
                key={answers[3].answer}
                onClick={() => handleAnswerSelect(answers[3].answer)}
              >
                {matches(answers[3].answer)}
              </button>
            </Col>
          </Row>
        </Container>

        <div >
          <label> You have {score} points </label>
        </div>
      </div>
    </div>
  );
};

export default TheQuestions;
