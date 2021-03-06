const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  info: { type: String },
  title: { type: String },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("users", UserSchema);
