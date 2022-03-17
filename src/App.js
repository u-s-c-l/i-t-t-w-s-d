import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<>hello world</>} />
        {/* <Route path={"/quiz/*"} element={<QuizLanding />} /> */}
        <Route exact path={"/quiz"} element={<Pages.QuizMenu />} />
        {/* This is the home page  */}
        <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
        <Route path={"/quiz/createnew/*"} element={<Pages.CreateNewGame />} />
        <Route path={"/quiz/join/*"} element={<Pages.JoinGame />} />
        <Route path={"/quiz/waiting/*"} element={<Pages.WaitingRoom />} />
        <Route path={"/quiz/game/*"} element={<Pages.PlayGame />} /> 
        <Route path={"/quiz/results/*"} element={<Pages.Results />} /> 
      </Routes>
    </div>
  );

}
// DELETE HELLO WORLD
export default App;
