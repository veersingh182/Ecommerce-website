const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

const userRouter = require("express").Router();
const UserModel = require("../models/User");

userRouter.route("/:id").put(verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch {
    res.status(500).json(err);
  }
});

userRouter.delete("/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const user = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = userRouter;