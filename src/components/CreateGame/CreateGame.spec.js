/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import CreateGame from ".";

describe("CreateGame component", () => {
  let startGame;
  beforeEach(() => {
    startGame = jest.fn();
    const getQuestions = jest.fn();
    render(<CreateGame getQuestions={getQuestions} startGame={startGame} />);
  });

  it.skip("returns a form", () => {
    const form = screen.getByLabelText(/create game form/i);
    expect(form).toBeTruthy();
  });
});
