const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const cors = require('cors');

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const ProductRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const StripeRoute = require("./routes/stripe");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection successfull!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);
app.use("/api/stripe", StripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend server is running.");
});
