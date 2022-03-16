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
      </Routes>
    </div>
  );

}
// DELETE HELLO WORLD
export default App;
