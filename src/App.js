import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Payment from "./views/Payment/Payment";
import RedirectRoute from "./utils/RedirectRoute";
import { CartContext } from "./context/CartContext";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <CartContext.Provider value={{ cart, setCart }}>
            <Route path="/login" component={Login} />
            <RedirectRoute exact path="/" component={Home} />
            <RedirectRoute path="/payment" component={Payment} />
          </CartContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
