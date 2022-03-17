import React from "react";
import { Header } from "./layout";
import QuizLanding from "./components/QuizLanding";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { useAuthContext } from "./contexts";

function App() {
  const { currentUser } = useAuthContext();

  return (
    <div className="App bg-gradient-to-r from-tpink to-torange min-h-screen">
      <Header />
      <Routes>
        <Route path={"/"} element={<Pages.Home />} />
        <Route path={"/about"} element={<Pages.About />} />
        <Route path={"/settings"} element={<Pages.Settings />} />
        <Route path={"/chatroom"} element={<Pages.ChatRoom />} />
        {!currentUser ? (
          <>
            <Route path={"/login"} element={<Pages.About />} />
            <Route path={"/register"} element={<Pages.About />} />
            <Route path={"/quiz/*"} element={<Pages.About />} />
            <Route path={"/quiz/create/*"} element={<Pages.About />} />
          </>
        ) : (
          <>
            <Route path={"/quiz/*"} element={<QuizLanding />} />
            <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
          </>
        )}
        {/* <Route element={<Pages.NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
