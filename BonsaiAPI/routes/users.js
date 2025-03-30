require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Đăng ký http://localhost:3000/users/register
router.post("/register", async (req, res) => {
  const {
    fullName,
    email,
    phoneNumber,
    password,
    avata = "",
    address = "",
  } = req.body;
  console.log("Dữ liệu nhận được:", req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "false", message: "Email đã tồn tại!" });
    }

    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      password,
      avata,
      address,
    });

    await newUser.save();
    console.log("Người dùng mới đã được tạo:", newUser);

    return res
      .status(201)
      .json({ status: "true", message: "Đăng ký thành công!" });
  } catch (error) {
    console.error("Lỗi khi tạo người dùng:", error); // In chi tiết lỗi ra console
    return res.status(500).json({ status: "false", message: "Lỗi server!" });
  }
});

// Đăng nhập http://localhost:3000/users/login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Người dùng không tồn tại!" });

    // So sánh mật khẩu dạng plain text
    if (password !== user.password)
      return res.status(400).json({ message: "Mật khẩu không đúng!" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.status(200).json({
      status: "true",
      message: "Đăng nhập thành công!",
      token,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server!" });
  }
});

// API lấy thông tin người dùng qua ID http://localhost:3000/users/user/${userId}`
router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id; // Lấy ID từ URL
    const user = await User.findById(userId); // Tìm người dùng theo ID

    if (!user) {
      return res.status(404).json({
        status: "false",
        message: "Không tìm thấy người dùng!",
      });
    }

    res.status(200).json({
      status: "true",
      message: "Lấy thông tin người dùng thành công!",
      data: user,
    });
  } catch (error) {
    console.error("Lỗi lấy thông tin người dùng:", error);
    res.status(500).json({
      status: "false",
      message: "Lỗi server!",
    });
  }
});

// API cập nhật thông tin người dùng http://localhost:3000/users/update/{id}
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phoneNumber, password, avata, address } = req.body;

  try {
    // Tìm và cập nhật thông tin người dùng
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullName, email, phoneNumber, password, avata, address },
      { new: true } // Trả về document sau khi cập nhật
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "Người dùng không tồn tại!" });
    }

    res.status(200).json({
      status: true,
      message: "Cập nhật thành công!",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi cập nhật!", error: error.message });
  }
});
module.exports = router;
