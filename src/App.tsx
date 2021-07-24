import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Jobs from "./pages/jobs";

export const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Otta Clone</h2>
    </div>
  );
};

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
    </Switch>
  );
}

export default App;
