const stripe = require("stripe")(process.env.STRIPE_KEY);
const uuid = require("uuid");
const StripeRouter = require("express").Router();

StripeRouter.post("/payment", (req, res) => {
  const { product, token } = req.body;
  const idempontencyKey = uuid.v4();

  // console.log({ product, token });

  stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.paymentIntents.create(
        {
          amount: product.price*100,
          currency: "inr",
        }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

module.exports = StripeRouter;
