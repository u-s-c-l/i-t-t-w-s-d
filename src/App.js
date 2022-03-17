import React from "react";
import { Header, Footer } from "./layout";
import QuizLanding from "./components/QuizLanding";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
// import { useAuthContext } from "./contexts";

function App() {
  // const { currentUser } = useAuthContext();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Pages.Home />} />
        <Route path={"/about"} element={<Pages.About />} />
        <Route path={"/settings"} element={<Pages.Settings />} />
        {/* {!currentUser ? (
          <>
            <Route path={"/login"} element={<Pages.About />} />
            <Route path={"/register"} element={<Pages.About />} />
          </>
        ) : (
          <></>
        )} */}

        <Route path={"/quiz/*"} element={<QuizLanding />} />
        <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
