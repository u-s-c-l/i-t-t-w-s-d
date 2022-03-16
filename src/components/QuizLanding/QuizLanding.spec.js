/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import QuizLanding from ".";
import { MemoryRouter } from "react-router-dom";

describe("QuizLanding component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <QuizLanding />
      </MemoryRouter>
    );
  });

  it("links to a create game option", () => {
    const createBtn = screen.getByText(/create a game/i);
    expect(createBtn).toBeTruthy();
  });
  it("links to a join game component", () => {
    const joinBtn = screen.getByText(/join a game/i);
    expect(joinBtn).toBeTruthy();
  });
});
