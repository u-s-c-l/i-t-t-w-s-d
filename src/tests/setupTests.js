import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { AuthProvider } from "../contexts/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { quizReducer } from "../reducers";

const TestProviders = ({ initialState }) => {
  initialState ||= {
    questions: [],
    difficulty: "",
    loading: false
  };
  let testReducer = () =>
    quizReducer(initialState, {
      type: "@@INIT"
    });
  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => (
    <AuthProvider>
      <Provider store={testStore}>{children}</Provider>
    </AuthProvider>
  );
};

const renderWithProviders = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

global.React = React;
global.screen = screen;
global.renderWithProviders = renderWithProviders;
global.userEvent = userEvent;
