/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Answers from ".";

describe("Answer component", () => {
  beforeEach(() => {
    const handleChange = jest.fn();
    render(
      <Answers
        correct_answer="Edward is the best"
        incorrect_answers={["edward is the worst", "edward is okay"]}
        handleChange={handleChange}
      />
    );
  });
  it("returns a form", () => {
    const form = screen.getByLabelText(/answers form/i);
    expect(form).toBeTruthy();
  });

  it("has three children", () => {
    const form = screen.getByLabelText(/answers form/i);
    expect(form.childElementCount).toBe(3);
  });
});
