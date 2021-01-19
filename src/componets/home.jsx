import React, { useState, useEffect } from "react";
import Product from "./product";
import { db } from "../firebase";
import "../styles/home.css";

const Home = () => {
  const [speakersData, setSpeakersData] = useState([]);
  const [phonesData, setPhonesData] = useState([]);
  const [tvData, setTvData] = useState([]);

  useEffect(() => {
    db.collection("speakers").onSnapshot((snapshot) =>
      setSpeakersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    db.collection("phones").onSnapshot((snapshot) =>
      setPhonesData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    db.collection("tv").onSnapshot((snapshot) =>
      setTvData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt=""></img>
        <h3 className="home__rowTitle"> Speakers</h3>
        <div className="home__row">
          {speakersData?.map((speakerData) => (
            // const convertToNumber = Number(productData.data.rating);

            <Product
              id={speakerData.data.id}
              title={speakerData.data.title}
              price={speakerData.data.price}
              rating={speakerData.data.rating}
              image={speakerData.data.image}
            />
          ))}
        </div>
        <h3 className="home__rowTitle"> Phones</h3>
        <div className="home__row">
          {phonesData?.map((phoneData) => (
            // const convertToNumber = Number(productData.data.rating);

            <Product
              id={phoneData.data.id}
              title={phoneData.data.title}
              price={phoneData.data.price}
              rating={phoneData.data.rating}
              image={phoneData.data.image}
            />
          ))}
        </div>

        <h3 className="home__rowTitle"> Tv </h3>
        <div className="home__row">
          {tvData?.map((tvItemData) => (
            // const convertToNumber = Number(productData.data.rating);

            <Product
              id={tvItemData.data.id}
              title={tvItemData.data.title}
              price={tvItemData.data.price}
              rating={tvItemData.data.rating}
              image={tvItemData.data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
