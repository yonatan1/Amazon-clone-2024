

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const stripe = require("stripe")(process.env.STRIPE_KEY)
const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
      message: "Success !",
      sk : process.env.STRIPE_KEY
    });
  });

  app.post("/payment/create", async (req, res) => {
    const total = parseInt(req.query.total);
    if (total > 0) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
      });
      res.status(201).json({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(403).json({
        message: "total must be greater than 0",
      });
    }
  });
  





 app.listen(6700,(err)=>{
    if (err){
        console.log(err.message)
    }else{
        console.log("server is listening to 6700")
    }
 })