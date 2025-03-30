const express = require("express");
const router = express.Router();
const Payment = require("../models/paymentModel");
const Cart = require("../models/cartModel");

// API: Xử lý thanh toán
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      cartId,
      address,
      phone,
      paymentMethod,
      shippingMethod,
      total,
    } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (
      !userId ||
      !cartId ||
      !address ||
      !phone ||
      !paymentMethod ||
      !shippingMethod ||
      !total
    ) {
      return res.status(400).json({ message: "Thiếu thông tin thanh toán!" });
    }

    // Kiểm tra giỏ hàng có tồn tại không
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Giỏ hàng không tồn tại!" });
    }

    // Tạo đơn hàng
    const newPayment = new Payment({
      userId,
      cartId,
      address,
      phone,
      paymentMethod,
      shippingMethod,
      total,
    });

    // Lưu vào DB
    await newPayment.save();

    res
      .status(201)
      .json({
        status: true,
        message: "Thanh toán thành công!",
        payment: newPayment,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi thanh toán!", error: error.message });
  }
});

// API: Lấy danh sách đơn hàng của người dùng
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const payments = await Payment.find({ userId }).sort({ createdAt: -1 });

    res
      .status(200)
      .json({ message: "Lấy danh sách đơn hàng thành công!", payments });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách đơn hàng!",
      error: error.message,
    });
  }
});

module.exports = router;
