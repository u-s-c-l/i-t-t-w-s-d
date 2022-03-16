/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import QACard from ".";

describe("QACard component", () => {
  beforeEach(() => {
    const question = "Who is the best?";
    const correct_answer = "Edward";
    const incorrect_answers = ["Noah", "Jumaanah", "Giacomo", "Samina"];
    const handleChange = jest.fn();
    render(
      <QACard
        question={question}
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
        handleChange={handleChange}
      />
    );
  });

  it("returns a div with two children", () => {
    const div = screen.getByTestId(/QAcard-wrapper/i);
    expect(div.childElementCount).toBe(2);
  });

  it("has the question inside the document", () => {
    const question = screen.getByTestId(/question-element/iu);
    expect(question).toBeInTheDocument();
    expect(question.textContent).toMatch(/who is the best/i);
  });

  it("has all the answers displaced", () => {
    const answers = screen.getByLabelText("Answers Form");
    expect(answers).toBeInTheDocument();
    expect(answers.textContent).toMatch(/edward/i);
    expect(answers.textContent).toMatch(/jumaanah/i);
    expect(answers.textContent).toMatch(/noah/i);
    expect(answers.textContent).toMatch(/samina/i);
    expect(answers.textContent).toMatch(/giacomo/i);
  });
});
