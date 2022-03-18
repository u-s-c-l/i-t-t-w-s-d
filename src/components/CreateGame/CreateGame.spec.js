/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen } from "@testing-library/react";
import CreateGame from ".";

describe("CreateGame component", () => {
  let startGame;
  beforeEach(() => {
    startGame = jest.fn();
    const getQuestions = jest.fn();
    renderWithProviders(
      <CreateGame getQuestions={getQuestions} startGame={startGame} />
    );
  });

  xit("returns a form", () => {
    const form = screen.getByLabelText(/create game form/i);
    expect(form).toBeTruthy();
  });
});
