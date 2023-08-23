const mongoose = require("mongoose");
const { exerciseSchema } = require("./exercise");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  log: [exerciseSchema],
});

module.exports = mongoose.model("User", userSchema);
