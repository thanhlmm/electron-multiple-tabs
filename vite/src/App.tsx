import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    window.send("greeting").then((data) => {
      console.log(data);
      setServerMessage(data);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>Hello world! (This message from client app)</div>
          {serverMessage && <div>{serverMessage}</div>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
