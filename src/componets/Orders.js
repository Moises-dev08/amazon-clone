import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users") // accesing the user collection
        .doc(user?.uid) // geting the specific user
        .collection("orders") // is going to return all the orders as documents
        .orderBy("created", "desc") // we are ordering based in the time we created the order and in descendent order (meaning that the most recent should we on the top)
        .onSnapshot(
          (snapshot) =>
            // if we push or remove a value into the database we 'll provide a roadtime response
            setOrders(
              snapshot.docs.map((doc) => ({
                // is maping throw them
                id: doc.id,
                data: doc.data(),
              }))
            ) // onSnapshot() give us a snapshot of the data base, what it looks like!
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
