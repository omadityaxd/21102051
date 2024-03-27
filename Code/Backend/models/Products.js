const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  discount: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("products", UserSchema);
module.exports = userModel;
