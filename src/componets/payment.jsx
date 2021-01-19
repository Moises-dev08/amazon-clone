import React, { useState, useEffect } from "react";
import axios from "../axios";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import CheckoutProduct from "./checkoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../state/reducer";
import Tooltip from "@material-ui/core/Tooltip";
import { db } from "../firebase";
import "../styles/payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const history = useHistory();
  const elements = useElements();

  // Variables
  const [succeeded, setSucceeded] = useState();
  const [processing, setProcessing] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret whith allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunit (1 usd = 1 cent)
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    // do all the stripe stuff
    event.preventDefault();
    setProcessing(true); // with this you can only click onces the button

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          // Find the card data
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        // NOSQL database
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id) // here we are creating a document and adding the information below
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created, // will give us a timestamp when the order was created
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        // if the user press the back keyword we dont want him coming back to the payment page.
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__address">
            <h3> User</h3>
            <p> {user?.email}</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3> Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <Tooltip title="Test this feature by typing 424242..." arrow>
          <div className="payment__section">
            <div className="payment__title">
              <h3> Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Payment;
