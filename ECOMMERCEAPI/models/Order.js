const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    UserId: { type: String, required: true },
    Product: [
      {
        productID: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],

    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", OrderSchema);
