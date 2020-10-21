const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HdUlBDZPtKd1ej9lDpTYquDAQrPUn7XQjUKd9s1FIQ9H8HVaQi2zJ7tu7R71Y3CPli79rYuHtlFHVU9jxxf0ODf00tbdriAXT"
);

// ----------  APP SET UP  ----------

// 1. App config
const app = express();

// 2. Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// 3. API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved >>>>>>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // total is in subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// 4. Listen command
exports.api = functions.https.onRequest(app); // .we get in our base endpoint /api because here we put .api
