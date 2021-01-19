import React from "react";
import { useStateValue } from "../state/StateProvider";
import "../styles/product.css";

const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();

  const convertToNumber = Number(rating);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(convertToNumber)
            .fill()
            .map((_, i) => (
              <p>
                <span role="img" aria-label="start">
                  🌟
                </span>
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
