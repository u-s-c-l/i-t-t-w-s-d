import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

// change quiz page to create page and separate all

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<>hello world</>} />
        {/* <Route path={"/quiz/*"} element={<QuizLanding />} /> */}
        <Route exact path={"/quiz"} element={<Pages.QuizMenu />} />
        {/* This is the home page  */}
        <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
        {/* <Route path={"/quiz/create/*"} element={<Pages.CreateGame />} /> */}
        <Route path={"/quiz/join/*"} element={<Pages.JoinGame />} />
        <Route path={"/quiz/waiting/*"} element={<Pages.WaitingRoom />} />
        {/* <Route path={"/quiz/game/*"} element={<Pages.Game />} /> */}
        {/* <Route path={"/quiz/results/*"} element={<Pages.Results />} /> */}
      </Routes>
    </div>
  );

}
// DELETE HELLO WORLD
export default App;
