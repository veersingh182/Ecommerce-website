const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

const ProductRouter = require("express").Router();
const ProductModel = require("../models/Product");

ProductRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductModel(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

ProductRouter.route("/:id").put(verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch {
    res.status(500).json(err);
  }
});

ProductRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

ProductRouter.get("/find/:id", async (req, res) => {
  try {
    const Product = await ProductModel.findById(req.params.id);
    const { password, ...other } = Product._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

ProductRouter.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew && !qCategory) {
      products = await ProductModel.find().sort({ createdAt : -1 }).limit(1);
    } else if (qCategory) {
      products = await ProductModel.find({ categories: { $in: [qCategory] } });
    } else {
      products = await ProductModel.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = ProductRouter;
