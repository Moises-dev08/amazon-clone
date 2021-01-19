import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./componets/header";
import Home from "./componets/home";
import Login from "./componets/login";
import Checkout from "./componets/checkout";
import ProductsForm from "./componets/productsForm";
import ProductTvForm from "./componets/productTvForm";
import Payment from "./componets/payment";
import Orders from "./componets/orders";
import Footer from "./componets/footer";
import { auth } from "./firebase";
import { useStateValue } from "./state/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./styles/app.css";
import ProductPhonesForm from "./componets/productPhonesForm";
import ProductSpeakersForm from "./componets/productSpeakersForm";

const promise = loadStripe(
  "pk_test_51HdUlBDZPtKd1ej97ZDEVfamJdcVC9NuQpAFmmQZBCn1iNESYicBXi4PME5fSknitYxtKzSZ7fxWDnFuUqkTgWAS009NHtnjr7"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path="/productsForm">
            <Header />
            <ProductsForm />
            <Footer />
          </Route>

          <Route path="/productPhonesForm">
            <Header />
            <ProductPhonesForm />
            <Footer />
          </Route>

          <Route path="/productSpeakersForm">
            <Header />
            <ProductSpeakersForm />
            <Footer />
          </Route>

          <Route path="/productTvForm">
            <Header />
            <ProductTvForm />
            <Footer />
          </Route>

          <Route path="/productsForm">
            <Header />
            <ProductsForm />
            <Footer />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
