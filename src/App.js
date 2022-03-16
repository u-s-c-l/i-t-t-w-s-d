import React from "react";
import { Header, Footer } from "./layout";
import * as CustomRoutes from "./routing";
import QuizLanding from "./components/QuizLanding";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Pages.Home />} />
        <Route path={"/about"} element={<Pages.About />} />
        <CustomRoutes.LoggedOutRoute path="/login">
                        <Pages.About />
                    </CustomRoutes.LoggedOutRoute>
                    <CustomRoutes.LoggedOutRoute path="/register">
                        <Pages.About />
                    </CustomRoutes.LoggedOutRoute>
        <Route path={"/quiz/*"} element={<QuizLanding />} />
        <Route path={"/quiz/create/*"} element={<Pages.Quiz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
