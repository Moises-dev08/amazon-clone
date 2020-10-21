import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Checkout from "./componets/Checkout";
import Payment from "./componets/Payment";
import Orders from "./componets/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

const promise = loadStripe(
  "pk_test_51HdUlBDZPtKd1ej97ZDEVfamJdcVC9NuQpAFmmQZBCn1iNESYicBXi4PME5fSknitYxtKzSZ7fxWDnFuUqkTgWAS009NHtnjr7"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...

    // Firebase listener is active start the app
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
