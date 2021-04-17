import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Payment from "./views/Payment/Payment";
import RedirectRoute from "./utils/RedirectRoute";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <RedirectRoute exact path="/" component={Home} />
            <RedirectRoute path="/payment" component={Payment} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
