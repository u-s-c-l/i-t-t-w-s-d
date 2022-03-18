import React from "react";
import { Header } from "./layout";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { currentUser } = useAuthContext();

  return (
    <div className="App bg-gradient-to-r from-tpink to-torange min-h-screen text-tblack max-w-sm mx-auto">
      <Header />
      <Routes>
        <Route path={"/"} element={<Pages.About />} />
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
            <Route exact path={"/quiz"} element={<Pages.QuizMenu />} />
            {/* This is the home page  */}
            <Route
              path={"/quiz/createnew/*"}
              element={<Pages.CreateNewGame />}
            />
            <Route path={"/quiz/join/*"} element={<Pages.JoinGame />} />
            <Route path={"/quiz/waiting/*"} element={<Pages.WaitingRoom />} />
            <Route path={"/quiz/game/*"} element={<Pages.PlayGame />} />
            <Route path={"/quiz/results/*"} element={<Pages.Results />} />
          </>
        )}
        <Route path="/*" element={<Pages.NotFound />} />
      </Routes>
    </div>
  );
}
// DELETE HELLO WORLD
export default App;
