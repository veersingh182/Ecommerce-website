const {
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

const CartRouter = require("express").Router();
const CartModel = require("../models/Cart");

CartRouter.post("/", verifyToken, async (req, res) => {
  const newCart = new CartModel(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

CartRouter.route("/:id").put(verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch {
    res.status(500).json(err);
  }
});

CartRouter.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

CartRouter.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.params.userId });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

CartRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try{
    const carts = await CartModel.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = CartRouter;
