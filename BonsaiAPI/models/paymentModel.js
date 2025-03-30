const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  paymentMethod: {
    type: String,
    enum: ["COD", "VNPay", "Momo"],
    required: true,
  },
  shippingMethod: {
    type: String,
    enum: ["Standard", "Express"],
    required: true,
  },
  total: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("payment", paymentSchema);
