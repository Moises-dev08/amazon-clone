import React from "react";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "../styles/productsForm.css";

const ProductsForm = () => {
  return (
    <div className="productsForm">
      <h3 className="productsForm__title">Welcome to Admin Panel</h3>

      <div className="productsForm__options">
        <div className="productForm">
          <div className="productForm__left">
            <h3 className="productsForm__productTitle">Phones</h3>
            <Link
              className="productsForm__productTitleLink"
              to="/productPhonesForm">
              <div className="productForm__formActions">
                <p className="productsForm__option">Add product</p>
                <AddCircleIcon />
              </div>
            </Link>
          </div>
          <div className="productForm__right">
            <img
              className="productsForm__productImage"
              src="https://http2.mlstatic.com/D_NQ_NP_956213-MLA40025451632_122019-O.webp"
              alt="phone"
            />
          </div>
        </div>

        <div className="productForm">
          <div className="productForm__left">
            <h3 className="productsForm__productTitle">Speakers </h3>
            <Link
              className="productsForm__productTitleLink"
              to="/productSpeakersForm">
              <div className="productForm__formActions">
                <p className="productsForm__option">Add product</p>
                <AddCircleIcon />
              </div>
            </Link>
          </div>
          <div className="productForm__right">
            <img
              className="productsForm__productImage"
              src="https://images-na.ssl-images-amazon.com/images/I/71o5w0ZfptL._AC_SL1500_.jpg"
              alt="speakers"
            />
          </div>
        </div>

        <div className="productForm">
          <div className="productForm__left">
            <h3 className="productsForm__productTitle">Tv </h3>
            <Link
              className="productsForm__productTitleLink"
              to="/productTvForm">
              <div className="productForm__formActions">
                <p className="productsForm__option">Add product</p>
                <AddCircleIcon />
              </div>
            </Link>
          </div>
          <div className="productForm__right">
            <img
              className="productsForm__productImage"
              src=" https://images.samsung.com/is/image/samsung/africa-en-fhdtv-n5300-global-ua49n5300arxxa-frontblack-153239974?$684_547_PNG$"
              alt="tv"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsForm;
