import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
      <Redirect exact from="/jobs" to="/jobs/page-1" />
      <Route path="/jobs/page-:pageId">
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
