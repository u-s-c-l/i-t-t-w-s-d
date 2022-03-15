import React from "react";
import QuizLanding from "./components/QuizLanding";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<></>} />
        <Route path={"/quiz/*"} element={<QuizLanding />} />
        <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
      </Routes>
    </div>
  );

}
// DELETE HELLO WORLD
export default App;
