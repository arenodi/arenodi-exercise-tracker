let mongoose = require("mongoose");

let exerciseSchema = new mongoose.Schema({
  description: String,
  duration: Number,
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports.exerciseSchema = exerciseSchema;
module.exports.ExerciseModel = mongoose.model("Exercise", exerciseSchema);
