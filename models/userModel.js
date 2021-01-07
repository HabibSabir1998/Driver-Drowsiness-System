const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
//Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true, minlength: 5 },
  deviceId: { type: String },
  phoneNumber: { type: Number },
});

//model
const User = mongoose.model("User", UserSchema);
module.exports = User;
