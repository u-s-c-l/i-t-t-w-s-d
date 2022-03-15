import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./layout";
import { About, Home, UserProfile } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
