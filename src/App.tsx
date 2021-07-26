import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Inbox from "./pages/inbox";
import Jobs from "./pages/jobs";
import Profile from "./pages/profile";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/jobs">
        <Jobs />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/inbox">
        <Inbox />
      </Route>
    </Switch>
  );
}

export default App;
