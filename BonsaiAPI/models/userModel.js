const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const user = new Schema({
  id: { type: ObjectId }, // khóa chính
  fullName: {
    type: String, // kiểu dữ liệu
    required: true,
  },
  email: {
    type: String, // kiểu dữ liệu
    required: true,
  },
  phoneNumber: {
    type: String, // kiểu dữ liệu
    required: true,
  },
  password: {
    type: String, // kiểu dữ liệu
    required: true,
  },
  avata: {
    type: String, // kiểu dữ liệu
    default: "",
  },
  address: {
    type: String, // kiểu dữ liệu
    default: "",
  },
});
module.exports = mongoose.models.category || mongoose.model("user", user);
