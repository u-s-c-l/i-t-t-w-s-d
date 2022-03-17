import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { AuthProvider } from "../contexts/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { quizReducer } from "../reducers";
import { SocketProvider } from "../components/SocketContext/SocketContext";
import { MemoryRouter } from "react-router-dom";

const TestProviders = ({ initialState }) => {
  initialState ||= {
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
  let testReducer = () =>
    quizReducer(initialState, {
      type: "@@INIT"
    });
  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => (
    <AuthProvider>
      <SocketProvider>
        <MemoryRouter>
          <Provider store={testStore}>{children}</Provider>
        </MemoryRouter>
      </SocketProvider>
    </AuthProvider>
  );
};

const renderWithProviders = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

global.React = React;
global.render = render;
global.renderWithProviders = renderWithProviders;
global.userEvent = userEvent;
