const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  accessCode: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
