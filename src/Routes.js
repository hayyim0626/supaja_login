import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
  );
}
