import React from "react";
import { Redirect, Route } from "react-router-dom";

const LogIn = React.lazy(() => import("./components/Home"));

function App() {
  return (
    <React.Fragment>
      <Route path="/home">
        <LogIn />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" path="/"></Redirect>
      </Route>
    </React.Fragment>
  );
}

export default App;
