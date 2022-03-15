import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
//import SocketProvider from "./components/SocketContext";

// commented SocketProvider out until server deployed because need the server running at the same time for it to work :( 

ReactDOM.render(
  <React.StrictMode>
    {/* <SocketProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </SocketProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
