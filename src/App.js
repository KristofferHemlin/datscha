import React from "react";
import "./App.css";
import Login from "./container/Login/Login";
import Index from "./container/Index/Index";
import Notfound from "./container/Notfound/Notfound";
import AuthenticatedRoute from "./container/Auth/AuthenticatedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <AuthenticatedRoute exact path="/index" component={Index} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
