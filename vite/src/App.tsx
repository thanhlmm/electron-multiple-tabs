import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>Hello world!</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
