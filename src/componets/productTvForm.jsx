import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import "../styles/productTvForm.css";

const ProductsTvForm = () => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create collection for new CheckoutProduct
    db.collection("tv").doc().set({
      title: title,
      price: price,
      rating: rating,
      image: image,
    });
  };

  return (
    <div className="productFormAction">
      <div className="productFormAction__left">
        <form className="productFormAction__form">
          <h3 className="productFormAction__title">Product title:</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h3 className="productFormAction__title">Product price:</h3>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <h3 className="productFormAction__title">Product rating:</h3>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <h3 className="productFormAction__title">Product image:</h3>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            type="submit"
            className="productFormAction__button"
            onClick={handleSubmit}>
            <Link className="productFormAction__link" to="/">
              Create new product
            </Link>
          </button>
        </form>
        <div className="productFormAction__right">
          <img
            className="productFormAction__image"
            src=" https://images.samsung.com/is/image/samsung/africa-en-fhdtv-n5300-global-ua49n5300arxxa-frontblack-153239974?$684_547_PNG$"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsTvForm;
