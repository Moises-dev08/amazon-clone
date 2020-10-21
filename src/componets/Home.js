import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt=""></img>
        <div className="home__row">
          <div className="home__product">
            <Product
              id="1"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={15.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            />
          </div>

          <div className="home__product">
            <Product
              id="2"
              title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
              price={359.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            />
          </div>
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Enameled Cast Iron Dutch Oven - 6-Quart, Grey"
            price={44.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/818BtMx1D2L._AC_SL1500_.jpg"
          />
          <Product
            id="4"
            title="Hardside Carry-On Spinner Suitcase Luggage - Expandable with Wheels - 21 Inch, Black"
            price={54.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg"
          />
          <Product
            id="5"
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price={150.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung Electronics UN32N5300AFXZA 32' 1080p Smart LED TV (2018), Black"
            price={200.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91UsHjAPTlL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
