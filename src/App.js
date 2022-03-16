import React from "react";
import QuizLanding from "./components/QuizLanding";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<>hello world</>} />
        <Route path={"/quiz/*"} element={<QuizLanding />} />
        <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
        {/* <Route path={"/quiz/join/*"} element={<Pages.Join />} /> */}
        {/* <Route path={"/quiz/waiting/*"} element={<Pages.Waiting />} /> */}
        {/* <Route path={"/quiz/game/*"} element={<Pages.Game />} /> */}
        {/* <Route path={"/quiz/results/*"} element={<Pages.Results />} /> */}
      </Routes>
    </div>
  );

}
// DELETE HELLO WORLD
export default App;
