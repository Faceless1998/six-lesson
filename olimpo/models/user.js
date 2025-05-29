const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  phone: { type: String, required: true },
  resetToken: {type: String},
  resetTokenExpire: {type: String}
});

module.exports = mongoose.model("User", userSchema);
