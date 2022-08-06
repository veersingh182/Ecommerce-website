const {
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");

const OrderRouter = require("express").Router();
const OrderModel = require("../models/Order");

OrderRouter.post("/", verifyToken, async (req, res) => {
  const newOrder = new OrderModel(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

OrderRouter.route("/:id").put(verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch {
    res.status(500).json(err);
  }
});

OrderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

OrderRouter.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

OrderRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

OrderRouter.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderModel.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = OrderRouter;
