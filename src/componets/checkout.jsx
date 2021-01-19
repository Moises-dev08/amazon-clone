import React from "react";
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutProduct";
import { useStateValue } from "../state/StateProvider";
import "../styles/checkout.css";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://shoppingrechargeoffers.com/wp-content/uploads/2018/01/10cash-back-Amazon.png"
          alt=""
        />

        <div>
          <h3> Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
